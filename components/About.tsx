import Image from 'next/image'
import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'


export default function About() {

  const skills =[
    {
        profile:"/skills/php.png",
    },
    {
        profile:"/skills/php mysql.jpg.png",
    },
    {
        profile:"/skills/javascript.png",
    },
    {
        profile:"/skills/html css.png",
    },
    {
        profile:"/skills/node js.png",
    },
    {
        profile:"/skills/next js.png",
    },
    {
        profile:"/skills/mongodb.png",
    },
    {
        profile:"/skills/laravel.png",
    },
    {
        profile:"/skills/react js.png",
    },
    {
        profile:"/skills/wordpress.png",
    },
    {
        profile:"/skills/tailwind css.png",
    },
    {
        profile:"/skills/pngwing.com (11).png",
    },
    {
        profile:"/skills/pngwing.com (12).png",
    },
    {
        profile:"/skills/pngwing.com (13).png",
    },
    {
        profile:"/skills/pngwing.com (14).png",
    }

]

const words = ` I'm a versatile web developer proficient in HTML, CSS, Sass, npm, Next.js, PHP, Node.js, Laravel, and more. My expertise spans database management with MongoDB, SQL, and PostgreSQL. I craft responsive interfaces using Tailwind CSS and prioritize user experience. Skilled in Linux systems, I ensure robustness and security. Beyond tech, I excel in problem-solving and seamlessly integrating diverse technologies. Committed to staying updated with industry trends, I merge creativity with functionality to deliver high-quality projects that surpass expectations.,
`;

  return (
    <div className='bg-white px-4 lg:px-16 dark:bg-slate-950 p-6 grid w-screen grid-cols-1 lg:grid-cols-2'>
        <div className="relative bg-white dark:bg-slate-950 flex items-center justify-center mb-6">
            <div className="">
            <Image src="/skills/owen-2.png" width={500} height={100} alt='owen'/>
            </div>
        </div>
        <div className="bg-purple-950 rounded-2xl px-4 py-4 w-full flex flex-col">
            <div className="">
            <div className="mb-">
          <h1 className='mt-2 mb-3 font-bold text-3xl text-white '>About Me</h1>
          <p className='mt-1 mb-2 text-lg text-slate-500'>
          <TextGenerateEffect words={words} className='lg' />
</p>
        </div>
                <h1 className='mt-12 mb-3 font-bold text-2xl text-purple-950'>My skills</h1>
                <p className='mb-2 text-lg text-black'>Technologies i have been working with recently</p>
            </div>
            <div className="relative w-full gap-2 grid grid-cols-3 lg:grid-cols-6">
                {
                    skills.map((item,i)=>{
                        return(
                            <div className="relative rounded-xl overflow-hidden flex justify-center items-center px-1 py-1 bg-white border border-purple-950 dark:bg-white" key={i} >
                <Image src={item.profile} width={60} height={60} alt='title'/>
                </div>
                        )
                    })
                }
            </div>
        
        </div>
    </div>
  )
}
