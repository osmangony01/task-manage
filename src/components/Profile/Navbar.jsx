import React, { useContext, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { useLoginMutation, useLogoutMutation } from '../../features/auth/authApi';
import { useDispatch } from "react-redux";
import { userLoggedOut } from '../../features/auth/authSlice';


const Navbar = () => {

    //const { user, setUser, token, setToken } = useContext(AuthContext);
    const dispatch = useDispatch();
    const [logout, { data, isLoading, isError }] = useLogoutMutation();
    const navigate = useNavigate();
    // const tk = localStorage.getItem('access_token');

    const handleLogOut = async () => {
        logout();
        localStorage.removeItem('auth');
        dispatch(userLoggedOut());
        navigate("/", { replace: true });
    }

    // console.log(user)
    console.log("loading", isLoading);
    console.log("error", isError)
    console.log("data ", data);

    return (
        <div className='flex justify-between items-center py-2 px-8 bg-white '>
            <div>Hi, { }</div>
            <div className='flex justify-center items-center'>
                <div onClick={handleLogOut} className="hover:text-blue-500 hover:font-semibold text-sm  cursor-pointer pr-3" >
                    <a>Sign Out</a>
                </div>
                <div>
                    <label className="btn btn-ghost btn-circle avatar m-0">
                        <div className="w-10 rounded-full">
                            {/* {user?.photoURL ? <img src={user?.photoURL} alt="" className='bg-slate-200 rounded-full' title={user?.displayName} />
                                : <span className='first-line:' title={user?.displayName}><FaUserCircle size={40}></FaUserCircle></span>} */}
                            <FaUserCircle size={40}></FaUserCircle>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;