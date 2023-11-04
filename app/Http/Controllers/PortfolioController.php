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
        $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $portfolio = Portfolio::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $portfolio->media()->saveMany($media);
        if (!empty($input['categoryIds'])) {
            $portfolio->categories()->attach($input['categoryIds']);
        }
        // return response()->json($post);
        return $this->sendResponse($portfolio);
    }

    /**
     * Display the specified resource.
     */
    public function show(Portfolio $portfolio)
    {
        // return response()->json($post);
        $portfolio->load('categories');
        return $this->sendResponse($portfolio);
    }

    public function showAllPortfolio()
    {
        $portfolios = Portfolio::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($portfolios);
    }
    
    public function showPortfolio($id) {
        $portfolio = Portfolio::find($id);
    
        if ($portfolio) {
            // If a portfolio with the specified ID is found, return it
            return $this->sendResponse($portfolio);
        } else {
            // If no portfolio with the specified ID is found, return an error or appropriate response
            return $this->sendError('Portfolio not found', [], 404);
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
        $portfolioObj = new Portfolio();
        $portfolio = $portfolioObj->saveData($input, $id);
        $media = Media::getFromRequest($request);
        if ($media) $portfolio->media()->saveMany($media);
        if (!empty($input['categoryIds'])) {
            $portfolio->categories()->sync($input['categoryIds']);
        }
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
