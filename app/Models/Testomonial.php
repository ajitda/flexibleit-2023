<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testomonial extends Model
{
    use HasFactory;
    protected $fillable = ['author_name', 'description', 'designation', 'featured'];
    protected $appends = ['thumbnail'];

    public function saveData(array $input, string $id): Testomonial
    {
        $testomonial = $this->findOrFail($id);
        $testomonial->fill($input);
        $testomonial->save();
        return $testomonial;
    }
    public function deletePost()
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
    
    // public function categories()
    // {
    //     return $this->morphToMany(Category::class, 'categoryable');
    // }
}
