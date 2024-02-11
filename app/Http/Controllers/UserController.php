<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function allUser()
    {
        try {
            $users = User::all();

            if ($users->count() > 0) {
                return response()->json([
                    'status' => 200,
                    'users' => $users
                ], 200);
            } 
            else {
                return response()->json([
                    'status' => 404,
                    'users' => [],
                    'message' => 'No Records Found!!'
                ], 404);
            }
        } 
        catch (ModelNotFoundException $exception) {
            return response()->json([
                'status' => 500,
                'message' => 'Something broke!!'
            ], 500);
        }
    }

    public function getUser($id){
        try {
            $users = User::findOrFail($id);

            if ($users->count() > 0) {
                return response()->json([
                    'status' => 200,
                    'users' => $users
                ], 200);
            } 
            else {
                return response()->json([
                    'status' => 404,
                    'users' => [],
                    'message' => 'No Records Found!!'
                ], 404);
            }
        } 
        catch (ModelNotFoundException $exception) {
            return response()->json([
                'status' => 500,
                'message' => 'Something broke!!'
            ], 500);
        }
    }

    public function addUser(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:30',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            User::create([
                'name' => $req->name,
                'email' => $req->email,
                'password' => $req->password,
                'bio' => $req->bio,
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'User created successfully'
            ], 201);
        } 
        catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'error' => 'Failed to create user, try again!'
            ], 500);
        }
    }

    public function updateUser(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:30',
            'bio' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $user = User::findOrFail($id);
            $user->name = $req->name;
            $user->email = $req->email;
            $user->password = $req->password;
            $user->bio = $req->bio;
           
            if ($user->save()) {
                return response()->json([
                    'status' => 202,
                    'message' => 'User updated successfully'
                ], 202);
            } 
            else {
                return response()->json([
                    'status' => 500,
                    'message' => 'Something went wrong, Update failed!'
                ], 500);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500, 
                'error' => 'Server error, failed to update!'
            ], 500);
        }
    }

    public function deleteUser()
    {
    }
}
