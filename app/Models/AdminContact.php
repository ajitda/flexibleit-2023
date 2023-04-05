<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminContact extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'email', 'subject', 'message'];
    public function saveData(array $input, string $id): AdminContact
    {
        $admincontact = $this->findOrFail($id);
        $admincontact->fill($input);
        $admincontact->save();
        return $admincontact;
    }
    public function deletePost()
    {
        $this->delete();
    }
}
