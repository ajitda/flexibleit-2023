<?php


namespace App\Traits;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
trait CommonTrait
{
    

    

    public function setSMTPConfig()
    {
        setting()->setExtraColumns(['company_id' => session('company_id')]);
        $settings = setting()->all();
        $config = array(
            'driver'     => !empty($settings['protocol']) ? $settings['protocol']['protocol'] : 'smtp',
            'host'       => !empty($settings['protocol']) ? $settings['protocol']['host'] : config('mail.mailers.smtp.host'),
            'port'       => !empty($settings['protocol']) ? $settings['protocol']['port'] : config('mail.mailers.smtp.port'),
            'encryption' => !empty($settings['protocol']) ? $settings['protocol']['security'] : config('mail.mailers.smtp.encryption'),
            'username'   => !empty($settings['protocol']) ? $settings['protocol']['username'] : config('mail.mailers.smtp.username'),
            'password'   => !empty($settings['protocol']) ? $settings['protocol']['password'] : config('mail.mailers.smtp.password')
        );
        Config::set('mail', $config);
    }

    /**
     * success response method.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendResponse($response, $message = null)
    {
        $cresponse['status'] = 'success';
        $cresponse['success'] = true;
        $cresponse['data'] = $response;
        return response()->json($cresponse, 200, array('Content-Type'=>'application/json', 'charset'=>'utf-8' ));
    }


    /**
     * return error response.
     *
     * @return \Illuminate\Http\Response
     */
    public function sendError($error, $code = 404)
    {
        $response = $this->getFormatedErrors($error, $code);
        return response()->json($response, 200);
    }

    public function getFormatedErrors($error, $code)
    {
        return [
            'stausCode' => $code,
            'status' => 'error',
            'success' => false,
            'errors' => $error,
        ];
    }

    public function callApi($url, $method, $postdata = [])
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => strtoupper($method),
            CURLOPT_POSTFIELDS => json_encode($postdata),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'Accept: application/json'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return json_decode($response, true);
    }

    public function callApiForSubscription($url, $method, $postdata = [])
    {
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => strtoupper($method),
            CURLOPT_POSTFIELDS => json_encode($postdata),
            CURLOPT_HTTPHEADER => array(
                'Content-Type: application/json',
                'Accept: application/json'
            ),
        ));

        $response = curl_exec($curl);

        curl_close($curl);

        return json_decode($response, true);
    }

    public function checkReferer($request) {
        if (!empty($request->access_key) && ($request->access_key == config('emc.app_access_key'))) {
            return true;
        } else if (strpos($request->header('referer'), config('app.url')) !== false) {
            return true;
        } else if (strpos($request->header('referer'), '127.0.0.1') !== false && strpos(config('app.url'), 'localhost')) {
            return true;
        }
        return false;
    }

    public function validateMessage($input)
    {
        $result = true;
        $a = 'http://';
        $b = 'https://';
        if (strpos($input['message'], $a) !== false) {
           $result = false;
        } else if (strpos($input['subject'], $a) !== false) {
            $result = false;
        } else if (strpos($input['message'], $b) !== false) {
            $result = false;
        } else if (strpos($input['subject'], $a) !== false) {
            $result = false;
        }
        // echo $result;exit;
        return $result;
    }

    public function setDefaultCurrency($input, $landing_page)
    {
        setting()->setExtraColumns(['company_id' => session('company_id')]);
        setting()->set('company.landing_page', $landing_page);
        // setting()->set('company.landing_page', $input[vvalue])
        setting()->save();
        setting()->forgetAll();
    }

    /**
     * 
     * Upload file in the local storage
     */
    public function uploadFile($file, $path="public/logos/", $return_path=false)
    {
        $ext = $file->getClientOriginalExtension();
        $logo_path_name = Str::slug($file->getClientOriginalName()) . '_' . time() . ".".$ext;
        $upload_path = $path.$logo_path_name;
        Storage::disk('local')->putFileAs($path, $file, $logo_path_name);
        if ($return_path) {
            return Storage::path($upload_path);
        } 
        return Storage::url($upload_path);
    }
}
