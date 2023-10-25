import Image from 'next/image'
import React from 'react'

///
import logo1 from 'public/images/webdesign/logo1.png'
import logo2 from 'public/images/webdesign/logo2.png'
import logo3 from 'public/images/webdesign/logo3.png'
import logo4 from 'public/images/webdesign/logo4.png'
import logo5 from 'public/images/webdesign/logo5.png'
import GredientBtn from './GredientBtn'
import SimpleBtn from './SimpleBtn'
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

                    <div className="col-span-12">
                        <div className="flex flex-wrap items-center justify-center sm:space-x-8 space-y-5 mt-10">
                            <Image src={logo1} />
                            <Image src={logo2} />
                            <Image src={logo3} />
                            <Image src={logo4} />
                            <Image src={logo5} />
                        </div>
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
