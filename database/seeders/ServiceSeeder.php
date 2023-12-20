<?php

namespace Database\Seeders;

use App\Models\Media;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Ecommerce Solutions',
                'description' => 'Do you want a website/web application that represents your business?
                            You can put us first choice in your favorites list
                            
                            We create a professional website or web application with experienced expertise that perfectly showcases your business profile.
                            
                            Represent Your bussiness by taking digital solution from us.
                            
                            Are you looking for a store or website, where you can sell your service or products?
                            We are the best choice for customers looking to create an online store because we offer a comprehensive and user-friendly platform that allows for easy customization and management of your online business. 
                            
                            Our platform is equipped with robust features 
                            
                            -secure payment processing, 
                            
                            -inventory management, 
                            
                            -responsive design, 
                            
                            -ensuring a seamless shopping experience for your customers.
                            
                            Additionally, Our dedicated customer support team is available to assist you every step of the way, from setting up your store to scaling your business. Choose us for a hassle-free and successful online store experience.',
                'slug' => 'ecommerce-solutions',
                'user_id' => 1,
                'featured' => 1,
            ],
            [
                'title' => 'Web Design & Development',
                'description' => 'For promoting yourself or business we can make a nice wireframe and responsive web design according to your business and brand. You can share your live information of your business through your website. We are providing all kinds of responsive website that support all the devices.',
                'slug' => 'web-design-and-development',
                'user_id' => 1,
                'featured' => 1,
            ],
            [
                'title' => 'Accounting & POS Software',
                'description' => 'Do you want to manage your business with some button clicks ?
                                We can build automation software for making your life more easier. According to your business requirement and anylysing your business we will build automation software. We already build automation software for 
                                
                                Point of sale (POS)
                                Invoice generator
                                Ecommerce Management
                                Xero Software
                                Payment getways (stripe, paypal, bkas)
                                Employee Attendance
                                Tasks Management/CRM
                                We will help you to analyze your business and can provide suitable soluation for you',
                'slug' => 'accounting-and-pos-software',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Automation Software',
                'description' => 'We develop automation software to streamline of your business processes and save your time and money. Our solution are custom build to match the unique requirements of your business.',
                'slug' => 'automation-software',
                'user_id' => 1,
                'featured' => 0,
            ],
            [
                'title' => 'Bug Fixing Services & Data Migration',
                'description' => 'Our team of experienced developers can help you fix any bugs in your website or web application. We provide fast and efficient solutions to get your site back up and running smoothly.

                Do you want to migrate your data from your old website/application to new website/application?
                If you need to migrate your business data from your old website or application to a new one.
                
                We are here to assist you Our team is capable of handling migrations on any platform and can even perform automatic data migration and backup. With our expertise, you can trust that your valuable business data will be securely and efficiently transferred to your new website or application. Let us take care of the migration process so that you can focus on running your business.',
                'slug' => 'bug-fixing-services-and-data-migration',
                'user_id' => 1,
                'featured' => 1,
            ],
            [
                'title' => 'Support & Maintenance',
                'description' => 'We offer ongoing support and maintenance services to keep your website or web application running smoothly. Our team is available to help you with any issues you may encounter.',
                'slug' => 'support-and-maintenance',
                'user_id' => 1,
                'featured' => 0,
            ],
        ];

        foreach($services as $servicesData) {
            // $imagePath = null;
            // if (isset($portfolioData['image'])) {
            //     $imagePath = $this->uploadImageFromURL($portfolioData['image'], 'uploads');
            // }

            $service = \App\Models\Service::create([
                'title' => $servicesData['title'],
                'description' => $servicesData['description'],
                'slug' => $servicesData['slug'],
                'user_id' => $servicesData['user_id'],
                'featured' => $servicesData['featured'],
                // Add the image path to the portfolio data
                // 'image' => $imagePath,
            ]);

            $media = Media::factory(1)->serviceImage($servicesData['slug'])->create();
            $service->media()->saveMany($media);
        
        }

    }
}
