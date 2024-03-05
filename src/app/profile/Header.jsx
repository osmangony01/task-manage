'use client'


import { useState } from 'react';
import Image from 'next/image';
import { FiChevronDown } from "react-icons/fi";
import useUser from '@/hooks/useUser';
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/features/auth/authApi';
import { userLoggedOut } from '@/features/auth/authSlice';

const Header = () => {

    const user = useUser();
    const [userControl, setUserControl] = useState(false);
    const [toggle, setToggle] = useState(false);
    const dispatch = useDispatch();
    const [logout, { data, isLoading, isError }] = useLogoutMutation();
    const router = useRouter();

    const handleLogOut = () => {
        logout();
        localStorage.removeItem('auth');
        dispatch(userLoggedOut());
        router.push('/');
    }

    //const isRole = useRole();
    //console.log(isRole);

    const navItems = <>
        <li>Profile Info</li>
        <li>Blog Post</li>
    </>

    return (
        <div className="flex justify-between bg-base-100 md:px-6 font-['Segoe UI'] font-semibold fixed-top">
            <div className="flex items-center">
                <div className="relative" onClick={() => setToggle(!toggle)}>
                    <label tabIndex={0} className="btn btn-ghost lg:hidden m-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        toggle && <div className="absolute left-0 top-12 lg:hidden z-20 border">
                            <ul className="menu menu-compact p-2 shadow bg-base-100 rounded-md w-52 text-[17px] ">
                                {/* {navItems} */}
                                <li className='py-1.5 px-2 hover:bg-gray-100 rounded text-sm'><Link href={'/profile'}>My Profile</Link></li>
                                <li className='py-1.5 px-2 hover:bg-gray-100 rounded text-sm'><Link href={'/profile/blog-post'}>Blog Post</Link></li>
                            </ul>
                        </div>
                    }
                </div>
                <div className="flex items-center">
                    {/* <Image src="/home.svg" width={50} height={25} alt="asdf" /> */}
                    <h1 className="text-xl font-semibold">TechBlog</h1>
                </div>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[17px]">
                    {user && navItems}
                    <Image className='' src="/home.svg" width={50} height={25} alt="asdf" />
                </ul>
            </div> */}
            <div className="flex items-center">
                {/* {
                    <div className="hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 text-[17px]">
                            {navItems}
                        </ul>
                    </div>
                } */}
                <button className="btn btn-ghost btn-circle">
                    <Image src="/notification-icon.svg" alt="icon" width={20} height={20} />
                </button>
                {
                    <div className="relative text-sm" >
                        <label className="flex px-3 py-1 border rounded-md my-2 items-center ">
                            <div className="rounded-md bg-[#fa9052]">
                                <Image src="/profile.svg" width={35} height={25} alt="profile" />
                            </div>
                            <div className="flex flex-col pl-3">
                                <p className="text-[12px]">Welcome back,</p>
                                <p>{user?.name}</p>
                            </div>
                            <div className="pl-6 cursor-pointer" onClick={() => setUserControl(!userControl)}>
                                <FiChevronDown size={25}></FiChevronDown>
                            </div>

                        </label>
                        {
                            userControl && <div className="absolute right-0 top-12 z-10">
                                <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-md border w-52">
                                    <li><span><Link href={'/'}>Home</Link></span></li>
                                    <li><span>{user.email}</span></li>
                                    <li onClick={handleLogOut}><a>Sign Out</a></li>
                                </ul>
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    );
};

export default Header;
//onClick={() => setUserControl(!userControl)}