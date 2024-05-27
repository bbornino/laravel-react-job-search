<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Opportunity extends Model
{
    use HasFactory;

    protected $fillable = ['opportunity_status', 'recruiter_name', 'recruiter_company', 
            'job_title', 'job_location_city', 'job_location_type', 'job_duration', 
            'employment_type', 'pay_rate', 'job_description', 'email_received_at'];
}
