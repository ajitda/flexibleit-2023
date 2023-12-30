<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Media;
use App\Models\MetaData;
use App\Models\Portfolio;
use App\Models\Portfolio_service;
use App\Models\PortfolioService;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        $services = Service::latest()->get();
        return $this->sendResponse($services);
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
        // dd($input);
        $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $service = Service::create($input);

        // Save meta data if present in the request
        if (!empty($input['meta']) && is_array($input['meta'])) {
            foreach ($input['meta'] as $meta) {
                $metaData = new MetaData([
                    'meta_name' => $meta['meta_name'],
                    'meta_value' => $meta['meta_value'],
                ]);
                
                $service->metaData()->save($metaData);
            }
        }
        
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $service->media()->saveMany($media);
        if (!empty($input['categoryIds'])) {
            $service->categories()->attach($input['categoryIds']);
        }
        

        // return response()->json($post);
        return $this->sendResponse($service);
    }

    // public function portfolio_services_store(Request $request) 
    // {
    //     $input = $request->all();
    //     // dd($input);
    //     $input['user_id'] = auth()->user()->id;
    //     if (!empty($input[0]['portfolio_id']) && !empty($input[0]['service_id'])) {
    //         $portfolio_service = Portfolio_service::create([
    //             'portfolio_id' => $input[0]['portfolio_id'],
    //             'service_id' => $input[0]['service_id'],
    //         ]);
    
    //         return $this->sendResponse($portfolio_service);
    //     }
    
    //     return $this->sendError('Invalid data provided', [], 400);
    // }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        // return response()->json($post);
        $service->load('categories');
        return $this->sendResponse($service);
    }

    public function showService($slug) {
        $service = Service::where('slug', $slug)->firstOrFail();
        
        if ($service) {
            $service->load("portfolios");
            // If a service with the specified ID is found, return it
            return $this->sendResponse($service);
        } else {
            // If no portfolio with the specified ID is found, return an error or appropriate response
            return $this->sendError('Service not found', [], 404);
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
        $serviceObj = new Service();
        $service = $serviceObj->saveData($input, $id);
        $media = Media::getFromRequest($request);
        if ($media) $service->media()->saveMany($media);
        if (!empty($input['categoryIds'])) {
            $service->categories()->sync($input['categoryIds']);
        }
        // return response()->json($post);
        if (isset($input['portfolio_ids']) && is_array($input['portfolio_ids'])) {
            // Loop through each portfolio ID and associate it with the service
            foreach ($input['portfolio_ids'] as $portfolioId) {
                // You may want to check if the portfolio ID exists before attaching
                $portfolio = Portfolio::find($portfolioId);
                if ($portfolio) {
                    $service->portfolios()->attach($portfolioId);
                }
            }
        }
        // return response()->json($post);
        return $this->sendResponse([$service, $input]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Service $service)
    {
        // $service = service::findOrFail($id);
        $service->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
