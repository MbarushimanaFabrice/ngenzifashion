import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className='text-2xl text-center pt-8 border-t'>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/> 
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col text-base text-left justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Welcome to Ngenzi Fashion, your premier destination for contemporary style and quality fashion. Since our establishment, we've been dedicated to bringing you the latest trends in men's, women's, and kids' fashion, all while maintaining the highest standards of quality and customer satisfaction.</p>
            <p>Our curated collection features everything from casual everyday wear to sophisticated formal attire, ensuring that every customer finds their perfect style match. We believe that fashion is a form of self-expression, and we're here to help you tell your unique story through clothing.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>To provide our customers with high-quality, trendy fashion items at accessible prices while delivering an exceptional shopping experience. We strive to be your trusted fashion partner, offering a seamless online shopping journey with reliable delivery and outstanding customer support.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div  className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Every product in our collection undergoes rigorous quality checks to ensure you receive only the finest materials and craftsmanship. We partner with trusted manufacturers who share our commitment to excellence.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Fast & Secure Delivery</b>
            <p className='text-gray-600'>We understand the excitement of receiving your new fashion items. That's why we offer fast, reliable shipping with secure packaging to ensure your purchases arrive in perfect condition, right to your doorstep.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer Service</b>
            <p className='text-gray-600'>Our dedicated customer support team is here to assist you with any questions about our products, sizing, orders, or returns. We're committed to making your shopping experience as smooth and enjoyable as possible.</p>
          </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
