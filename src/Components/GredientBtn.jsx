import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import LiveChat from 'public/images/live-chat.svg'


export default function GredientBtn(props) {

    return (
        <>
            <Link href="#" className="bg-gradient-to-l from-[#45E2A1] to-[#237456] text-[14px] py-2 px-5 rounded-[3px] text-black font-medium flex items-center justify-center poppins mb-3 sm:mb-0">
                {props.BtnTxt}
                <Image src={LiveChat} alt='live-chat' className='w-5 ml-2' />
            </Link>
        </>
    )
}
