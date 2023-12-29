<?php

namespace App\Http\Controllers;

use App\Models\Media;
use App\Models\MetaData;
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
        // dd($input);
        $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $portfolio = Portfolio::create($input);

        // Save meta data if present in the request
    if (!empty($input['meta']) && is_array($input['meta'])) {
        foreach ($input['meta'] as $meta) {
            $metaData = new MetaData([
                'meta_name' => $meta['meta_name'],
                'meta_value' => $meta['meta_value'],
            ]);
            
            $portfolio->metaData()->save($metaData);
        }
    }

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
    
    public function showPortfolio($slug) {
        $portfolio = Portfolio::where('slug', $slug)->firstOrFail();

        // dd($portfolio);
    
        if ($portfolio) {
        // Fetch the ID of the portfolio
        // $portfolioId = $portfolio->id;

        // Fetch meta data associated with this portfolio using the portfolio ID
        $portfolio->load("metaData");
        
            // 'portfolio' => $portfolio,
            // 'metaData' => $metaData,

        // Return the combined data as a response
        return $this->sendResponse($portfolio);

        } else {
            // If no portfolio with the specified slug is found, return an error or appropriate response
            return $this->sendError('Portfolio not found');
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
