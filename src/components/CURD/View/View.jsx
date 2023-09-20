import React, { useContext, useEffect, useState } from 'react';
import { ContextAPI } from '../../../App';

const View = () => {
    const [data, setData] = useState({});
    const { todo } = useContext(ContextAPI);


    const [name, setName] = useState(null);
    const [minPrice, setMinPrice] = useState(null);
    const [maxPrice, setMaxPrice] = useState(null);
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(null);

    const [totalPage, setTotalPage] = useState([])
    const [itemPerPage, setItemPerPage] = useState(5)
    const [currentPage, setCurrentPage] = useState(0);
    const [startItem, setStartItem] = useState(1);
    const [endItem, setEndItem] = useState(5);



    const fetchData = async () => {
        const response = await fetch(`http://localhost:5100/data-item?page=${currentPage}&limit=${itemPerPage}`)
        const responseData = await response.json();
        console.log(responseData);

        setData(responseData);
        console.log(responseData?.length)
        const totalItems = responseData?.length;
        const totalP = Math.ceil(totalItems / itemPerPage);
        const pages = [...Array(totalP).keys()];
        setTotalPage(pages)
        
    }

    useEffect(() => {
        fetchData();
    }, [currentPage, itemPerPage])

    // useEffect(() => {
        
    // }, [data])


    const options = [5, 10, 15];
    const handleShowItem = (e) => {
        const currentItem = parseInt(e.target.value);
        setItemPerPage(currentItem);
        setCurrentPage(0);
        setStartItem(1);
        setEndItem(currentItem);

    }

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        const totalItems = data?.length;
        const startItem = (pageNumber - 1) * itemPerPage + 1;
        const endItem = Math.min(totalItems, pageNumber * itemPerPage);
        console.log(startItem, endItem);
        setStartItem(startItem);
        setEndItem(endItem);

    };
    console.log(totalPage)
    console.log(currentPage, itemPerPage, totalPage.length);

    return (
        <div className=' w-full lg:w-[1100px] mx-auto border px-12 py-2'>
            <h1 className='text-3xl text-center pb-4 font-semibold'>Welcome to Todo App</h1>

            <div className='py-5'>
                <button className='bg-purple-600 px-3 py-1.5 text-white rounded'>Add Todo +</button>
            </div>

            <div className='grid grid-cols-4 gap-3'>
                <div>
                    <input type="text" placeholder='Search by name' className='border px-4 py-1 placeholder:text-sm w-full' />
                </div>
                <div>
                    <select className='border px-4 py-2  placeholder:text-sm w-full'>
                        <option value=''>Select category</option>
                        <option>A1</option>
                        <option>B1</option>
                        <option>C1</option>
                    </select>
                </div>
                <div className='grid grid-cols-3 gap-2 items-center'>
                    <span className='text-end'>Price</span>
                    <span>
                        <input type='number' placeholder='Min' className='border px-4 py-1 placeholder:text-sm w-full' />
                    </span>
                    <span>
                        <input type='number' placeholder='Max' className='border px-4 py-1 placeholder:text-sm w-full' />
                    </span>
                </div>
                <div>
                    <input type='date' placeholder='Max Price' className='border px-4 py-1 placeholder:text-sm w-full' />
                </div>
                <div></div>
            </div>

            <hr className='mb-6' />

            <div className='overflow-x-auto w-full '>
                {
                    data?.result && <table className='table w-full  table-zebra'>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Date</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.result?.map((item, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.category}</td>
                                        <td>{item.date}</td>
                                        <td>
                                            <button className='border mx-2 border-blue-600 hover:bg-blue-600 px-3 py-1.5 text-black hover:text-white rounded'>Edit</button>
                                            <button className='border mx-2 border-red-600 hover:bg-red-600 px-3 py-1.5 text-black hover:text-white rounded'>Delete</button>
                                        </td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                }

            </div>

            {/* pagination */}

            <div className='my-10 flex justify-between'>
                <span>
                    <select onChange={handleShowItem} className='border px-2 py-1 border-blue-600 outline-none'>
                        {
                            options?.map((item, index) => {
                                return <option key={index} value={item}>{item}</option>
                            })
                        }
                    </select>

                </span>
                <span>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 0 }
                        className={`px-2 py-0.5  mx-2 border border-blue-600 ${currentPage === 0 ? '' : 'hover:bg-purple-600 hover:text-white'}`}
                    >
                        {'<'}
                    </button>
                    {
                        totalPage?.map((i) => {
                            return (
                                <button
                                    key={i}
                                    onClick={() => handlePageChange(i)}

                                    className={`border border-slate-600 px-2 py-0.5 mx-1 ${currentPage === i && "bg-blue-600 text-white"}`}
                                >
                                    {i + 1}
                                </button>
                            );
                        })
                    }
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                       
                        
                        className={`px-2 py-0.5  mx-2 border border-blue-600 ${currentPage === totalPage-1 ? "" : 'hover:bg-purple-600 hover:text-white'}`}
                        disabled={currentPage == totalPage-1}
                    >
                        {'>'}
                    </button>
                </span>
            </div>
        </div>
    );
};

export default View;