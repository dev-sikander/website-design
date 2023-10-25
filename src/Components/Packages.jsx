import Image from 'next/image'
import React from 'react'


//
import CheckImage from 'public/images/websiteimage/checkImage.png'

export const Packages = () => {
    return (
        <>
            <section className="py-[100px] bg-[url('/images/websiteimage/packages-bg.png')] bg-cover bg-center">
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>Web Development Packages</p>
                            <h2 className='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>Budget-Friendly <span className='gilroy-b'>Website Development</span> Company</h2>
                            <p className='text-[12px] sm:text-[15px] font-light text-center'>Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.</p>
                        </div>
                        <div className="col-span-4">
                            <div className="card bg-[#1A1A1A] rouonded-lg py-4 px-2" >
                                <p className='text-[35px] gilroy-b text-white text-center border-b-2 border-b-[#707070] w-10/12 mx-auto pb-2'>Basic</p>
                                <h5 className='text-[45px] text-center mt-2'><span className='gilroy-b text-[#45E2A1]'>$244</span>
                                    <sup className='font-light text-white'>
                                        <del> $488</del>
                                    </sup>
                                </h5>

                                <ul className='bg-[#212121] py-4 px-5 rounded-[15px] mt-6'>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>E-Commerce Website Design and
                                            Development</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Theme Based Design</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Sliding Banner</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>3 Stock Photos</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>06 Revisions</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Hover Effects</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Up to 10 Products</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Up to 3 Categories</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Content/Inventory Management System</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Easy Product Search Bar</span>
                                    </li>
                                    <li className='flex items-start space-x-2 mb-4'>
                                        <Image src={CheckImage} alt='checkImage' className='mt-2 h-3 w-3' />
                                        <span className='text-white font-light text-[18px]'>Shopping Cart Integration</span>
                                    </li>
                                </ul>


                            </div>
                        </div>
                        <div className="col-span-4"></div>
                        <div className="col-span-4"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
