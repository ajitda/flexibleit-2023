<?php

namespace App\Http\Controllers;

use App\Models\Portfolio;
use App\Models\Post;
use App\Models\Service;
use App\Models\Testomonial;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class SiteMapController extends Controller
{
    public function index(): Response 
    {
        $services = Service::latest()->get();
        $portfolios = Portfolio::latest()->get();
        $blogs = Post::latest()->get();
        $testomonials = Testomonial::latest()->get();

        return Response()->view('sitemap',[
            'services' => $services,
            'portfolios' => $portfolios,
            'blogs' => $blogs,
            'testomonials' => $testomonials,
        ])->header('Content-Type', 'text/xml');
    }
}
