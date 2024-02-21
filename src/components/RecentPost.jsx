import React from 'react';
import Image from 'next/image';

const RecentPost = () => {
    return (
        <div className='w-4/5 mx-auto mt-5'>
            <div className='grid  grid-cols-3 md:grid-cols-4 gap-6'>

                <div className='col-span-3'>
                    <h1 className='text-xl font-semibold py-6'>Recent Posts</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>
                        <div className='relative h-[250px] '>
                            <Image src="/t2.jpg" alt="t2" fill className='rounded'/>
                        </div>
                        <div>
                            <span className='text-sm'>12/12/24</span>
                            <span className='pl-4 text-orange-600'>Culture</span>
                            <h1 className='py-3 font-semibold'>this nature place</h1>
                            <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                            <button className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>
                        <div className='relative h-[250px] '>
                            <Image src="/t2.jpg" alt="t2" fill />
                        </div>
                        <div>
                            <span>12/12/24</span>
                            <span>Culture</span>
                            <h1>this nature place</h1>
                            <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                            <button className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>
                        <div className='relative h-[250px] '>
                            <Image src="/t2.jpg" alt="t2" fill />
                        </div>
                        <div>
                            <span>12/12/24</span>
                            <span>Culture</span>
                            <h1>this nature place</h1>
                            <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                            <button className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-8'>
                        <div className='relative h-[250px] '>
                            <Image src="/t2.jpg" alt="t2" fill />
                        </div>
                        <div>
                            <span>12/12/24</span>
                            <span>Culture</span>
                            <h1>this nature place</h1>
                            <p>asdf loer aoer asdfoe asdlf ower aalsd aosdfsd lasdfoa sd asldfoasd asdf lasdf o asdlfo asdf asdf lasodf as asdfos alsdfweori asldfown vcz;lxko xczvlsdof alsdfowe aosdf asdof ajsf aowe asldfk ower olsjpqola; asodifajf aaoweri</p>
                            <button className="bg-gray-300 text-sm rounded px-2 py-1 hover:font-bold mt-4">Read more</button>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <h1 className='text-xl font-semibold py-6'>Most Popular</h1>
                    <div>
                        <button className=' rounded-lg px-2 py-1 bg-orange-400 text-white'>Culture</button>
                        <p>asdflk asdfasd asdfla ds asdfl </p>
                        <span>Jhon doe</span>
                        <span>12/12/12</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;