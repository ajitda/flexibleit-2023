<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $posts = Post::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($posts);
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
        $post = Post::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $post->media()->saveMany($media);
        // return response()->json($post);
        return $this->sendResponse($post);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // return response()->json($post);
        return $this->sendResponse($post);
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
        $postObj = new Post();
        $post = $postObj->saveData($input, $id);
        // return response()->json($post);
        return $this->sendResponse($post);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        // $post = Post::findOrFail($id);
        $post->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
