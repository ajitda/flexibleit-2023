<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class EmailExtractorController extends Controller
{
    public function index()
    {
        return view('tools.email-extractor', ['seometa'=>config('seo.tools.email-extractor')]);
    }

    public function formatEmails($excludes)
    {
        $excEmails = [];
        if (!empty($excludes)) {
            $excludes = explode(',', $excludes);
            if (!empty($excludes)) {
                foreach($excludes as $exc) {
                    $excEmails[] = trim($exc);
                }
            }
        }
        return $excEmails;
    }
    
    public function extractEmail(Request $request)
    {
        $input = $request->all();

        preg_match_all("/[\._a-zA-Z0-9-]+@[\._a-zA-Z0-9-]+/i", $input['input_text'], $matches);

        // Check if the 'exclude' field exists in the input
        $excEmails = isset($input['exclude']) ? $this->formatEmails($input['exclude']) : [];

        $filtered_emails = [];
        foreach ($matches[0] as $email) {
            $email = str_replace('.comhttps', '.com', $email);
            // Exclude emails if $excEmails is not empty
            if (!empty($excEmails) && in_array($email, $excEmails)) {
                continue;
            }
            $filtered_emails[] = $email;

            $contact = new Contact();
            if ($contact->where('email', $email)->first()) {
                // You may add logic here if needed
            } else {
                // You may add logic here to save the email to the database if required
            }
        }

        return $this->sendResponse($filtered_emails);
    }
}
