// "use client"

// import {  MoonIcon, Sun } from 'lucide-react'
// import React, { useState } from 'react'
// import { useTheme } from 'next-themes'


// // const ThemeChanger = () => {
    
// //     // console.log(theme);
// // }


// export default function ModeBtn() {
//     const { setTheme } = useTheme()
// //   const {mode, setMode } = useState("light");
//   return (
//     <button className='dark:bg-black py-3'>
//        {
//         mode==='dark'?(<Sun className='text-white font-2xl' onClick={()=>setTheme('light')}/>):
//         (<MoonIcon className='text-white font-2xl'onClick={()=>setTheme('dark')}/>)
//        }

//     </button>
//   )
// }

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ModeBtn() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

