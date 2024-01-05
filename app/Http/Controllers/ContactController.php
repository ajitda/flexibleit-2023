<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactRequest;
use App\Models\Contact;
use App\Models\ContactsUsers;
use App\Models\Media;
use App\Models\Message;
use App\Models\MetaData;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {
        $contacts = Message::latest()->get();
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
    public function store(Request $request)
    {
        $input = $request->validated();
        // $input['user_id'] = auth()->user()->id; //set login user id in the slug
        $message = Message ::create($input);
        //adding media from request
        // $media = Media::getFromRequest($request);
        // if ($media) $testomonial->media()->saveMany($media);
        // if (!empty($input['categoryIds'])) {
        //     $portfolio->categories()->attach($input['categoryIds']);
        // }
        // return response()->json($post);
        return $this->sendResponse($message);
    }

    public function ContactStore(Request $request)
    {
        $input = $request->all();
        // dd($input);
        $contact = Contact::create($input);

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
    public function show(Message $message)
    {
        // return response()->json($post);
        $message->load('messages');
        return $this->sendResponse($message);
    }

    public function showContacts(Request $request)
    {
        // return response()->json($post);
        $perPage = $request->input('per_page', 5);
        $search = $request->input('search');
        // dd($search);
        $query = Contact::latest();

        // If a search term is provided, apply search filters
        if ($search) {
            $query->where(function ($q) use ($search) {
                $q->where('name', 'LIKE', "%{$search}%")
                ->orWhere('email', 'LIKE', "%{$search}%")
                ->orWhere('phone', 'LIKE', "%{$search}%");
            });
        }

        $contact = $query->paginate($perPage);
        $contact->load("media");
        return $this->sendResponse($contact);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        // return response()->json($post);
        $contact = Contact::findOrFail($id);

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
        $contactObj = new Contact();
        $contact = $contactObj->saveData($input, $id);
        $media = Media::getFromRequest($request);
        if ($media) $contact->media()->saveMany($media);

        if ($contact) {

            if (!empty($input['meta']) && is_array($input['meta'])) {
                foreach ($input['meta'] as $meta) {
                    // Check if the meta data already exists for the portfolio
                    $existingMetaData = $contact->metaData()->where('meta_name', $meta['meta_name'])->where('meta_value', $meta['meta_value'])->first();
    
                    if (!$existingMetaData) {
                        $metaData = new MetaData([
                            'meta_name' => $meta['meta_name'],
                            'meta_value' => $meta['meta_value'],
                        ]);
                        
                        $contact->metaData()->save($metaData);
                    }
                }
            }

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
