'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={`hover:text-orange-500 ${pathname === href ? "text-blue-600" : ""}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;