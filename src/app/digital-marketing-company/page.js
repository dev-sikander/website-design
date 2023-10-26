"use client"

import Banner from '@/Components/Banner'
import { BudgetFriendly } from '@/Components/BudgetFriendly'
import { ClientReview } from '@/Components/ClientReview'
import { CreativeDigitalMarketing } from '@/Components/CreativeDigitalMarketing'
import DigitalBanner from '@/Components/DigitalBanner'
import { DigitalMarketing } from '@/Components/DigitalMarketing'
import { Digitalrequire } from '@/Components/Digitalrequire'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import React from 'react'

const page = () => {
    return (
        <>
            <DigitalBanner/>
            <DigitalMarketing />
            <CreativeDigitalMarketing />
            <Digitalrequire />
            <BudgetFriendly />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}


export default page