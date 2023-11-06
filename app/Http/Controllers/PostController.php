<?php

namespace App\Http\Controllers;

use App\Http\Requests\PostRequest;
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
    public function store(PostRequest $request)
    {
        $input = $request->validated();
        $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $post = Post::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $post->media()->saveMany($media);
        if (!empty($input['categoryIds'])) {
            $post->categories()->attach($input['categoryIds']);
        }
        // return response()->json($post);
        return $this->sendResponse($post);
    }

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        // return response()->json($post);
        $post->load('categories');
        return $this->sendResponse($post);
    }

    public function showPost($id) {
        $post = Post::find($id);
    
        if ($post) {
            // If a portfolio with the specified ID is found, return it
            return $this->sendResponse($post);
        } else {
            // If no portfolio with the specified ID is found, return an error or appropriate response
            return $this->sendError('Post not found', [], 404);
        }
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
        $media = Media::getFromRequest($request);
        if ($media) $post->media()->saveMany($media);
        // return response()->json($post);
        if (!empty($input['categoryIds'])) {
            $post->categories()->sync($input['categoryIds']);
        }
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
