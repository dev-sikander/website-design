import Image from 'next/image'
import React from 'react'
import data from './data'


//
import CheckImage from 'public/images/websiteimage/checkImage.png'


export const Packages = () => {
    return (
        <>
            <section className="py-[100px] bg-[url('/images/websiteimage/packages-bg.png')] bg-cover bg-center">
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 mb-7 lg:mb-20">
                            <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>Web Development Packages</p>
                            <h2 className='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>Budget-Friendly <span className='gilroy-b'>Website Development</span> Company</h2>
                            <p className='text-[12px] sm:text-[15px] font-light text-center'>Our commitment to affordability means you can have a stunning, professionally designed website that perfectly suits your budget.</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        {data.map(packageItem => (
                            <div key={packageItem.id} className="card bg-[#1A1A1A] rounded-xl py-4 px-4">
                                <div className="px-6 py-4">
                                    <h5 className="text-[35px] gilroy-b text-white text-center border-b-2 border-b-[#707070] w-10/12 mx-auto pb-2">{packageItem.label}</h5>
                                    {packageItem.packages.map(subPackage => (
                                        <div key={subPackage.id} className="mb-2">
                                            <h5 className="font-sans text-center font-bold text-5xl text-[#45E2A1] my-10">
                                                {subPackage.discountedPrice} <sup className="font-light text-4xl text-white"><del>{subPackage.originalPrice}</del></sup>
                                            </h5>
                                            <div className="bg-[#212121] py-5 px-5 rounded-[15px] mt-6 md:mt-10">
                                                <ul className="overflow-y-auto h-64 mb-5 custom-scrollbar">
                                                    {subPackage.list.map(item => (
                                                        <li key={item} className='flex items-start space-x-2 leading-0 mb-3'>
                                                            <Image src={CheckImage} alt='check-image' className='mt-[6px]' />
                                                            <span className='text-white font-light'>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="flex items-center justify-between mt-10">
                                                    <div className="btnOne">
                                                        <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 md:px-10 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                                            Order Now
                                                        </a>
                                                    </div>
                                                    <div className="btnTwo">
                                                        <a href="tel:;" className='ml-1 inline-flex items-center justify-center px-5 py-2 border-2 border-white text-base font-medium rounded-[3px] text-white'>
                                                            (855) 888-8399
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
