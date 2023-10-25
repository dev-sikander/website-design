import Link from 'next/link'
import React from 'react'

export default function SimpleBtnTwo(props) {
    return (
        <div>
            <Link href="#" className="ml-1 inline-flex items-center justify-center px-5 py-[5px] border-2 border-black text-base font-medium rounded-[3px] text-black mb-3 sm:mb-0" >
                {props.simpleTxt}
            </Link>
        </div>
    )
}
