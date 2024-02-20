'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const ActiveLink = ({ href, children }) => {
    const pathname = usePathname();

    return (
        <Link href={href} className={pathname === href ? "text-blue-600" : ""}>
            {children}
        </Link>
    );
};

export default ActiveLink;