<?php

namespace App\Http\Controllers;

use Exception;
use App\Models\Task;
use App\Models\User;
use App\Models\TaskImage;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class TaskController extends Controller
{
    public function index($id)
    {
        try {
            $tasks = Task::where('user_id', $id)->get();
            if ($tasks->count() > 0) {
                return response()->json([
                    'status' => 200,
                    'tasks' => $tasks
                ], 200);
            }
        } catch (ModelNotFoundException $exception) {
            return response()->json([
                'status' => 404,
                'tasks' => 'No Records Found!!'
            ], 404);
        }
    }

    public function fetchTask($id)
    {
        try {
            $task = Task::findOrFail($id);
            return response()->json([
                'status' => 200,
                'task' => $task
            ], 200);
        } catch (Exception $exception) {
            return response()->json([
                'status' => 404,
                'message' => 'task not found!',
            ], 404);
        }
    }

    public function addTask(Request $req)
    {
        $validator = Validator::make($req->all(), [
            'task_title' => 'required|string|max:255',
            'task_due_date' => 'required|date',
            'task_priority' => 'required|string',
            'task_description' => 'required|string',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'errors' => $validator->errors()
            ], 422);
        }

        try {
            $task = Task::create([
                'task_title' => $req->task_title,
                'task_due_date' => $req->task_due_date,
                'task_priority' => $req->task_priority,
                'task_description' => $req->task_description,
                'user_id' => $req->user_id
            ]);
            return response()->json(['status' => 201, 'message' => 'Task created successfully'], 201);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'error' => 'Failed to insert data.'], 500);
        }
    }



    public function updateTask(Request $req, $id)
    {

        $validator = Validator::make($req->all(), [
            'task_title' => 'required|string|max:255',
            'task_due_date' => 'required|date',
            'task_priority' => 'required|string',
            'task_description' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 422,
                'error' => $validator->errors()
            ], 422);
        }

        try {
            $task = Task::findOrFail($id);
            $task->task_title = $req->task_title;
            $task->task_due_date =  $req->task_due_date;
            $task->task_priority =  $req->task_priority;
            $task->task_description =  $req->task_description;

            if ($task->save()) {
                return response()->json([
                    'status' => 202,
                    'success' => 'Task updated successfully'
                ], 202);
            }else{
                return response()->json([
                    'status' => 500,
                    'error' => 'Something went wrong, update failed!'
                ], 500);
            }
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 500,
                'error' => 'Something went wrong, update failed!'
            ], 500);
        }
    }

    public function deleteTask($id)
    {
        try {
            $task = Task::findOrFail($id);
            $task->delete();
            return response()->json([
                'status' => 200,
                'message' => 'Task deleted successful',
            ], 200);
        } catch (\Exception $exception) {
            return response()->json([
                'status' => 404,
                'error' => 'Task not found!',
            ], 404);
        }
    }

    
}
