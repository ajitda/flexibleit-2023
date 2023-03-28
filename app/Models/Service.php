<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'description'];
    // protected $appends = ['thumbnail'];

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
}