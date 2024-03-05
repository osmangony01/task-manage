<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Laravel\Socialite\Facades\Socialite;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => [
            'login',
            'register',
            'register2',
        ]]);
    }

    public function register(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $user = User::create([
                "name" => $req->name,
                "email" => $req->email,
                "password" => bcrypt($req->password),
                'provider' => "",
                'provider_id' => "",
                'provider_token' => ""
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'User created successfully',
                'user' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'error' => 'Failed to registration, Please try again!!.'
            ], 500);
        }
    }

    public function register2(Request $req)
    {
        try {
            $user = User::create([
                "name" => $req->name,
                "email" => $req->email,
                "password" => $req->password,
                'provider' => $req->provider,
                'provider_id' => $req->provider_id,
                'provider_token' => $req->provider_token
            ]);

            return response()->json([
                'status' => 200,
                'message' => 'User created successfully',
                'user' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'error' => 'Failed to registration, Please try again!!.'
            ], 500);
        }
    }


    public function login(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'email' => 'required|email',
            'password' => 'required|string|min:6'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        // if(! $token = auth()->attempt(["email"=> $req->email, "password"=> $req->password])){
        //     return response()->json(['status'=> 401,'error' => 'Unauthorized'], 401);
        // }

        if (!$token = auth()->attempt($req->only('email', 'password'))) {
            return response()->json(['status' => 401, 'error' => 'Unauthorized'], 401);
        }


        return $this->createNewToken($token);
    }

    public function profile()
    {
        return response()->json(auth()->user(), 200);
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(["status" => 200, "message" => "User logged out successfully"], 200);
    }

    public function me()
    {
        return response()->json(auth()->user());
    }

    public function refresh()
    {
        return $this->createNewToken(auth()->refresh());
    }

    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->user();

            // Validate or create user based on social provider data
            $user = User::where('email', $socialUser->email)->first();
            if (!$user) {
                $user = User::create([
                    'name' => $socialUser->name,
                    'email' => $socialUser->email,
                    'password' => "",
                    'provider_id' => $socialUser->id,
                    'provider' => $provider,
                    'provider_token' => $socialUser->token,
                ]);
            }

            // Authenticate and respond with user data
            if ($token = auth()->attempt(['email' => $user->email, 'password' => null])) {
                // $apiToken = $user->createToken('SocialLogin'); // Generate API token

                return response()->json([
                    'success' => true,
                    'message' => 'Successfully logged in with ' . $provider,
                    'user' => $user,
                    'access_token' => $token,
                    'token_type' => 'bearer',
                    'expires_in' => auth()->factory()->getTTL() * 60,
                ], 201); // Created status code
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Invalid login credentials',
                ], 401); // Unauthorized status code
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500); // Internal Server Error status code
        }
    }

    protected function createNewToken($token)
    {
        // Set the token as an HTTP-only cookie
        //$cookie = cookie('access_token', $token, auth()->factory()->getTTL() * 60, '/', null, false, true);

        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()
        ]);
    }
}
