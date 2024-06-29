import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Mywork() {
    const projects = [
        {
            title:"Couriers/Logistics",
            description:"Logistics Website",
            image:"/projects/couriers.png",
            url:"https://couriers-app.vercel.app/",
        },
        {
            title:"BOND TOURS & TRAVEL",
            description:"Tours & Travel website",
            image:"/projects/bond.jpg",
            url:"https://bondtoursandtravel.com/",
        },
        {
            title:"INVOICE GENERATOR",
            description:"Invoicing system",
            image:"/projects/invoicer app.jpg",
            url:"https://owen-invoice-generator-app.vercel.app/",
        },
        {
            title:"AGRI-VENDING",
            description:"Agri multi-vending system",
            image:"/projects/agri-vender.png",
            url:"https://agric-vender.vercel.app/dashboard",
        },
        {
            title:"JOB LISTING SITE",
            description:"jobs posting website",
            image:"/projects/jobs.png",
            url:"https://career-link-hub.vercel.app",
        },
       
        {
            title:"VIDEO COMFERENCING",
            description:"Video chart site",
            image:"/projects/video comferencing.png",
            url:"https://owe-video-comferencing.vercel.app",
        },
        {
            title:"GREORENE TEC SERVICES LTD",
            description:"Construction Website",
            image:"/projects/3-devices-black.png",
            url:"https://greorene-technical-services-ltd.vercel.app/",
        },
        {
            title:"CROWN WORSHIPPERS MINISTRIES",
            description:"Ministry Website",
            image:"/projects/crown.jpg",
            url:"https://crown-worshipers-ministries.vercel.app/",
        },
        {
            title:"TULIPS PRE-SCHOOL",
            description:"School Website",
            image:"/projects/tulips.jpg",
            url:"https://tulips-pre-school.vercel.app/",
        }
    ]
  return (
   <div className="flex flex-col justify-center items-center">
     <div id='projects' className='ourprojects dark:bg-slate-950 w-screen py-4 px-4 lg:px-12 flex flex-col' >
    <div className="header py-2 flex justify-start items-start">
        <h1  className='lg:px-56 px-4 font-bold text-purple-900 dark:text-white mb-3 mt-2 text-4xl'>My Projects</h1>
    </div>
    <div className="mb-6 mt-2 text-center"><p className='text-xl text-purple-950 dark:text-white font-bold'>Look at some of my work and recent projects</p></div>
    <div className="projects grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {
        projects.map((project)=>{
            return(
                <>
                <div className="dark:bg-slate-500 project gap-4 rounded-lg h-56">

                <div className="card flex gap-2 flex-col justify-center items-center text-center w-full h-full">
                <div className="icon"></div>
                <div className="title text-white">
                <h1 className='font-bold text-2xl' >{project.title}</h1>
                </div>
                <div className="content flex flex-col gap-2  text-white">
                <h3 className='text-lg ' >{project.description}</h3>
                <Link className='ring-1 transition duration-700 ease-in-out ring-slate-200 rounded-full px-2 py-2 hover:bg-purple-900 hover:text-white text-white-900' target='_blank' href={project.url}>Visit Site</Link>
</div>
                </div>
               <div className="overlay w-12">
        <Image src={project.image} fill alt={project.title}/>

</div>
</div>
                </>
            )
        })
    }
    </div>
</div>
<div className=" py-6 mb-6">
    <Link href="/projects" className='rounded-full text-white hover:bg-slate-950 px-4 py-2 bg-purple-950'>More Projects</Link>
</div>
   </div>
  )
}
