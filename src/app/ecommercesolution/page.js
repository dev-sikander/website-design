"use client"
import Banner from '@/Components/Banner'
import { ClientReview } from '@/Components/ClientReview'
import { Customwebsite } from '@/Components/Customwebsite'
import { DigitalMarketing } from '@/Components/DigitalMarketing'
import EcommerceBanner from '@/Components/EcommerceBanner'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { Packages } from '@/Components/Packages'
import { ResponsiveWebsiteDevelopment } from '@/Components/ResponsiveWebsiteDevelopment'
import { StoreFront } from '@/Components/StoreFront'
import React from 'react'

////
// import aboutBannerImage from 'public/images/ecommerceimages/banner.png';

const page = () => {
    let bannerProps = {
        title: "Revamping Retail Space With <span class='font-extrabold text-[#45E2A1] gilroy-b'>Ecommerce</span> Solutions",
        content: "As an Ecommerce Solutions Company, we excel in revamping websites across various ecommerce platforms, crafting tailored solutions that drive success on Shopify, WooCommerce, Magento, and more.",
        bg: "bg-[url(../public/images/ecommerceimages/banner.png)]",
        css: "mt-[-100px] pt-[160px]"
    }

    let customWebsite = {
        subtitle: "Ecommerce Website Solutions",
        title: "Ecommerce <span style='font-weight: 600' class='gilroy-b'>Web Development</span> Experts",
        desc: "Our team focuses on creating custom ecommerce solutions to make your online presence better, increase sales, and improve shopping experience on your website.",
        image: "/images/websiteimage/customwebsite.png",
        css: "mx-auto mt-12"
    }

    let websiteImage = {
        title: "The Masters of <span style='font-weight: 600' class='gilroy-b'>eCommerce Website</span> Design",
        desc: "At Web Design Hub,we design ecommerce websites that not only look fantastic but also generate results that distinguish your company in the market.",
        image: "/images/ecommerceimages/ecommerce.png",
        css: "mt-[-77px] w-9/12 mx-auto"
    }

    return (
        <>
            <Banner content={bannerProps} />
            <Customwebsite customContent={customWebsite} />
            <ResponsiveWebsiteDevelopment websiteImage={websiteImage} />
            <StoreFront />
            <Packages />
            <ClientReview />
            <Inovative />
            <Meeting />
        </>
    )
}

export default page
