<?php

namespace App\Http\Controllers;

use App\Models\c;
use App\Models\Comment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommentController extends Controller
{
   public function allComment($id)
   {
      try {
         $comment = Comment::where('blog_id', $id)->get();
         if ($comment->count() > 0) {
            return response()->json([
               'status' => 200,
               'comment' => $comment
            ], 200);
         } else {
            return response()->json([
               'status' => 404,
               'error' => 'No Records found!'
            ], 404);
         }
      } catch (\Exception $e) {
         return response()->json([
            'status' => 500,
            'error' => 'Something wrong, server error!!'
         ], 500);
      }
      // try {
      //    $comment = Comment::all();
      //    if ($comment->count() > 0) {
      //       return response()->json([
      //          'status' => 200,
      //          'comment' => $comment
      //       ], 200);
      //    }
      // } catch (\Exception $e) {
      //    return response()->json([
      //       'status' => 404,
      //       'comment' => 'No Records Found!!'
      //    ], 404);
      // }
   }

   public function addComment(Request $req)
   {
      $validator = Validator::make($req->all(), [
         'blog_id' => 'required',
         'user_id' => 'required',
         'comment' => 'required|string|max:255',
      ]);

      if ($validator->fails()) {
         return response()->json([
            'status' => 422,
            'errors' => $validator->errors()
         ], 422);
      }

      try {
         $comment = Comment::create([
            'blog_id' => $req->blog_id,
            'user_id' => $req->user_id,
            'comment' => $req->comment,
         ]);
         return response()->json(['status' => 201, 'message' => 'success'], 201);
      } catch (\Exception $e) {
         return response()->json(['status' => 500, 'error' => 'Failed to insert data.', 'err' => $e], 500);
      }
   }
   public function updateComment(Request $req, $id)
   {
      $validator = Validator::make($req->all(), [
         'blog_id' => 'required',
         'user_id' => 'required',
         'comment' => 'required|string|max:255',
      ]);

      if ($validator->fails()) {
         return response()->json([
            'status' => 422,
            'errors' => $validator->errors()
         ], 422);
      }

      try {
         $comment = Comment::findOrFail($id);

         $comment->blog_id = $req->blog_id;
         $comment->user_id = $req->user_id;
         $comment->comment = $req->comment;


         if ($comment->save()) {
            return response()->json([
               'status' => 202,
               'message' => "comment updated successfully"
            ], 201);
         } else {
            return response()->json([
               'status' => 500,
               'error' => "Something wrong, update failed!"
            ], 500);
         }
      } catch (\Exception $e) {
         return response()->json([
            'status' => 500,
            'error' => "Server error, update failed!!"
         ], 500);
      }
   }

   public function deleteComment($id)
   {
      try {
         $comment = Comment::findOrFail($id);
         $comment->delete();

         return response()->json([
            'status' => 200,
            'message' => 'comment deleted successfully',
         ], 200);
      } catch (\Exception $e) {
         return response()->json([
            'status' => 500,
            'message' => 'Something wrong, delete failed!!',
         ], 500);
      }
   }
}
