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
        //dd($input);
        preg_match_all("/[\._a-zA-Z0-9-]+@[\._a-zA-Z0-9-]+/i", $input['input_text'], $matches);
        // dd($matches);
        $excEmails = $this->formatEmails($input['exclude']);
        $filtered_emails = [];
        foreach ($matches[0] as $email) {
            $email = str_replace('.comhttps', '.com', $email);
            if (!in_array($email, $excEmails)) {
                $filtered_emails[] = ($email);
            }
            $contact = new Contact();
            if ($contact->where('email', $email)->first()) {
                // return;
            } 
            // else {
            //     $user_id = Auth::check() ? Auth::user()->id : null;
            //     $contact->saveData(['email' => $email, 'user_id' => $user_id]);
            // }
        }

        return $this->sendResponse($filtered_emails);
    }
}
