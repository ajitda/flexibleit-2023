<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'title'=> 'required | min:3 | max:299 |unique:posts',
            'slug' => 'required | min:3 | max:299 |',
            'description' => 'required | min:3 | max:299 |',
            'featured' => ' min:1 ',
        ];
    }
}
