import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

import BtnIcon from 'public/images/webdesign/btn-ico.png'


export default function Btn(props) {

    return (
        <>
            <Link href="#" className="bg-black text-[14px] py-[13px] px-6 rounded-[3px] text-[#45E2A1] font-medium flex items-center justify-center space-x-7 poppins mb-3 sm:mb-0">
                {props.BtnTxt}
                <Image src={BtnIcon} alt='live-chat' className='w-5 ml-2' />
            </Link>
        </>
    )
}
