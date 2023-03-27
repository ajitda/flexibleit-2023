<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Media;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();
        return $this->sendResponse($categories);
        // return response()->json($categories);
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
        $category = Category::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $category->media()->saveMany($media);
        // return response()->json($post);
        return $this->sendResponse($category);
    }

    /**
     * Display the specified resource.
     */
    public function show(Category $category)
    {
        // return response()->json($post);
        return $this->sendResponse($category);
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
        $categoryObj = new Category();
        $category = $categoryObj->saveData($input, $id);
        // return response()->json($post);
        return $this->sendResponse($category);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Category $category)
    {
        // $post = Post::findOrFail($id);
        $category->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
