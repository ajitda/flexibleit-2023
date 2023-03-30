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
        Schema::create('categoryables', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->unsignedBigInteger('categoryable_id');
            $table->string('categoryable_type');
            $table->timestamps();
    
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->index(['categoryable_id', 'categoryable_type']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('categoryables');
    }
};
