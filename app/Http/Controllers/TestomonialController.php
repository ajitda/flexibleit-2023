<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Testomonial;
use Illuminate\Http\Request;

class TestomonialController extends Controller
{
     /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testomonials = Testomonial::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($testomonials);
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
        $testomonial = Testomonial::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $testomonial->media()->saveMany($media);
        // if (!empty($input['categoryIds'])) {
        //     $portfolio->categories()->attach($input['categoryIds']);
        // }
        // return response()->json($post);
        return $this->sendResponse($testomonial);
    }

    /**
     * Display the specified resource.
     */
    public function show(Testomonial $testomonial)
    {
        // return response()->json($post);
        $testomonial->load('testomonials');
        return $this->sendResponse($testomonial);
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
        $input = $request->all();
        $testomonialObj = new Testomonial();
        $testomonial = $testomonialObj->saveData($input, $id);
        $media = Media::getFromRequest($request);
        if ($media) $testomonial->media()->saveMany($media);
        // if (!empty($input['categoryIds'])) {
        //     $testomonial->categories()->sync($input['categoryIds']);
        // }
        // return response()->json($post);
        return $this->sendResponse($testomonial);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Testomonial $testomonial)
    {
        // $post = Post::findOrFail($id);
        $testomonial->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
