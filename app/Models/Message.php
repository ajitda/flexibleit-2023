<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'subject', 'message'];

    public function saveData(array $input, string $id): Message
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
