import React from 'react'
import Btn from './Btn'
import BtnTwo from './BtnTwo'

//////
import ResponsiveImage from 'public/images/websiteimage/responsiveImage.png'
import Image from 'next/image'

export const ResponsiveWebsiteDevelopment = ({ websiteImage }) => {
    const { title, image, desc, css, height, width } = websiteImage;

    return (
        <>
            <section className={`bg-[url('/images/ecommerceimages/commerce-bg.png')] bg-cover bg-center`}>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 items-center">
                        <div className="col-span-12 md:col-span-7 lg:col-span-5">
                            <div className="py-5 lg:py-20">
                                <div dangerouslySetInnerHTML={{
                                    __html: `<h1 class='text-[25px] md:text-[40px] text-white leading-[1.3] mb-4'>
                                    ${title}
                                </h1>`}} />
                                <p className='text-white text-[13px] sm:text-[15px] font-light max-w-[600px]'>{desc}</p>

                                <div className="flex items-center justify-center sm:justify-start flex-wrap sm:space-x-6 mt-10">
                                    <Btn BtnTxt="Start Live Chat" />
                                    <BtnTwo simpleTxt='Book Demo' />
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-5 lg:col-span-7 md:block hidden">
                            <Image src={image} alt='Responsive Image' width={600} height={600} className={`${css}`} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
