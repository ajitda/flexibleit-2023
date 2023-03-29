<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description', 'slug', 'user_id'];
    protected $appends = ['thumbnail'];

    public function saveData(array $input, string $id): Category
    {
        $category = $this->findOrFail($id);
        $category->fill($input);
        $category->save();
        return $category;
    }
    public function deleteCategory()
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
}
