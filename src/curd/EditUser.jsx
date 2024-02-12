import { Link, useParams } from "react-router-dom";
import { useGetUserQuery } from "../features/curd-api/userApi";
import EditForm from "./EditForm";


const EditUser = () => {

    const { id } = useParams();

    console.log(id)

    const { data, isLoading, isError, error } = useGetUserQuery(id);

    let content = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    }
    else if (isError) {
        content = <div>There was an error, failed to fetch.</div>;
    }
    if (data && data.users) {
        console.log(data.users)
        content = <EditForm user={data.users} id={id} key={id} />
    }

    return content;
}

export default EditUser;

