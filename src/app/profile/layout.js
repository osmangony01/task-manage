'use client'

import useAuth from "@/hooks/useAuth";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useRouter } from 'next/navigation';

const DashboardLayout = ({ children }) => {
    const router = useRouter();
    const auth = useAuth();

    if (auth) {
        return (
            <div className="">
                <Sidebar></Sidebar>
                <Header></Header>
                <div className="bg-slate-100  lg:ml-[250px] p-4">
                    {children}
                </div>
            </div>
        );
    }
    return router.push('/sign-in');
    
};

export default DashboardLayout;