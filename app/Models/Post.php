<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description'];
    public function saveData(array $input, string $id): Post
    {
        $post = $this->findOrFail($id);
        $post->fill($input);
        $post->save();
        return $post;
    }
    public function deletePost()
    {
        $this->delete();
    }
}
