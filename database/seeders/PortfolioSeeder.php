<?php

namespace Database\Seeders;

use App\Models\Media;
use App\Models\Portfolio;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Storage;

class PortfolioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $portfolios = [
            [
                'title' => 'Free QR Code Generator - FlexQR',
                'description' => 'A simple QR code generator tool, You can create QR for your website, information and company profile. features are
                                    - Free for Life time
                                    - Create QR for website, any text and business profile
                                    - In business profile will get a free webpage
                                    - Directly redirect your user in your business profile
                                    ',
                'slug' => 'free-qr-code-generator-flexQR',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/1265951.png',
                'user_id' => 1,
                'featured' => 1,
            ],
            [
                'title' => 'e-Manager - a business management software',
                'description' => 'Create Invoice/Bill, Automated Report, Get Stock Report',
                'slug' => 'e-manager-a-business-management-software',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/7316130.png',
                'user_id' => 1,
                'featured' => 1,
            ],
            [
                'title' => 'Shareideas Next JS Blog',
                'description' => 'Next JS Template
                                    Laravel API Backend
                                    SEO Optimized
                                    Image auto scroll load',
                'slug' => 'shareideas-next-js-blog',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/5166952.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'NextShop - A ecommerce template with Next Js for your online shop',
                'description' => 'A simple e-commerce template for your online shop. It has checkout pages and account pages also. All states data are handled by json data, which helps you to integrate apis easily.

                                    well structed code
                                    
                                    easily api integretion
                                    
                                    checkout pages
                                    
                                    account pages
                                    
                                    collection pages
                                    
                                    Legal pages',
                'slug' => 'nextshop-a-ecommerce-template-with-next-js-for-your-online-shop',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/5745855.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Lightning App - a story management system',
                'description' => 'A simple story management system
                                    Stack: Wordpress, HTML, Javascript, PHP
                                    Easily create project
                                    Create ai image easily
                                    Drag and drop image upload
                                    Sortable sections',
                'slug' => 'lightning-app-a-story-management-system',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/2219173.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Online CV - a template for your online profile',
                'description' => 'Html Template
                                    Responsive
                                    5 versions',
                'slug' => 'online-cv-a-template-for-your-online-profile',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/8422505.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Aprova PSD Template',
                'description' => 'PSD Template
                                    4 PSD Templates',
                'slug' => 'aprova-psd-template',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/3522942.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Connect Me - a chat app template with react js.',
                'description' => 'A simple react chat template. 6 types of chat home page. All states data are handled by react redux. All data are returned from json data.
                                    well structed code
                                    easily api integretion
                                    6 types of chat page
                                    join room and create room',
                'slug' => 'connect-me-a-chat-app-template-with-react-js',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/7690352.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Miracbd E-commerce Website',
                'description' => 'Responsive Design
                                    Add to cart & checkout options
                                    Stripe and Paypal Integrations
                                    Legal pages
                                    Video product support',
                'slug' => 'miracbd-e-commerce-website',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/2795326.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'FlexiblePOS with Inventory',
                'description' => 'Using Popular PHP Framework Laravel 9
                                    Responsive UI
                                    Easy Installation
                                    Multiple User Role based on separate permissions
                                    Speed optimized
                                    All edit and add in modal
                                    Item inventory and variant',
                'slug' => 'flexiblepos-with-inventory',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/4702053.png',
                'user_id' => 1,
                'featured' => 1,
            ],
            [
                'title' => 'Flex Importer',
                'description' => '***Import Data from CSV***
                                    ***Import Data from XLSX***
                                    ***Import Data from xlx***
                                    ***Import in a specific wordpress table***',
                'slug' => 'flex-importer',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/5933327.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Resume Template',
                'description' => '100% Responsive
                                    Bootstrap Grid Layout
                                    Cross Browser Compatibility
                                    6 Color Shemes
                                    W3C Validated Code',
                'slug' => 'resume-template',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/4188676.png',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Simple Task Management System',
                'description' => 'Management Tools Website
                                    Simple Responsive Design
                                    Progressive Web App
                                    Stacks :
                                    -Php,
                                    -Laravel,
                                    -React JS,
                                    -Bootstrap 5',
                'slug' => 'simple-task-management-system',
                // 'image' => 'https://flexibleit.devsbrain.com/storage/products/large/9449421.png',
                'user_id' => 1,
                'featured' => 0,
            ],
        ];

        foreach($portfolios as $portfolioData) {
            // $imagePath = null;
            // if (isset($portfolioData['image'])) {
            //     $imagePath = $this->uploadImageFromURL($portfolioData['image'], 'uploads');
            // }

            $portfolio = \App\Models\Portfolio::create([
                'title' => $portfolioData['title'],
                'description' => $portfolioData['description'],
                'slug' => $portfolioData['slug'],
                'user_id' => $portfolioData['user_id'],
                'featured' => $portfolioData['featured'],
                // Add the image path to the portfolio data
                // 'image' => $imagePath,
            ]);

            $media = Media::factory(1)->porfolioImage($portfolioData['slug'])->create();
            $portfolio->media()->saveMany($media);
        
        }
    }
    
}
