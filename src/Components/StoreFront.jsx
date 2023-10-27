import Image from 'next/image'
import React from 'react'

////
import SalesOne from 'public/images/ecommerceimages/frontsale1.png'
import SalesTwo from 'public/images/ecommerceimages/frontsale2.png'
import SalesThree from 'public/images/ecommerceimages/frontsale3.png'
import SalesFour from 'public/images/ecommerceimages/frontsale4.png'



export const StoreFront = () => {
    return (
        <>
            <section className='py-[50px] sm:py-[100px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 mb-6 md:mb-12">
                            <h3 className='text-[25px] md:text-[40px] text-black leading-[1.3] text-center'>Crafting Digital <span className='gilroy-b'>Storefront</span> Dreams</h3>
                            <p className='text-[12px] sm:text-[15px] font-light text-center max-w-[995px] mx-auto'>See how we skillfully create digital stores that grab attention, turn visitors into customers. and also drive substantial sales growth.</p>
                        </div>
                        <div className="col-span-12 sm:col-span-7">
                            <Image className='h-full' src={SalesOne} />
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                            <Image className='h-full' src={SalesThree} />
                        </div>
                        <div className="col-span-6 sm:col-span-5">
                            <Image className='h-full' src={SalesTwo} />
                        </div>
                        <div className="col-span-12 sm:col-span-7">
                            <Image className='h-full' src={SalesFour} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
