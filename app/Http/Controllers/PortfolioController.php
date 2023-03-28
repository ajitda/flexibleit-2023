<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\Portfolio;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $portfolios = Portfolio::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($portfolios);
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
        $portfolio = Portfolio::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $portfolio->media()->saveMany($media);
        // return response()->json($post);
        return $this->sendResponse($portfolio);
    }

    /**
     * Display the specified resource.
     */
    public function show(Portfolio $portfolio)
    {
        // return response()->json($post);
        return $this->sendResponse($portfolio);
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
        $portfolioObj = new Portfolio();
        $portfolio = $portfolioObj->saveData($input, $id);
        // return response()->json($post);
        return $this->sendResponse($portfolio);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Portfolio $portfolio)
    {
        // $post = Post::findOrFail($id);
        $portfolio->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
