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
    let bannerProps = {
        title: "Creating <span class='font-extrabold text-[#45E2A1] gilroy-b'>100%</span> Original Custom Website Designs",
        content: "Frustrated by underperforming web designs? It's time for a change and we can help. Website Design Hub is trusted by businesses nationwide. We are a top-rated and affordable web design company, known for creating websites that are:",
        bg: "bg-[url(../public/images/websiteimage/websitebanner-bg.png)]",
        css: "mt-[-120px] pt-[160px]"
    }

    let customWebsite = {
        subtitle: "Custom Website Development",
        title: "Building Custom <span style='font-weight: 600' class='gilroy-b'>Websites</span> from Scratch.",
        desc: "In the digital age, your website is your brand's front door. At Web Design Hub, we're the architects of that door. We design and develop websites that don't just look good; they're SEO optimized, responsive and have the best user experience, all in one package.",
        image: "/images/websiteimage/customwebsite.png",
        css: "mx-auto mt-12"
    }
    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment />
            <Packages />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}
export default page