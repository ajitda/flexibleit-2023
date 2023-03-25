<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('media', function (Blueprint $table) {
            $table->id();
            $table->string('type');
            $table->string('thumbnail')->nullable();
            $table->integer('width')->nullable();
            $table->integer('height')->nullable();
            $table->string('url');
            $table->unsignedBigInteger('author_id')->index();
            $table->enum('status',['pending','processing','draft','published'])->default('pending');
            $table->string('vimeo_id')->nullable();
            $table->string('upload_url')->nullable();
            $table->string('mediable_type')->nullable();
            $table->unsignedBigInteger('mediable_id')->nullable();
            $table->string('key')->index()->nullable();
            $table->string('path')->nullable();
            $table->integer('order')->default(0);
            $table->enum('disk',['public','spaces','vimeo','facebook'])->default('public');
            $table->string('meta')->nullable();
            $table->timestamps();
	        $table->index(['mediable_type','mediable_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('media');
    }
};
