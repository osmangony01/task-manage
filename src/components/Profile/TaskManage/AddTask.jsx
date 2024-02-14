import { RxCross1 } from "react-icons/rx";


const AddTask = ({ status, handleAddTaskModal }) => {

    const modal = status;

    // to handle add pop-up modal
    const handleModal = () => {
        handleAddTaskModal(false)
    }


    // to handle for adding task
    const handleSubmit = (e) => {
        e.preventDefault();

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
                                        name="task_title"
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                        placeholder='Enter title'
                                    />
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Due Date</label>
                                    <input
                                        type='date'
                                        name="task_due_date"
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                    />
                                </div>
                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Priority Level</label>
                                    <select
                                        name="task_priority"
                                        className='task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2'
                                    >
                                        <option value="" disabled>Select a priority level</option>
                                        <option value="Low">Low</option>
                                        <option value="Medium">Medium</option>
                                        <option value="High" >High</option>
                                    </select>
                                </div>

                                <div className='flex flex-col mt-3'>
                                    <label className='pb-1'>Description</label>
                                    <textarea
                                        name="task_description"
                                        className="task-input placeholder:text-sm hover:border-[#5e3cf7fb] hover:border-2"
                                        rows={3}
                                        placeholder="Type description"
                                    ></textarea>
                                </div>
                                <div className='mt-4'>
                                    <button type='submit' className='text-right px-4 py-1.5 bg-[#7557fafb] text-white rounded shadow-md hover:bg-[#3d3bbefb]'>Create Task</button>
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