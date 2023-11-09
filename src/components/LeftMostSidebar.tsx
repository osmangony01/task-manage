'user client'

import Image from "next/image";
import icon1 from "../../public/sb-icon1.svg";
import icon2 from "../../public/sb-icon2.svg";
import icon3 from "../../public/sb-icon3.svg";
import icon4 from "../../public/sb-icon4.svg";
import icon5 from "../../public/sb-icon5.svg";

const LeftMostSidebar = () => {
    return (
        <>
            <span><Image src={icon1} width={36} height={36} className="" alt="img" /></span>
            <span><Image src={icon2} width={36} height={36} className="" alt="img" /></span>
            <span><Image src={icon3} width={36} height={36} className="" alt="img" /></span>
            <span><Image src={icon4} width={36} height={36} className="" alt="img" /></span>
            <span><Image src={icon5} width={36} height={36} className="" alt="img" /></span>
        </>
    );
};

export default LeftMostSidebar;
