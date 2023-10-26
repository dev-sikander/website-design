"use client"

import Banner from '@/Components/Banner'
import { ClientReview } from '@/Components/ClientReview'
import { Customwebsite } from '@/Components/Customwebsite'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import React from 'react'

const page = () => {
    return (
        <>
            <Banner />
            <Customwebsite />
            <ResponsiveWebsiteDevelopment />
            <Packages />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}
export default page