'use client'

import Image from "next/image";
import fb from "../../public/facebook.png";
import link from "../../public/link.png";
import linkedin from "../../public/linkedin.png";
import twitter from "../../public/twitter.png";

const SocialIcon = () => {
    return (
        <div className="absolute top-20 left-5">
            <div className="flex flex-col gap-5">
            <Image src={fb} width={28} height={28} alt="img"></Image>
            <Image src={linkedin} width={28} height={28} alt="img"></Image>
            <Image src={twitter} width={28} height={28} alt="img"></Image>
            <Image src={link} width={28} height={28} alt="img"></Image>
            </div>
        </div>
    );
};

export default SocialIcon;