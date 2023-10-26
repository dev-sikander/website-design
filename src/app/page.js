"use client"

import Banner from '@/Components/Banner'
import { ClientReview } from '@/Components/ClientReview'
import { Inovative } from '@/Components/Inovative'
import { Meeting } from '@/Components/Meeting'
import { Portfolio } from '@/Components/Portfolio'
import { ResponsiveWebsite } from '@/Components/ResponsiveWebsite'
import WebDesign from '@/Components/WebDesignAgency'
import React from 'react'

const page = () => {
  return (
    <>
      <Banner />
      <WebDesign />
      <ResponsiveWebsite />
      <Portfolio />
      <ClientReview />
      <Inovative />
      <Meeting />
    </>
  )
}
export default page