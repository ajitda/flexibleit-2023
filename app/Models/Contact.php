<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'subject', 'message'];

    public function saveData(array $input, string $id): Contact
    {
        $contact = $this->findOrFail($id);
        $contact->fill($input);
        $contact->save();
        return $contact;
    }
    public function deletePost()
    {
        $this->delete();
    }
}
