import Image from 'next/image'
import React from 'react'

/////
import CustomImage from 'public/images/websiteimage/customwebsite.png'
import GredientBtn from './GredientBtn'
import SimpleBtnTwo from './SimpleBtnTwo'

export const Customwebsite = () => {
    return (
        <>
            <section className='bg-[#F1F1F1] pt-[90px] sm:pt-[140px] pb-[80px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>Custom Website Development</p>
                            <h2 className='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>Building Custom <span className='gilroy-b'>Websites</span> from Scratch.</h2>
                            <p className='text-[12px] sm:text-[15px] font-light text-center max-w-[995px] mx-auto'>In the digital age, your website is your brand's front door. At Web Design Hub, we're the architects of that door. We design and develop websites that don't just look good; they're SEO optimized, responsive and have the best user experience, all in one package.</p>
                            <Image src={CustomImage} className='mx-auto mt-12 lg:w-6/12' />

                            <div className="flex flex-wrap items-center justify-center sm:space-x-3 mt-12">
                                <GredientBtn BtnTxt="Start Live Chat" />
                                <SimpleBtnTwo simpleTxt="Book Demo" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
