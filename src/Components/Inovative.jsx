import Image from 'next/image'
import React from 'react'

////
import Inovative1 from 'public/images/inovstiveimages/inovative1.png'
import Inovative2 from 'public/images/inovstiveimages/inovative2.png'
import Inovative3 from 'public/images/inovstiveimages/inovative3.png'
import Inovative4 from 'public/images/inovstiveimages/inovative4.png'
import Inovative5 from 'public/images/inovstiveimages/inovative5.png'
import PhoneIco from 'public/images/phone-ico.svg'
import MailIco from 'public/images/mail-ico.svg'


export const Inovative = () => {
    return (
        <>
            <section className='py-[40px] sm:py-[80px]'>
                <div className="px-[10px] sm:px-[30px]">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <h3 className='text-[25px] md:text-[40px] font-light sm:mb-3'><span className='gilroy-b'>Innovative</span> Services & Exceptional <span className='gilroy-b'>Results</span></h3>
                            <p className='text-black text-[13px] sm:text-[15px] font-light max-w-[700px]'>Our commitment to delivering innovative solutions and consistently surpassing expectations
                                make Web Design Hub an exclusive choice</p>

                            <div className="flex flex-wra xl:flex-nowrap justify-around space-y-6 space-x-4 mt-10">
                                <div className='mt-6'>
                                    <Image src={Inovative1} />
                                    <p className='text-[20px] gilroy text-center mt-3 font-light'>Creative Excellence</p>
                                </div>
                                <div>
                                    <Image src={Inovative2} />
                                    <p className='text-[20px] gilroy text-center mt-3 font-light'>Customized Solutions</p>
                                </div>
                                <div>
                                    <Image src={Inovative3} />
                                    <p className='text-[20px] gilroy text-center mt-3 font-light'>Responsive Design</p>
                                </div>
                                <div>
                                    <Image src={Inovative4} />
                                    <p className='text-[20px] gilroy text-center mt-3 font-light'>On-Time Delivery</p>
                                </div>
                                <div>
                                    <Image src={Inovative5} />
                                    <p className='text-[20px] gilroy text-center mt-3 font-light'>Affordable Pricing</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="bg-black flex flex-wrap items-center sm:justify-center sm:space-x-4 lg:space-x-0 space-y-7 lg:space-y-0 lg:justify-between rounded-2xl md:rounded-full px-[30px] py-[10px] mt-16">
                                <div className='mt-6 lg:mt-0'>
                                    <p className='text-white text-[17px] md:text-[20px] gilroy font-light leading-[1.3]'>you are just a call away from <br className='sm:block hidden' />
                                        securing a spectacular design</p>
                                </div>
                                <div>
                                    <a href="tel:;" className='flex items-center space-x-2'>
                                        <div className="icon">
                                            <Image src={PhoneIco} className='w-10' />
                                        </div>
                                        <div className="telTxt">
                                            <p className='text-white text-[19px] gilroy font-light'>call us (toll free) <br />
                                                <span className='text-[#45E2A1]'> (855) 888-8399</span>
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div>
                                    <a href="mailto:;" className='flex items-center space-x-2'>
                                        <div className="icon">
                                            <Image src={MailIco} className='w-10' />
                                        </div>
                                        <div className="telTxt">
                                            <p className='text-white text-[19px] gilroy font-light leading-[1]'>discuss your ideas <br />
                                                info@brandname.co
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
