<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MetaData extends Model
{
    use HasFactory;
    
    protected $fillable = ['meta_name', 'meta_value', 'metaable_id', 'metaable_type'];

    public function metaable()
    {
        return $this->morphTo();
    }
}
