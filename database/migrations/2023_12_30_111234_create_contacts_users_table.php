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
        Schema::create('contacts_users', function (Blueprint $table) {
            $table->id();
            $table->integer('company_id')->nullable();
            $table->string('type')->nullable();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->integer('user_id')->nullable();
            $table->string('tax_number')->nullable();
            $table->string('phone')->nullable();
            $table->text('address')->nullable();
            $table->string('website')->nullable();
            $table->string('currency_code', 3)->nullable();
            $table->boolean('enabled')->nullable();
            $table->string('reference')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('contacts_users');
    }
};
