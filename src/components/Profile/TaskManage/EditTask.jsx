import { RxCross1 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { useGetSingleTaskQuery } from "../../../features/task/taskApi";
import EditForm from "./EditForm";


const EditTask = ({ modal, handleEditModal, id }) => {
   
    // const modal = status;
   
    const {data, isLoading, isError, error, isSuccess } = useGetSingleTaskQuery(id);

    let content = null;

    if (isLoading) {
        // content = <div>Loading...</div>;
        console.log('Loading...')
        return;
    }
    else if (isError) {
        // content = <div>There was an error, failed to fetch.</div>;
        console.log("There was an error, failed to fetch.")
        return;
    }
    if (data && data.task) {
        console.log(data.task)
       return <EditForm task={data.task} key={id} modal={modal} handleEditModal={handleEditModal} />
    }

    //return content;
};



export default EditTask;