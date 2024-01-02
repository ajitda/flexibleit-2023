<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactsUsers extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'address', 'phone'];
    
    protected $appends = ['thumbnail'];
    
    public function saveData(array $input, string $id): ContactsUsers
    {
        $contact = $this->findOrFail($id);
        $contact->fill($input);
        $contact->save();
        return $contact;
    }

    public function getThumbnailAttribute()
	{
		return $this->media->whereNotNull('thumbnail')->pluck('thumbnail')->first();
	}

    public function media()
	{
		return $this->morphMany(Media::class , 'mediable');
	}

    public function metaData()
    {
        return $this->morphMany(MetaData::class, 'metaable');
    }

}
