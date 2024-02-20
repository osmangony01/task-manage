'use client'

import Link from 'next/link';
import ActiveLink from './ActiveLink';
import { useRouter } from 'next/navigation';
import { useLogoutMutation } from '@/features/auth/authApi';
import { useDispatch } from 'react-redux';
import useUser from '@/hooks/useUser';
import { userLoggedOut } from '@/features/auth/authSlice';

const Navbar = () => {
    const user = useUser();
    const len = Object.keys(user).length;
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
        <nav className="flex justify-between items-center py-5 px-5 mx-auto bg-white">
            <h1 className="text-2xl font-semibold">TechBlog</h1>
            <ul className="flex items-center justify-center">
                <li className="mx-2"><ActiveLink href="/">Home</ActiveLink></li>
                <li className="mx-2"><ActiveLink href="/about">About</ActiveLink></li>
                <li className="mx-2"><ActiveLink href="/contact">Contact</ActiveLink></li>
                {len==0 &&   <li className="mx-2"><ActiveLink href="/sign-in">Sign In</ActiveLink></li>}
                {user && len>0 && <li className="mx-2"><ActiveLink href="/profile">Profile</ActiveLink></li>}
                {user && len>0 && <li className="mx-2"><button onClick={handleLogOut}>Sign Out</button></li>}

            </ul>
        </nav>
    );
};

export default Navbar;
