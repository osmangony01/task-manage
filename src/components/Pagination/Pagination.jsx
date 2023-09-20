import React from 'react';
import { useEffect, useState } from "react";

const Pagination = () => {
    const [data, setData] = useState([]);

    const fetchCountryData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
  
      if (data) {
        setData(data);
      }
    };
  
    useEffect(() => {
      fetchCountryData();
    }, []);
  
    console.log(data);
  
    const [currentPage, setCurrentPage] = useState(1);
    const [sartItem, setStartItem] = useState(1);
    const [endItem, setEndItem] = useState(9);
  
    const itemPerPage = 9;
    const totalItems = data?.length;
    const totalPage = Math.ceil(totalItems / itemPerPage);
  
    console.log(itemPerPage, totalItems, totalPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
      const startItem = (pageNumber - 1) * itemPerPage + 1;
      const endItem = Math.min(totalItems, pageNumber * itemPerPage);
      setStartItem(startItem);
      setEndItem(endItem);
    };
  
    return (
      <div className="App">
        {/* <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2> */}
        <div className="container">
          {data?.slice(sartItem - 1, endItem).map((item) => {
            return (
              <>
                <div className="item">
                  <img
                    className="item-img"
                    src={item.flags?.png}
                    alt="something broke"
                  />
                  <h2 className="title">{item.name.common}</h2>
                </div>
              </>
            );
          })}
        </div>
  
        <div>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-2 py-0.5  mx-2 border border-blue-600 ${currentPage === 1 ? '' : 'hover:bg-purple-600 hover:text-white'}`}
          >
            Previous
          </button>
          {[...Array(totalPage)].map((_, i) => {
            return (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`border border-slate-600 px-2 py-0.5 mx-1 ${currentPage === i + 1 && "bg-blue-600 text-white"}`}
              >
                {i + 1}
              </button>
            );
          })}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPage}
                    className={`px-2 py-0.5  mx-2 border border-blue-600 ${currentPage === totalPage ? "" : 'hover:bg-purple-600 hover:text-white'}`}
          >
            Next
          </button>
        </div>
      </div>
    );
};













export default Pagination;