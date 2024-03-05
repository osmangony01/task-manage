<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
// use Tymon\JWTAuth\Contracts\Providers\Auth;

class AuthProviderController extends Controller
{
    public function redirect($provider)
    {
        return Socialite::driver($provider)->redirect();
        //return Socialite::driver($provider)->redirectUrl(url("/auth/{$provider}/callback"))->redirect();
    }

    public function callback($provider)
    {
        try {
            $socialUser = Socialite::driver($provider)->user();

            $user = User::where('email', $socialUser->email)->first();
            if (!$user) {
                $user = User::create([
                    'name' => $socialUser->name,
                    'email' => $socialUser->email,
                    'provider_id' => $socialUser->id,
                    'provider' => $provider,
                    'provider_token' => $socialUser->token,
                ]);
            }

            $token = Auth::login($user);

            $responseData = [
                'success' => true,
                'message' => 'Successfully logged in with ' . $provider,
                'user' => $user,
                'access_token' => $token,
            ];
            return $this->redirectAnotherDomain($responseData);

            // // Authenticate and respond with user data
            // if ($token = auth()->attempt(['email' => $user->email, 'password' => null])) {
            //     //$apiToken = $user->createToken('SocialLogin')->plainTextToken; // Generate API token

            //     return response()->json([
            //         'success' => true,
            //         'message' => 'Successfully logged in with ' . $provider,
            //         'user' => $user,
            //         'api_token' => $token,
            //     ], 201); // Created status code
            // } else {
            //     return response()->json([
            //         'success' => false,
            //         'message' => 'Invalid login credentials',
            //     ], 401); // Unauthorized status code
            // }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'An error occurred: ' . $e->getMessage(),
            ], 500); // Internal Server Error status code
        }
        // try{
        //     $socialUser = Socialite::driver($provider)->user();

        //     $user = User::updateOrCreate([
        //         'provider_id' => $socialUser->id,
        //         'provider' => $provider
        //     ], [
        //         'name' => $socialUser->name,
        //         'email' => $socialUser->email,
        //         'provider_token' => $socialUser->token,
        //         // 'github_refresh_token' => $socialUser->refreshToken,
        //     ]);

        //     Auth::login($user);

        // }catch(\Exception $e){

        // }
    }

    public function redirectAnotherDomain($data)
    {
        // Prepare the URL you want to redirect to
        $redirectUrl = 'http://localhost:3000/user';

        // Encode the JSON data and append it to the redirect URL as a query parameter
        $redirectUrl .= '?json=' . urlencode(json_encode($data));

        // Perform the redirect
        return redirect()->away($redirectUrl);
    }
}
