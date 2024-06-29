"use client"
import { useState } from 'react'
import ModeBtn from './ModeBtn'

export default function NavBar (){

    const [state, setState] = useState(false)

    // Replace javascript:void(0) paths with your paths
    const navigation = [
        { title: "Home", path: "/" },
        { title: "My services", path: "#services" },
        { title: "My projects", path: "/projects" },
        { title: "Contact me", path: "#contacts" },
        { title: "Market Place", path: "javascript:void(0)" }
    ]

    return (
        <div className="fixed top-0 left-0 right-0 z-50">
            <nav className="bg-purple-950 fixed dark:bg-black border-b w-full md:static md:text-sm md:border-none">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-6 justify-between">
            
                <div className="flex items-center justify-between gap-12 px-4 py-3">
                    <div className="">
                    <a href="javascript:void(0)">
                        <img
                            src="/computer-program-coding-screen.jpg"
                            width={60}
                            height={25}
                            alt="owen"
                        />
                    </a>
                    </div>
                    <ModeBtn/>
                    <div className="md:hidden">
                        <button className="text-white hover:text-purple-700"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>
                    <ul className="justify-end items-center space-y-6 md:flex md:space-x-6 md:space-y-0 text-xl bg-purple- text-white font-semibold dark:bg-black">
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <li key={idx} className="text-white hover:text-indigo-600">
                                        <a href={item.path} className="block">
                                            {item.title}
                                        </a>
                                    </li>
                                )
                            })
                        }
                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>
                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            <li>
                                <a href="javascript:void(0)" className="block py-2 px-4 font-medium text-center bg-white text-purple-800 hover:bg-purple-700 hover:text-white active:shadow-none rounded-xl dark:bg-purple-800 dark:hover:bg-purple-900 dark:text-white shadow md:inline">
                                    Github
                                </a>
                            </li>
                            <li>
                            </li>
                        </div>
                    </ul>
                </div>
                
            </div>
            
        </nav>
        </div>
    )
}