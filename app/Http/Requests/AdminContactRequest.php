<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class AdminContactRequest extends FormRequest
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
            'name'=> 'required | min:3 | max:50',
            'email' => 'required | min:10 | max:100',
            'subject' => 'required | min:3 | max:200',
            'message' => 'required | min:3 | max:1500'
        ];
    }
}
