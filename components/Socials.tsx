import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Socials() {
    const Social=[
        {
            title:"github",
            image:"/socials/github.png",
            url:"https://github.com/OWENALBERT606"
        },
        {
            title:"linkedin",
            image:"/socials/linkedin.png",
            url:"www.linkedin.com/in/ngobi-owen-albert-62939030b"
        },
        {
            title:"whatsapp",
            image:"/socials/whatsapp.png",
            url:"https://wa.me/256709704128"
        },
        {
            title:"email",
            image:"/socials/email.png",
            url:"mailto:ngowen66@gmail.com"
        },
        {
            title:"phone",
            image:"/socials/phone.png",
            url:"tel:256709704128"
        },
        {
            title:"gumrod",
            image:"/socials/pngwing.com (9).png",
            url:""
        },
        {
            title:"youtube",
            image:"/socials/pngwing.com (10).png",
            url:"https://www.youtube.com/@PROJECTSWITHOWEN"
        }
    ]
  return (
    <div className='rounded-xl z-50 px-2 py-2 w-16 bg-purple-700 bg-opacity-25 fixed top-24 right-4 lg:right-8 flex flex-col items-center gap-3 justify-center'>
        {
            Social.map((item,i)=>{
                return(
                    <Link key={i} href={item.url} target='_blank'>
                        <Image src={item.image} width={60} height={60} alt={item.title} className='w-[40px] h-[40px]' />
                    </Link>
                )
            })
        }
    
    </div>
  )
}
