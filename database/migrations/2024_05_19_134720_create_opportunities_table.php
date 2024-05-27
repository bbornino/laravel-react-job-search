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
        Schema::create('opportunities', function (Blueprint $table) {
            $table->id();
            $table->string('opportunity_status');
            $table->string('recruiter_name');
            $table->string('recruiter_company')->nullable();
            
            $table->string('job_title');
            $table->string('job_location_city')->nullable();
            $table->string('job_location_type')->nullable();
            $table->string('job_duration')->nullable();
            $table->string('employment_type')->nullable();
            $table->string('pay_rate')->nullable();

            $table->text('job_description')->nullable();
            $table->timestamp('email_received_at')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opportunities');
    }
};
