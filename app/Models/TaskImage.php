<?php

namespace App\Models;

use App\Models\Task;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class TaskImage extends Model
{
    use HasFactory;

    protected $fillable = ['task_id', 'task_image'];

    public function tasks(): BelongsTo
    {
        return $this->belongsTo(Task::class);
    }
}
