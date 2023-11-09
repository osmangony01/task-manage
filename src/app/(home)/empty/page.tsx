'use client'

import Image from 'next/image';
import React from 'react';
import empty from "../../../../public/empty.png";

const EmptyPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center bg-white h-[calc(100vh-60px)]">
            <Image src={empty} width={526} height={298} alt="img" className='max-w-[526px]'></Image>
            <p className='text-[28px] font-bold'>This page is empty</p>
        </div>
    );
};

export default EmptyPage;