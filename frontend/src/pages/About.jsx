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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque officia vero quidem porro ex iusto facere mollitia qui reprehenderit iste quas atque corporis, totam ipsam recusandae, incidunt ullam doloremque?</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam ipsam quisquam aut deleniti, nostrum fugiat illum praesentium pariatur facilis eos!</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt aliquid quam deserunt accusamus iste aliquam quibusdam accusantium earum veritatis voluptas!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div  className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality Assurance:</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quo rem quia laborum ipsa alias beatae qui voluptas doloribus? Quas.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Konsekuensi</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis ab alias deserunt commodi cumque adipisci praesentium unde ex expedita.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Customer Service</b>
            <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam provident quam repudiandae est inventore accusantium sit doloribus voluptate ut sequi?</p>
          </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
