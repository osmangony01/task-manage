import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center px-8 py-3 bg-slate-800">
            <Link href="/" className="text-white font-bold">TODO APP</Link>
            <Link href="/add-todo" className="font-semibold  bg-white py-1.5 rounded hover:bg-orange-500 hover:text-white px-3">Add Topic</Link>
        </nav>
    );
};

export default Navbar;