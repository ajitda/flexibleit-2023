<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\Media;
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
        $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $service = Service::create($input);
        //adding media from request
        $media = Media::getFromRequest($request);
        if ($media) $service->media()->saveMany($media);
        if (!empty($input['categoryIds'])) {
            $service->categories()->attach($input['categoryIds']);
        }
        // return response()->json($post);
        return $this->sendResponse($service);
    }

    /**
     * Display the specified resource.
     */
    public function show(Service $service)
    {
        // return response()->json($post);
        $service->load('categories');
        return $this->sendResponse($service);
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
        return $this->sendResponse($service);
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
