import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <aside className="w-[250px] h-screen fixed bg-white hidden lg:flex lg:flex-col">
            <h1 className="text-xl font-semibold text-center py-4">TechBlog</h1>
            <ul className="flex flex-col px-3 pt-4 gap-1">
                <li className='py-1.5 px-2 hover:bg-gray-100 rounded'><Link href={'/profile'}>My Profile</Link></li>
                <li className='py-1.5 px-2 hover:bg-gray-100 rounded'><Link href={'/profile/blog-post'}>Blog Post</Link></li>
            </ul>
        </aside>
    );
};
export default Sidebar;