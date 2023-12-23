<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Storage;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Media>
 */
class MediaFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
        ];
    }

    public function porfolioImage($slug)
    {
        return $this->state(function (array $attributes) use ($slug) {
            // $orientation = $this->faker->boolean ? 'port' : 'land';
            $imageUrl = [
                'free-qr-code-generator-flexQR' => "https://flexibleit.devsbrain.com/storage/products/large/1265951.png",
                'e-manager-a-business-management-software' => "https://flexibleit.devsbrain.com/storage/products/large/7316130.png",
                'shareideas-next-js-blog' =>"https://flexibleit.devsbrain.com/storage/products/large/5166952.png",
                'nextshop-a-ecommerce-template-with-next-js-for-your-online-shop' =>"https://flexibleit.devsbrain.com/storage/products/large/5745855.png",
                'lightning-app-a-story-management-system' =>"https://flexibleit.devsbrain.com/storage/products/large/2219173.png",
                'online-cv-a-template-for-your-online-profile' =>"https://flexibleit.devsbrain.com/storage/products/large/8422505.png",
                'aprova-psd-template' =>"https://flexibleit.devsbrain.com/storage/products/large/3522942.png",
                'connect-me-a-chat-app-template-with-react-js' =>"https://flexibleit.devsbrain.com/storage/products/large/7690352.png",
                'miracbd-e-commerce-website' =>"https://flexibleit.devsbrain.com/storage/products/large/2795326.png",
                'flexiblepos-with-inventory' =>"https://flexibleit.devsbrain.com/storage/products/large/4702053.png",
                'flex-importer' =>"https://flexibleit.devsbrain.com/storage/products/large/5933327.png",
                'resume-template' =>"https://flexibleit.devsbrain.com/storage/products/large/4188676.png",
                'simple-task-management-system' =>"https://flexibleit.devsbrain.com/storage/products/large/9449421.png",
            ];

            // Choose a random image URL
            $randomImageUrl = $imageUrl[$slug];

            // Get image content from the URL
            $imageContent = file_get_contents($randomImageUrl);

            // Generate a unique filename
            $filename = uniqid() . '_' . basename($randomImageUrl);

            // Store the image content in the specified storage path
            Storage::disk('public')->put('uploads/' . $filename, $imageContent);

            return [
                'url' => Storage::url('/uploads/' . $filename),
                'type' => 'image',
                'author_id' => '1',
            ];
        });
    }

    public function serviceImage($slug)
    {
        return $this->state(function (array $attributes) use ($slug) {
            // $orientation = $this->faker->boolean ? 'port' : 'land';
            $imageUrl = [
                'ecommerce-solutions' =>"https://flexibleit.devsbrain.com/storage/services/small/5577345.png",
                'web-design-and-development' =>"https://flexibleit.devsbrain.com/storage/services/small/1802285.png",
                'accounting-and-pos-software' =>"https://flexibleit.devsbrain.com/storage/services/small/3515407.png",
                'automation-software' =>"https://flexibleit.devsbrain.com/storage/services/small/3660912.png",
                'bug-fixing-services-and-data-migration' =>"https://flexibleit.devsbrain.com/storage/services/small/7089180.png",
                'support-and-maintenance' =>"https://flexibleit.devsbrain.com/storage/services/small/6564895.png",
            ];

            // Choose a random image URL
            $randomImageUrl = $imageUrl[$slug];

            // Get image content from the URL
            $imageContent = file_get_contents($randomImageUrl);

            // Generate a unique filename
            $filename = uniqid() . '_' . basename($randomImageUrl);

            // Store the image content in the specified storage path
            Storage::disk('public')->put('uploads/' . $filename, $imageContent);

            return [
                'url' => Storage::url('/uploads/' . $filename),
                'type' => 'image',
                'author_id' => '1',
            ];
        });
    }
}
