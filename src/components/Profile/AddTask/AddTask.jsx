import { RxCross1 } from "react-icons/rx";
import axiosInstance from "../../../routes/axiosInstance";
import { AuthContext } from "../../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import { TaskContextAPI } from "../Profile";
import { useForm } from "react-hook-form";


const AddTask = ({ status, handleAddModal }) => {

    const { user } = useContext(AuthContext);
    const { reload, setReload } = useContext(TaskContextAPI);
    const modal = status;
    const { register: taskHandle, handleSubmit, reset , watch, formState: { errors } } = useForm({
        defaultValues: {
            taskTitle: "",
            dueDate: "",
            priority: "Low", 
            description: "",
        },
    });

    // to handle add pop-up modal
    const handleModal = () => {
        handleAddModal(false)
    }

    // handle to create task
    const createTask = async (taskData) => {
        const res = await axiosInstance.post('/task', { ...taskData });
        const data = res.data;
        //console.log(data);
        if (data.ok) {
            setReload(!reload);
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Task is created successfully',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }

    // to handle for adding task
    const onSubmit = (data) => {
        const email = user?.email;
        const taskData = { ...data, email };
        createTask(taskData)
        // reset the react hook form 
        reset({
            taskTitle: "",
            dueDate: "",
            priority: "Low", 
            description: "",
        });
        handleAddModal(false);
    }

    return (
        <div>
            {
                modal && <div className='h-screen w-full fixed left-0 top-0  flex justify-center items-center bg-black bg-opacity-20 z-50'>
                    <div className='relative bg-white rounded-md shadow-lg w-[500px]  text-[15px] mx-auto h-[570px] '>
                        <span onClick={handleModal} className='absolute top-[15px] right-[15px] hover:bg-slate-200 p-2 rounded-full'><RxCross1 color='' size={20}></RxCross1></span>
                        <div className="p-10">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <h1 className='text-center font-semibold text-2xl pb-4'>Create Task</h1>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Title</label>
                                    <input
                                        type="text"
                                        name="taskTitle"
                                        {...taskHandle("taskTitle", { required: true })}
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                        placeholder='Enter title'
                                    />
                                    {errors.taskTitle && <span className="text-red-600 text-sm">The title field is required</span>}
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Due Date</label>
                                    <input
                                        type='date'
                                        name="dueDate"
                                        {...taskHandle("dueDate", { required: true })}
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                    />
                                    {errors.dueDate && <span className="text-red-600 text-sm">The date field is required</span>}
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Priority Level</label>
                                    <select
                                        name="priority"
                                        {...taskHandle("priority", { required: true })}
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                    >
                                        <option value="Low" disabled>Select a priority level</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High" >High</option>
                                    </select>
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Description</label>
                                    <textarea
                                        type="text"
                                        name="description"
                                        {...taskHandle("description", { required: true })}
                                        rows={3}
                                        className="task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2"
                                        placeholder="Type description"
                                    ></textarea>
                                    {errors.description && <span className="text-red-600 text-sm">The description field is required</span>}
                                </div>
                                <div className='mt-4'> <button type='submit' className='text-right px-4 py-1.5 bg-[#5e3cf7fb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Create Task</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};



export default AddTask;