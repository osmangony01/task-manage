import { useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {

    const [date, setDate] = useState(null);

    console.log(date)
    return (
        <div className='w-3/4 mx-auto p-10'>
            <h1 className='text-3xl py-5'>Welcome to ReactJS world {` > > >`}</h1>
            <hr />
            <input type="date" placeholder="date" onChange={(e)=>setDate(e.target.value)}/>
            <div className="mt-10">
                <ul className="text-blue-800 font-semibold  italic underline">
                   <Link to={'/'}> <li className="pb-2">Home</li></Link>
                   <Link to={'/curd/view'}> <li className="pb-2">Curd Operation, Searching, Sorting, Filtering, Pagination</li></Link>
                    <li>File Upload</li>
                    <li>From Handle</li>
                    <Link to={'/pagination'}> <li>Pagination</li></Link>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;