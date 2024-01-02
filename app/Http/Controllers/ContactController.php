<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use App\Models\ContactsUsers;
use App\Models\Media;
use App\Models\MetaData;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Contact::latest()->get();
        // return response()->json($posts);
        return $this->sendResponse($contacts);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ContactRequest $request)
    {
        $input = $request->validated();
        // $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $contact = Contact ::create($input);
        //adding media from request
        // $media = Media::getFromRequest($request);
        // if ($media) $testomonial->media()->saveMany($media);
        // if (!empty($input['categoryIds'])) {
        //     $portfolio->categories()->attach($input['categoryIds']);
        // }
        // return response()->json($post);
        return $this->sendResponse($contact);
    }

    public function ContactStore(Request $request)
    {
        $input = $request->all();
        // dd($input);
        $contact = ContactsUsers::create($input);

        if (!empty($input['meta']) && is_array($input['meta'])) {
            foreach ($input['meta'] as $meta) {
                $metaData = new MetaData([
                    'meta_name' => $meta['meta_name'],
                    'meta_value' => $meta['meta_value'],
                ]);
                
                $contact->metaData()->save($metaData);
            }
        }

        $media = Media::getFromRequest($request);
        if ($media) $contact->media()->saveMany($media);

        return $this->sendResponse($contact);
    }

    /**
     * Display the specified resource.
     */
    public function show(Contact $contact)
    {
        // return response()->json($post);
        $contact->load('contacts');
        return $this->sendResponse($contact);
    }

    public function showContacts()
    {
        // return response()->json($post);
        $contact = ContactsUsers::latest()->get();
        $contact->load("media");
        return $this->sendResponse($contact);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // return response()->json($post);
        $contact = ContactsUsers::findOrFail($id);

        $contact->load("metaData");
        
        return $this->sendResponse($contact);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $input = $request->all();
        // dd($input);
        $contactObj = new ContactsUsers();
        $contact = $contactObj->saveData($input, $id);
        if ($contact) {
            return $this->sendResponse($contact);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contact $contact)
    {
        // $post = Post::findOrFail($id);
        $contact->delete();
        // return response()->json(['delete successful']);
        return $this->sendResponse(['delete successful']);
    }
}
