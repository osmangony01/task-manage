import Header from "./Header";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="">
            <Sidebar></Sidebar>
        
            <Header></Header>
            <div className="bg-slate-100  lg:ml-[250px] p-4">
                {children}
            </div>
           

        </div>
    );
};

export default DashboardLayout;