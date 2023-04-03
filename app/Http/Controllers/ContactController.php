<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($contacts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $input = $request->all();
        // $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $contact = Contact ::create($input);
        //adding media from request
        // $media = Media::getFromRequest($request);
        // if ($media) $testomonial->media()->saveMany($media);
        // if (!empty($input['categoryIds'])) {
        //     $portfolio->categories()->attach($input['categoryIds']);
        // }
        // return response()->json($post);
        return $this->sendResponse($contact);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        // return response()->json($post);
        $contact->load('contacts');
        return $this->sendResponse($contact);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // 
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        // $post = Post::findOrFail($id);
        $contact->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
