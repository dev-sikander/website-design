"use client"

import { Customwebsite } from '@/Components/Customwebsite'
import Header from '@/Components/Header'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import { WebsiteBanner } from '@/Components/WebsiteBanner'
import React from 'react'

const page = () => {
    return (
        <>
            <Header />
            <WebsiteBanner />
            <Customwebsite />
            <ResponsiveWebsiteDevelopment />
            <Packages />
        </>
    )
}

export default page
