import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';

/////
import Logo from 'public/images/clientimages/card_logos.png'
import Particle from 'public/images/clientimages/card_particle.png'
import Person from 'public/images/clientimages/person1.png'

export const ClientReview = () => {

    // slider start

    var settings = {
        dots: true,
        arrows: true,
        centerMode: true,
        centerPadding: '250px',
        variableWidth: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '5px',
                    dots: false,
                }
            }
        ]
    };

    // slider end 

    return (
        <section className="bg-[url('/images/clientimages/client-bg.png')] bg-cover bg-center py-[70px] lg:py-[120px] relative">
            <div className="px-[10px] sm:px-[30px] mb-[30px]">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 lg:col-span-5">
                        <h3 className='text-[25px] md:text-[40px] text-white'>Our Client`s Review</h3>
                        <p className='text-white text-[15px] font-light'>At Web Design Hub, our designers are committed to excellence in every aspect
                            of design, from logos to web, mobile apps, and illustrations.</p>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="col-span-12 mt-5">
                    <Slider {...settings} className='settingSlider mt-8'>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[62vh] flex items-start flex-col justify-between relative'>
                                    <Image src={Logo} />
                                    <div className="txt mt-8">
                                        <Image src={Particle} className='absolute bottom-[-12%] right-[35px] max-h-[340px] object-contain' />
                                        <div className="flex items-center space-x-2">
                                            <Image src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                            Read Customer Story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[62vh] flex items-start flex-col justify-between relative'>
                                    <Image src={Logo} />
                                    <div className="txt mt-8">
                                        <Image src={Particle} className='absolute bottom-[-12%] right-[35px] max-h-[340px] object-contain' />
                                        <div className="flex items-center space-x-2">
                                            <Image src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                            Read Customer Story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[62vh] flex items-start flex-col justify-between relative'>
                                    <Image src={Logo} />
                                    <div className="txt mt-8">
                                        <Image src={Particle} className='absolute bottom-[-12%] right-[35px] max-h-[340px] object-contain' />
                                        <div className="flex items-center space-x-2">
                                            <Image src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                            Read Customer Story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-[#1B1C1D] sm:flex items-center px-[20px] py-[40px] sm:max-h-[536px]">
                                <div className='w-full sm:w-[38%] h-[62vh] flex items-start flex-col justify-between relative'>
                                    <Image src={Logo} />
                                    <div className="txt mt-8">
                                        <Image src={Particle} className='absolute bottom-[-12%] right-[35px] max-h-[340px] object-contain' />
                                        <div className="flex items-center space-x-2">
                                            <Image src={Person} />
                                            <div className="cardContent">
                                                <p className='leading-[1] text-white text-[14px]'>Naomi Kasbekar</p>
                                                <p className='text-white text-[14px]'>Co-Founder- <span className='text-[#45E2A1]'>Bliss Travel</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='sm:w-[62%] bg-[#222323] sm:min-h-[518px] px-4 sm:px-10 py-4 flex justify-center flex-col'>
                                    <p className='text-[#B8B8B8] text-[12px] sm:text-[17px] lg:text-[19px] font-light'><span className='text-white'>"Always available, extremely knowledgeable, and a tremendous "can-do" attitude.</span> Our company was on a tight timeline and strict budget to create a first-class mobile interpretation app, and Will was the perfect partner. His guidance and advice was invaluable in producing that app which easily exceeded my expectations."</p>
                                    <div className="btn mt-8 lg:mt-12">
                                        <a href="javascript:;" className='bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-3 px-5 rounded-[3px] text-black font-medium poppins mb-3 sm:mb-0 d-block'>
                                            Read Customer Story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                    <hr class="border-y-2 rounded-full border-white mt-[90px] w-[70%] mx-auto lg:block hidden"></hr>
                </div>
            </div>
        </section>
    )
}
