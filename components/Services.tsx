
"use client"
import React from 'react'
import { PinContainer } from './ui/3d-pin'

export default function Services() {

  const services = [
    {
      "title": "Web Development",
      "description": "I provide web development services to craft dynamic, user-friendly websites and applications, ensuring a strong online presence and seamless user experiences."
    },
    {
      "title": "UI/UX Design",
      "description": "I specialize in UI/UX design, focusing on creating intuitive, visually pleasing interfaces that enhance user experiences and drive engagement."
    },
    {
      "title": "E-commerce Development",
      "description": "E-commerce development is my forte. I build online stores, integrating payment gateways and product databases, to create secure and user-friendly shopping experiences."
    },
    {
      "title": "Search Engine Optimization",
      "description": "SEO is crucial for online visibility. I optimize websites to rank higher on search engines, increasing organic traffic and improving discoverability."
    },
    {
      "title": "Website Maintenance",
      "description": "Website maintenance is essential for optimal performance. I provide ongoing services, including updates, security enhancements, and content management, to ensure a seamless and secure online presence."
    },
    {
      "title": "Content Management Systems (CMS)",
      "description": "CMS (Content Management Systems) streamline website content updates. I work with various CMS platforms like WordPress, Drupal, and Joomla, empowering clients to manage their web content efficiently."
    },
    {
      "title": "Web Hosting and Domain Setup",
      "description": "Web hosting and domain setup are foundational to a website's existence. I assist clients in selecting the right hosting service and acquiring domain names, ensuring a strong online presence."
    }
  ]

  return (
    <div id='services' className="w-screen px-4 sm:px-8 lg:px-12 py-6 space-x-2 bg-white dark:bg-slate-950">
      <div className="w-full lg:px-56 px-4">
        <h1 className='font-bold text-purple-900 dark:text-white mb-6 mt-2 text-4xl'>My Services</h1>
      </div>
      <div className="mb-6 mt-2 text-center">
        <p className='text-xl text-purple-950 dark:text-white font-bold'>Services that I can offer you</p>
      </div>
      <div className='w-full'>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
              <div key={i}  onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'rotateX(70deg) translateZ(0)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'rotateX(0deg) translateZ(0)';
              }} className='bg-purple-950 hover:translate-z-0 hover:rotate-x-[70deg]    dark:border hover:bg-slate-950 transition delay-700 duration-300 ease-in-out shadow-xl dark:bg-slate-500 rounded-xl px-4 py-3'>
              <div className="text-xl text-center mb-2 text-white dark:text-purple-950 font-semibold">{service.title}</div>
              <div className="text-gray-400 dark:text-white">
                <p>{service.description}</p>
              </div>
            </div>
    

          ))}
        </div>
      </div>
    </div>
  )
}
