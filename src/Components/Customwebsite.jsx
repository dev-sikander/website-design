import Image from 'next/image'
import React from 'react'

/////
import CustomImage from 'public/images/websiteimage/customwebsite.png'
import GredientBtn from './GredientBtn'
import SimpleBtnTwo from './SimpleBtnTwo'

export const Customwebsite = ({ customContent }) => {
    const { subtitle, title, desc, image, css } = customContent;

    return (
        <>
            <section className='bg-[#F1F1F1] pt-[90px] sm:pt-[140px] pb-[80px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <p className='text-[12px] sm:text-[15px] font-light text-center mb-2 sm:mb-0'>{subtitle}</p>
                            <div dangerouslySetInnerHTML={{
                                __html: `<h2 class='text-[25px] sm:text-[40px] font-light leading-[1.2] text-center mb-2'>
                    ${title}
                </h2>`
                            }} />
                            <p className='text-[12px] sm:text-[15px] font-light text-center max-w-[995px] mx-auto'>{desc}</p>
                            <Image src={image} className='mx-auto mt-12' width={900} height={500} />

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
