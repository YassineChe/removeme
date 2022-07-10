<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;


class CollectionController extends Controller
{
    public function fetchCollections(){
        try{
            $response = Http::get('https://api-devnet.magiceden.dev/v2/collections?offset=0&limit=200');

            return $response->object();
        }
        catch(\Exception $e){
            logger($e);
        }
    }
}
