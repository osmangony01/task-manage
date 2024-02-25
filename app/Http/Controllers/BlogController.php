<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class BlogController extends Controller
{
    public function createBlog(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'date' => 'required',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'user_id' => 'required',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }


        try {
            $image = $req->file('image');
            $sanitizedOriginalName = Str::slug($image->getClientOriginalName());
            $imageName = $sanitizedOriginalName . '_' . time() . '.' . $image->getClientOriginalExtension();
            // Move the file to the desired location
            $image->move('uploads/', $imageName);

            $blog = Blog::create([
                'title' => $req->title,
                'category' => $req->category,
                'date' => $req->date,
                'image' => $imageName,
                'user_id' => $req->user_id,
                'description' => $req->description,
            ]);
            return response()->json(['status' => 201, 'message' => 'Blog created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'error' => 'Failed to insert data.', 'err' => $e], 500);
        }
    }

    public function allBlogPost()
    {
        try {
            $blog = Blog::all();
            if ($blog->count() > 0) {
                return response()->json([
                    'status' => 200,
                    'blog' => $blog
                ], 200);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 404,
                'blog' => 'No Records Found!!'
            ], 404);
        }
    }

    public function getBlog($id)
    {
        try {
            $blog = Blog::where('user_id', $id)->get();
            if ($blog->count() > 0) {
                return response()->json([
                    'status' => 200,
                    'blog' => $blog
                ], 200);
            } else {
                return response()->json([
                    'status' => 404,
                    'blog' => 'No Records found!'
                ], 404);
            }
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'error' => 'Something wrong, server error!!'
            ], 500);
        }
    }

    public function getSingleBlog($id)
    {
        try {
            $blog = Blog::findOrFail($id);
            return response()->json([
                'status' => 200,
                'blog' => $blog,
            ], 200);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 404,
                'message' => 'Blog not found!',
            ], 404);
        }
    }

    public function updateBlog(Request $req, $id)
    {
        $validator = Validator::make($req->all(), [
            'title' => 'required|string|max:255',
            'category' => 'required|string',
            'date' => 'required',
            // 'image' => 'sometimes|image|mimes:jpeg,png,jpg,gif,svg,webp|max:2048',
            'user_id' => 'required',
            'description' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $blog = Blog::findOrFail($id);

            $blog->title = $req->title;
            $blog->category = $req->category;
            $blog->date = $req->date;
            $blog->user_id = $req->user_id;
            $blog->description = $req->description;

            $image = $req->file('image');

            if ($image) {
                //  delete file first
                $filePath = 'uploads/' . $blog->image;
                if (Storage::exists($filePath)) {
                    Storage::delete($filePath);
                }

                // upload file 
                $sanitizedOriginalName = Str::slug($image->getClientOriginalName());
                $imageName = $sanitizedOriginalName . '_' . time() . '.' . $image->getClientOriginalExtension();
                // Move the file to the desired location
                $image->move('uploads/', $imageName);

                $blog->image = $imageName;
            }

            if ($blog->save()) {
                return response()->json([
                    'status' => 202,
                    'message' => "Blog updated successfully"
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

    public function deleteBlog($id)
    {
        try {
            $blog = Blog::findOrFail($id);
            $blog->delete();

            // delete file first
            $filePath = 'uploads/' . $blog->image;
            if (Storage::exists($filePath)) {
                Storage::delete($filePath);
            }

            return response()->json([
                'status' => 200,
                'message' => 'Blog deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Something wrong, delete failed!!',
            ], 500);
        }
    }

    public function fileUpload(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'title' => 'required|string|max:255',
            'userImg' => 'required|image|mimes:jpeg,png,jpg,gif,svg,webp',
        ]);
        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            //option 1
            // $image = $req->file('userImg');
            // $sanitizedOriginalName = Str::slug($image->getClientOriginalName());
            // $imageName = $sanitizedOriginalName . '_' . time() . '.' . $image->getClientOriginalExtension();
            // // Move the file to the desired location
            // $image->move('uploads/', $imageName);

            // option 2

            $file = $req->file('userImg');

            // Get the original filename with extension
            $originalFileName = $file->getClientOriginalName();
            // Extract the image name without the extension
            $sanitizedOriginalFileName = substr($originalFileName, 0, strrpos($originalFileName, '.'));
            // Slug the name for URL-friendly format
            $sanitizedFileName = Str::slug($sanitizedOriginalFileName);
            // Generate the final image name with timestamp and extension
            $fileName = $sanitizedFileName . '_' . time() . '.' . $file->getClientOriginalExtension();
            $file->move('uploads/', $fileName);

            return response()->json([
                'status' => 201,
                'message' => 'Created successfully',
                'title' => $req->title,
                'image' => $fileName,
            ], 201);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'error' => 'Failed to insert data.', 'err' => $e], 500);
        }
    }
}
