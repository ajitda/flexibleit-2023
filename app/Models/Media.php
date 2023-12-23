<?php

namespace App\Models;

use Database\Factories\MediaFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Media extends Model
{
    use HasFactory;

    protected $fillable = [
        'type',
        'thumbnail',
        'width',
        'height',
        'url',
        'path',
        'author_id',
        'status',
        'vimeo_id',
        'upload_url',
        //	'download_url',
        //	'mime_type',
        'mediable_type',
        'mediable_id',
        'key',    // TUS key info
        'order',  // storing ordering / sorting information
        'meta',   // storing extra information, such as attachment type
    ];

    public $removeFile = true;

    public static function boot()
    {
        parent::boot();
        self::deleting(function ($media) {

            if (!$media->removeFile) return;

            $localUrl = Storage::disk('public')->url('uploads');
            $spaceUrl = !empty(config('filesystems.spaces.key')) ? Storage::disk('spaces')->url('u' . $media->author_id) : false;
            if (preg_match("#^$localUrl(.*)#i", $media->getAttributes()['thumbnail'], $matches)) {
                Storage::disk('public')->delete('uploads/' . $matches[1]);
            } else if ($spaceUrl && preg_match("#^$spaceUrl(.*)#i", $media->getAttributes()['thumbnail'], $matches)) {
                Storage::disk('spaces')->delete('u' . $media->author_id . '/' . $matches[1]);
            }
            if (preg_match("#^$localUrl(.*)#i", $media->url, $matches)) {
                Storage::disk('public')->delete('uploads/' . $matches[1]);
            } else if ($spaceUrl && preg_match("#^$spaceUrl(.*)#i", $media->url, $matches)) {
                Storage::disk('spaces')->delete('u' . $media->author_id . '/' . $matches[1]);
            }

            if ($media->vimeo_id) {
                try {
                    $res = Vimeo::Request($media->vimeo_id, [], 'DELETE');
                } catch (\Exception $e) {
                    Log::error('Something went wrong when deleting video media ' . $media->vimeo_id . ' ' . $e->getTraceAsString());
                }
            }
        });
    }

    //
    // Constructors
    //
    //
    public function createFromUrl($user, $url)
    {
        $this->author_id = $user->id;
        // TODO need url validation
        //   don't work on this yet
        // Storage::disk('public')->put(Str::uuid(),fopen($url,'rb'));
    }


    //
    // Relationships
    //
    //
    public function mediable()
    {
        return $this->morphTo();
    }
    public function author()
    {
        return $this->belongsTo(User::class, 'author_id');
    }

    //
    // Attributes
    //
    //
    public function getThumbnailAttribute($value)
    {
        return $value ?? ($this->type == 'image' ? $this->url : null);
    }

    public function getDownloadUrlAttribute()
    {
        return $this->url;
    }

    //
    // Queries from third party drivers
    //
    //
    public static function getFromRequest($request, $name = 'media')
    {
        // $hasCap = $request->user()->isAbleTo('*.write'); // has some write permission
        // $ids = collect($request->input($name, []))->pluck('id')->all();
        // return self::when(!$hasCap, function ($query) {
        //     return $query->ofAccess($request->user());
        // })
        //     ->whereIn('id', $ids)
        //     ->get()
        //     ->transform(function ($item) use ($ids) {
        //         $item->order = array_search($item->id, $ids);
        //         return $item;
        //     });
        return self::ofAccess($request->user())
	    ->whereIn('id',collect($request->input($name,[]))->pluck('id')->all())
	    ->get()
	    ->transform(function($item,$key) {
	        $item->order = $key;
		return $item;
	    });
    }

    public function getFromVimeo()
    {
        try {
            $vimeo = Vimeo::request($this->vimeo_id, [], 'GET');
            if ($vimeo && $vimeo['status'] >= 200 && $vimeo['status'] < 400) {
                if (
                    $vimeo['body']['status'] == 'available' &&
                    !preg_match('#^https://i.vimeocdn.com/video/default_#i', $vimeo['body']['pictures']['sizes'][0]['link'])
                ) {
                    $data = $vimeo['body'];
                    /*			$pictures = collect($data['pictures']['sizes']);
			$picture = $pictures->sortByDesc('width')->first();
			$files = collect($data['files']);
			$file = $files->sortByDesc('width')->first();
//			$downloads = collect($data['download']);
//			$download = $downloads->sortByDesc('width')->first();
			$this->fill([
			    'vimeo_id' => $data['uri'],
			    'thumbnail' => $picture['link'],
			    'width'  => $file['width'],
			    'height' => $file['height'],
			    'url'    => $file['link'],
//			    'download_url' => $download['link'],
//			    'mime_type'    => $downlaod['type'],
			    'status' => 'published',
			]);
*/
                    $this->fillFromVimeo($data);
                    return $data;
                }
            }
        } catch (\Exception $ex) {
            Log::error('Unable to get from vimeo ' . $this->vimeo_id);
            Log::error($ex->getMessage());
        }
    }
    public function fillFromVimeo($data)
    {
        $pictures = collect($data['pictures']['sizes']);
        $picture = $pictures->sortByDesc('width')->first();
        $files = collect($data['files']);
        $file = $files->sortByDesc('width')->first();
        //	$downloads = collect($data['download']);
        //	$download = $downloads->sortByDesc('width')->first();
        $this->fill([
            'vimeo_id' => $data['uri'],
            'thumbnail' => $picture['link'],
            'width'  => $file['width'],
            'height' => $file['height'],
            'url'    => $file['link'],
            //	   'download_url' => $download['link'],
            //	   'mime_type'    => $downlaod['type'],
            'status' => 'published',
        ]);
    }
    public function setVimeoInfo()
    {
        if ($this->mediable) {
            try {
                Vimeo::request($this->vimeo_id, [
                    'name' => $this->mediable->title,
                    'description' => get_class($this->mediable) . '#' . $this->mediable->id,
                ], 'PATCH');
            } catch (\Exception $ex) {
                Log::error('Unable to set vimeo info ' . $this->vimeo_id);
                Log::error($ex->getMessage());
            }
        }
    }
    public function pushToSpaces()
    {
        $localUrl = Storage::disk('public')->url('uploads');
        if (preg_match("#^$localUrl(.*)#i", $this->url, $matches)) {
            Storage::disk('spaces')->putFileAs($this->author_id, new File(Storage::disk('public')->path('uploads/' . $matches[1])), $matches[1]);
            $this->fill([
                'status' => 'published',
                'url'    => Storage::disk('spaces')->url($this->author_id . '/' . $matches[1]),
            ])->save();
            Storage::disk('public')->delete($matches[1]);
        }
    }

    //
    // Scopes
    //
    //
    public function scopeOfAccess($query, $user)
    {
        return $query->where('author_id', $user->id);
    }

    public function scopeOfVimeo($query)
    {
        return $query->whereNotNull('vimeo_id');
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
    
    public function scopePublished($query)
    {
        return $query->where('status', 'published');
    }
    //
    // Conversions
    //
    //
    //
    function toJSONLD()
    {
        if ($this->type == 'video') {
            return Schema::VideoObject()->addProperties([
                'contentUrl' => $this->url,
                'thumbnailUrl' => $this->thumbnail,
                'author'     => $this->author->toJSONLD(),
                'publisher'  => config('peopletail.jsonld'),
                'uploadDate' => $this->created_at->toFormattedDateString(),
            ]);
        }
        return $this->url;
    }

    protected static function newFactory()
    {
        return MediaFactory::new();
    }
}
