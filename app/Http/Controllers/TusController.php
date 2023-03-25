<?php

namespace App\Http\Controllers;

use Auth;
use Storage;
use App\Models\Media;
// use Vimeo\Laravel\Facades\Vimeo;
use TusPhp\Request as TusRequest;
use TusPhp\Events\TusEvent;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\MediaResource;

/**
 * @group Upload
 *
 * APIs for managing users
 */
class TusController extends Controller
{
    public function any(Request $request) {
	    // var_dump($request->input('upload_url'));
		// getting media object if request has upload_url param
		if ( $request->isMethod('get') && $request->has('upload_url') ) {
			$media = Media::where([
				'upload_url' => $request->input('upload_url'),
				'author_id' => 1,//$request->user()->id,
			])->latest()->firstOrFail();
			return new MediaResource($media);
		}
		// dd($request);
		// setup vimeo upload if it is type video
		if ( $request->isMethod('post') && $request->hasHeader('Upload-MetaData') ) {
			$tusRequest = new TusRequest;
			$meta = $tusRequest->extractAllMeta();
			// if ( isset($meta['filetype']) && preg_match('/video/i',$meta['filetype']) ) {
			// 	return $this->videoCreate($request);
			// }
		}
		try{
			$tusServer = app('tus-server');
			$tusServer->event()->addListener('tus-server.upload.created', function (TusEvent $event) use ($tusServer,$request) {
				$file = $event->getFile();
				$key = $file->getKey();
				
				$cache = $tusServer->getCache()->get($key);
				$pathInfo = pathinfo($file->getFilePath());
				$cache['file_path'] = $pathInfo['dirname'].'/'.$key.'.'.$pathInfo['extension'];
				$responseUrl = asset('storage/uploads/'.$key.'.'.$pathInfo['extension']);
				$tusServer->getCache()->set($key,$cache);
				
				$media = Media::firstOrCreate([
					'upload_url' => $cache['location'],
					'author_id'  => 1, //$request->user()->id,
					'type'    => 'image',
					],[
					'path'    => str_replace(Storage::disk('public')->path(''),'',$cache['file_path']),
					'url'     => $responseUrl,
				]);
			});

        return $tusServer->serve();
		} catch(\Exception $e) {
			dd($e->getMessage());
		}
    }

    public function videoCreate (Request $request) {
	$user = Auth::user();
	try {

	    $key = md5($request->header('Upload-Metadata'));
            $media = Media::where([
	       'key' => $key,
	       'author_id' => $user->id,
	       'type'=> 'video',
	    ])->latest()->first();

	    // if not resuming
	    if ( ! $media || $media->mediable_id ) {
	        $vimeo = Vimeo::request('/me/videos', [
		    'upload' => [
			'approach' => 'tus',
			'size' => $request->header('Upload-Length'),
		    ],
                    'privacy' => [ 'embed' => 'public' ],
	        ], 'POST');

	        $media = Media::create([
	            'key'     => $key,
		    'vimeo_id'=> $vimeo['body']['uri'],
		    'upload_url' => $vimeo['body']['upload']['upload_link'],
		    'url'     => $vimeo['body']['link'],
		    'author_id' => $user->id,
		    'type'    => 'video',
	        ]);
	    }

	    return response()->noContent(201)
	        ->header('Access-Control-Expose-Headers','Location')
	        ->header('Location',$media->upload_url)
	        ->header('Tus-Resumable','1.0.0');

	} catch(\Exception $e) {
		Log::error('Error recommendation media vimeo upload: '. $e->getMessage() . PHP_EOL . $e->getTraceAsString());
		return response()->json([
			'errors' => [ 'danger' => 'Oops. We encountered an error while receiving your video upload.  Please try again' ]
		], 400);
	}
    }
}
