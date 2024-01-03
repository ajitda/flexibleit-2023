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
    public function index(Request $request)
    {
        $perPage = $request->input('per_page', 5);
        $search = $request->input('search');

        $query = Portfolio::latest();

        // If a search term is provided, apply search filters
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('title', 'LIKE', "%{$search}%")
                ->orWhere('description', 'LIKE', "%{$search}%");
            });
        }

        $portfolios = $query->paginate($perPage);
        // return response()->json($posts);
        return $this->sendResponse($portfolios);
    }

    public function allPortfolios() 
    {
        $portfolios = Portfolio::latest()->get();

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
        $portfolio->load('categories', 'metaData');
        return $this->sendResponse($portfolio);
    }
    
    public function showPortfolio($slug) {
        $portfolio = Portfolio::where('slug', $slug)->firstOrFail();

        // dd($portfolio);
        // $title = $portfolio->title;
        // $description = $portfolio->description;
        // $canonicalURL = 'https://devsbrain.com/portfolios/' . $portfolio->slug;

        // $image = null;
        // if (!empty($portfolio->image)) {
        //     $image = asset($portfolio->image);
        // } elseif (!empty($portfolio->media[0])) {
        //     $image = asset($portfolio->media[0]->url);
        // } else {
        //     $image = asset('images/default-image.jpg');
        // }

        // // Create an array with the necessary post details
        // $seometa = [
        //     'caption' => $title,
        //     'description' => $description,
        //     'image' => $image,
        //     'canonical' => $canonicalURL,
        // ];
    
        if ($portfolio) {
            $portfolio->load("metaData");
            $portfolio->load("services");
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
        // dd($input);
        $portfolioObj = new Portfolio();
        $portfolio = $portfolioObj->saveData($input, $id);

        // Save meta data if present in the request and not already associated with the portfolio
        if (!empty($input['meta']) && is_array($input['meta'])) {
            foreach ($input['meta'] as $meta) {
                // Check if the meta data already exists for the portfolio
                $existingMetaData = $portfolio->metaData()->where('meta_name', $meta['meta_name'])->where('meta_value', $meta['meta_value'])->first();

                if (!$existingMetaData) {
                    $metaData = new MetaData([
                        'meta_name' => $meta['meta_name'],
                        'meta_value' => $meta['meta_value'],
                    ]);
                    
                    $portfolio->metaData()->save($metaData);
                }
            }
        }

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
