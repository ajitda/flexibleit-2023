<?php

namespace App\Providers;

use TusPhp\Tus\Server as TusServer;
use Illuminate\Support\ServiceProvider;

class TusServiceProvider extends ServiceProvider
{
    // ...

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('tus-server', function ($app) {
            $server = new TusServer();

            $server
                ->setApiPath('/api/tus') // tus server endpoint.
                ->setUploadDir(config('filesystems.disks.public.root').'/uploads') // storage_path('app/public/uploads')) // upload path
	        ->getCache()
            ->setCacheDir(storage_path('framework/cache/')) // cache path
		;

            return $server;
        });
    }

    // ...
}
