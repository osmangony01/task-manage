'use client'

import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/features/auth/authApi';
import { useDispatch } from 'react-redux';
import useUser from '@/hooks/useUser';
import { userLoggedOut } from '@/features/auth/authSlice';
import { LuUserCircle2 } from "react-icons/lu";
import { HiUserCircle } from "react-icons/hi";

const Navbar = () => {
    const user = useUser();
    const userExist = Object.keys(user).length;
    console.log(user)
    const dispatch = useDispatch();
    const [logout, { data, isLoading, isError }] = useLogoutMutation();
    const router = useRouter();


    const handleLogOut = () => {
        logout();
        localStorage.removeItem('auth');
        dispatch(userLoggedOut());
        router.push('/');
    }

    console.log("loading", isLoading);
    console.log("error", isError)
    console.log("data ", data);

    return (
        <nav className="flex justify-between items-center py-5 px-10 mx-auto bg-white">
            <h1 className="text-2xl font-semibold cursor-pointer"><Link href={'/'}>TechBlog</Link></h1>
            <ul className="flex items-center justify-center">
                <li className="mx-3 "><ActiveLink href="/">Home</ActiveLink></li>
                <li className="mx-3"><ActiveLink href="/about">About</ActiveLink></li>
                <li className="mx-3"><ActiveLink href="/contact">Contact</ActiveLink></li>
                {user && userExist > 0 && <li className="mx-2"><ActiveLink href="/create-blog">Create Blog</ActiveLink></li>}
                {userExist == 0 && <li className="mx-2"><ActiveLink href="/sign-in">Sign In</ActiveLink></li>}
                {/* {user && userExist > 0 && <li className="mx-2"><ActiveLink href="/profile">Profile</ActiveLink></li>}
                {user && userExist > 0 && <li className="mx-2"><button onClick={handleLogOut}>Sign Out</button></li>} */}
                {user && userExist > 0 && <li className="mx-3">
                    <div className="flex-none">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <HiUserCircle size={40} />
                                </div>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-base-100 rounded-box w-52 border border-violet-300 shadow-xl">
                                {/* <li><Link href={"/"}>Home</Link></li> */}
                                <li><Link href={"/profile"} className="justify-between">Profile</Link>
                                </li>
                                <li onClick={handleLogOut}><Link href={"/"}>Sign Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </li>
                }
            </ul>

        </nav>
    );
};

export default Navbar;
