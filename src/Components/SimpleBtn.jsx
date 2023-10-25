import Link from 'next/link'
import React from 'react'

export default function SimpleBtn(props) {
    return (
        <div>
            <Link href="#" className="ml-1 inline-flex items-center justify-center px-5 py-[5px] border-2 border-white text-base font-medium rounded-[3px] text-white" >
                {props.simpleTxt}
            </Link>
        </div>
    )
}
