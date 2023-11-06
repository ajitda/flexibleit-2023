<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'slug', 'featured', 'user_id'];
    protected $appends = ['thumbnail'];

    public function saveData(array $input, string $id): Service
    {
        $service = $this->findOrFail($id);
        $service->fill($input);
        $service->save();
        return $service;
    }
    public function deleteService()
    {
        $this->delete();
    }
    public function getThumbnailAttribute()
	{
		return $this->media->whereNotNull('thumbnail')->pluck('thumbnail')->first();
	}

    
    /**
	 * Get all of the medias for the Review
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function media()
	{
		return $this->morphMany(Media::class , 'mediable');
	}
    public function categories()
    {
        return $this->morphToMany(Category::class, 'categoryable');
    }
}