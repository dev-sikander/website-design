import Image from 'next/image'
import React from 'react'

///
import logo1 from 'public/images/webdesign/logo1.png'
import logo2 from 'public/images/webdesign/logo2.png'
import logo3 from 'public/images/webdesign/logo3.png'
import logo4 from 'public/images/webdesign/logo4.png'
import logo5 from 'public/images/webdesign/logo5.png'
import GredientBtn from './GredientBtn'
import SimpleBtnTwo from './SimpleBtnTwo'

export default function WebDesign() {
    return (
        <section className='py-[70px] sm:py-[130px] bg-[#F1F1F1]'>
            <div className="px-[10px] sm:px-[30px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="col-span-12 lg:col-span-6">
                                <h3 className='text-[25px] md:text-[40px] font-light leading-[1.3] mb-3'>Our <span className='gilroy-b'>Web Design Agency</span> Takes Center Stage in Every Field of Design</h3>
                                <p className='text-[15px] md:text-[17px] font-light max-w-[700px]'>Web Design Hub has an In-house team of devoted professional web designers and developers,
                                    who are dedicated to delivering top-tier websites for businesses.
                                    Our website solutions include:</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-12 md:grid-cols-5 gap-y-5 md:gap-y-0 sm:gap-x-4 mt-10 flex justify-between ">
                    <div className="col-span-12 sm:col-span-6 md:col-span-1">
                        <div className="relative group">
                            <Image src={logo1} alt='logos' className='sm:w-full mx-auto' />
                            <div className="txt bg-[#000000]/40 h-full absolute top-0 left-0 flex items-center justify-center rounded-full w-[100%] hidden group-hover:block transition-transform ease-in-out duration-1000 opacity-0 group-hover:opacity-100">
                                <h6 className='text-[20px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12]'>Logo
                                    Design</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1">
                        <div className="relative group">
                            <Image src={logo2} alt='logos' className='sm:w-full mx-auto' />
                            <div className="txt bg-[#000000]/40 h-full absolute top-0 left-0 flex items-center justify-center rounded-full w-[100%] hidden group-hover:block transition-transform ease-in-out duration-1000 opacity-0 group-hover:opacity-100">
                                <h6 className='text-[20px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12]'>Apps</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1">
                        <div className="relative group">
                            <Image src={logo3} alt='logos' className='sm:w-full mx-auto' />
                            <div className="txt bg-[#000000]/40 h-full absolute top-0 left-0 flex items-center justify-center rounded-full w-[100%] hidden group-hover:block transition-transform ease-in-out duration-1000 opacity-0 group-hover:opacity-100">
                                <h6 className='text-[20px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12]'>Website</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1">
                        <div className="relative group">
                            <Image src={logo4} alt='logos' className='sm:w-full mx-auto' />
                            <div className="txt bg-[#000000]/40 h-full absolute top-0 left-0 flex items-center justify-center rounded-full w-[100%] hidden group-hover:block transition-transform ease-in-out duration-1000 opacity-0 group-hover:opacity-100">
                                <h6 className='text-[20px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12]'>SEO</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-6 md:col-span-1">
                        <div className="relative group">
                            <Image src={logo5} alt='logos' className='sm:w-full mx-auto' />
                            <div className="txt bg-[#000000]/40 h-full absolute top-0 left-0 flex items-center justify-center rounded-full w-[100%] hidden group-hover:block transition-transform ease-in-out duration-1000 opacity-0 group-hover:opacity-100">
                                <h6 className='text-[20px] gilroy-b text-center text-white leading-[8] lg:leading-[10] xl:leading-[12]'>Logo
                                    Design</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex flex-wrap justify-center sm:justify-start items-center space-x-2 sm:space-x-4 mt-14">
                            <GredientBtn BtnTxt="Start Live Chat" />
                            <SimpleBtnTwo simpleTxt="Book Demo" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
