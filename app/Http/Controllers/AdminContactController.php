<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminContactRequest;
use App\Models\AdminContact;
use Illuminate\Http\Request;

class AdminContactController extends Controller
{
    public function index()
    {
        $admincontacts = AdminContact::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($admincontacts);
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
    public function store(AdminContactRequest $request)
    {
        $input = $request->validated();
        // $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $admincontact = AdminContact ::create($input);
        //adding media from request
        // $media = Media::getFromRequest($request);
        // if ($media) $testomonial->media()->saveMany($media);
        // if (!empty($input['categoryIds'])) {
        //     $portfolio->categories()->attach($input['categoryIds']);
        // }
        // return response()->json($post);
        return $this->sendResponse($admincontact);
    }

    /**
     * Display the specified resource.
     */
    public function show(AdminContact $admincontact)
    {
        // return response()->json($post);
        $admincontact->load('admincontacts');
        return $this->sendResponse($admincontact);
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
    public function destroy(AdminContact $admincontact)
    {
        // $post = Post::findOrFail($id);
        $admincontact->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
