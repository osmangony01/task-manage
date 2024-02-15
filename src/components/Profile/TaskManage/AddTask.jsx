import { useFormik } from "formik";
import { RxCross1 } from "react-icons/rx";
import { taskValidation } from "../../validation/formValidation";
import useUser from "../../../hooks/useUser";
import { useAddTaskMutation } from "../../../features/task/taskApi";


const AddTask = ({ status, handleAddTaskModal }) => {

    const user = useUser();
    const modal = status;

    const [addTask, { data: task, isLoading, isError, error: uError, isSuccess }] = useAddTaskMutation();
    // to handle add pop-up modal
    const handleModal = () => {
        handleAddTaskModal(false)
    }
    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: { title: "", date: "", priority: "", description: "" },
        validationSchema: taskValidation,
        onSubmit: (values) => {
            console.log(values)
            console.log(user?.id)
            const { title, date, priority, description } = values;
            addTask({
                task_title: title,
                task_due_date: date,
                task_priority: priority,
                task_description: description,
                user_id: user?.id,
            })
            
        },
    })
    console.log("user : ", task);
    console.log('isError : ', isError);
    console.log("isLoading : ", isLoading);
    console.log("uError : ", uError);

    if (isSuccess) {
        handleAddTaskModal(false);
    }
    return (
        <div>
            {
                modal && <div className='h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-20 z-50'>
                    <div className='relative bg-white rounded-md shadow-lg w-[500px] text-[15px] mx-auto inline-block'>
                        <span onClick={handleModal} className='absolute top-[15px] right-[15px] hover:bg-slate-200 p-2 rounded-full'><RxCross1 color='' size={20}></RxCross1></span>
                        <div className="p-6">
                            <form onSubmit={handleSubmit}>
                                <h1 className='text-center font-semibold text-2xl pb-4'>Create Task</h1>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Title</label>
                                    <input
                                        type="text"
                                        name="title"
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                        placeholder='Enter title'
                                        onChange={handleChange}
                                        value={values.title}
                                    />
                                    {errors.title && <small className="text-red-500">{errors.title}</small>}
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Due Date</label>
                                    <input
                                        type='date'
                                        name="date"
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                        onChange={handleChange}
                                        value={values.date}
                                    />
                                    {errors.date && <small className="text-red-500">{errors.date}</small>}
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Priority Level</label>
                                    <select
                                        name="priority"
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                        onChange={handleChange}
                                        value={values.priority}
                                    >
                                        <option value="" disabled>Select a priority level</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High" >High</option>
                                    </select>
                                    {errors.priority && <small className="text-red-500">{errors.priority}</small>}
                                </div>

                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Description</label>
                                    <textarea
                                        name="description"
                                        className="task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2"
                                        rows={3}
                                        placeholder="Type description"
                                        onChange={handleChange}
                                        value={values.description}
                                    ></textarea>
                                    {errors.description && <small className="text-red-500">{errors.description}</small>}
                                </div>
                                <div className='mt-4'>
                                    <button type="submit" className='text-right px-4 py-1.5 bg-[#7557fafb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Create Task</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};



export default AddTask;