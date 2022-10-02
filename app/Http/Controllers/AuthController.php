<?php

namespace App\Http\Controllers;

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Exception\RequestException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactEmail;
use App\Http\Controllers\Controller;
use App\Models\User;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth:api', ['except' => ['login', 'register']]);
    // }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login()
    {
        $credentials = request(['email', 'password']);
        // if(Auth::attempt(['email' => $request->email, 'password' => $request->password]))
        if (!auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
        $token = auth()->user()->createToken('KoyapAuth')->plainTextToken;
        return $this->respondWithToken($token);
    }

    /**
     * Register a User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request) {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|between:2,100',
            'email' => 'required|string|email|max:100|unique:users',
            'password' => 'required|string|confirmed|min:6',
        ]);
        // $validator = Validator::make($request->all(), [
        //     'name' => 'required',
        //     'email' => 'required|email',
        //     'password' => 'required',
        //     'confirm_password' => 'required|same:password',
        // ]);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $user = User::create(array_merge(
                    $validator->validated(),
                    ['password' => bcrypt($request->password)]
                ));
        return response()->json([
            'message' => 'User successfully registered',
            'user' => $user
        ], 201);
    }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json(auth()->user());
    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        auth()->user()->currentAccessToken()->delete();

        return response()->json(['message' => 'Successfully logged out', 'user' => request()->user()]);
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'user' => auth()->user()
        ]);
    }

    /**
     * Get a token form rest.resvoyage.com
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function token()
    {
        $client = new Client();
        $url = 'https://rest.resvoyage.com/api/v1/public/token?clientname=VslYXzycTIi';
        // $ch = curl_init();
        // curl_setopt($ch, CURLOPT_URL, $url);
        // curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        // $contents = curl_exec($ch);
        // curl_close($ch);
        try {
            $response = $client->get($url);
            return response()->json([
                'token' => $response->getBody()
            ]);
        } catch (GuzzleException $e) {
            return response()->json($e->getMessage(), 500);
        }
        // return response()->json($contents);
    }

    public function email(Request $request)
    {
        $mailData = [
            "name" => $request['name'],
            "email" => $request['email'],
            "phone" => $request['phone'],
            "content" => $request['content']
        ];

        Mail::to(env('MAIL_TO_ADDRESS', 'koyap@protonmail.com'))->send(new ContactEmail($mailData));
        return response()->json([
            'msg' => "Mail Sent ".env('MAIL_TO_ADDRESS', 'koyap@protonmail.com')." Successfully!"
        ]);
        // return response()->json($mailData);
    }
}
