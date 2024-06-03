<?php

namespace App\Http\Controllers;

use App\Models\Opportunity;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
// use Illuminate\Http\Response;    // Using Inertia Response instead
use Inertia\Inertia;
use Inertia\Response;

class OpportunityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        return Inertia::render('Opportunities/Index', [ 'opportunities' => Opportunity::all()       ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        return Inertia::render('Opportunities/Create', [        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): RedirectResponse
    {
        $newOpportunity = new Opportunity();
        $validated = $request->validate([
            'opportunity_status' => 'required|string|max:255',
            'recruiter_name' => 'required|string|max:255',
            'job_title' => 'required|string|max:255',
            'email_received_at' => 'required|date',
            'recruiter_company' => 'nullable|string|max:255',
            'job_location_city' => 'nullable|string|max:255',
            'job_location_type' => 'nullable|string|max:255',
            'job_duration' => 'nullable|string|max:255',
            'employment_type' => 'nullable|string|max:255',
            'pay_rate' => 'nullable|string|max:255',
            'job_description' => 'nullable|string|max:25555',
        ]);
        $newOpportunity->create($validated);

        return redirect(route('opportunities.index'));
    }

    /**
     * Display the specified resource.
     */
    public function show(Opportunity $opportunity)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Opportunity $opportunity)
    {
        return Inertia::render('Opportunities/Edit', [ 'opportunity' =>    $opportunity    ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Opportunity $opportunity)
    {
        $validated = $request->validate([
            'opportunity_status' => 'required|string|max:255',
            'recruiter_name' => 'required|string|max:255',
            'job_title' => 'required|string|max:255',
            'email_received_at' => 'required|date',
            'recruiter_company' => 'nullable|string|max:255',
            'job_location_city' => 'nullable|string|max:255',
            'job_location_type' => 'nullable|string|max:255',
            'job_duration' => 'nullable|string|max:255',
            'employment_type' => 'nullable|string|max:255',
            'pay_rate' => 'nullable|string|max:255',
            'job_description' => 'nullable|string|max:25555',
        ]);
        $opportunity->update($validated);

        return redirect(route('opportunities.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Opportunity $opportunity)
    {
        //
    }
}
