"use client"
import Link from "next/link"
import { useState } from "react"
import React from 'react'
import { TextGenerateEffectDemo } from "./HeroText"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import { TypewriterEffectSmooth } from "./ui/typewriter-effect"
import { CardStack } from "./ui/card-stack"
import { cn } from "@/lib/utils"

export default function Hero() {
    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Partners", path: "javascript:void(0)" },
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Team", path: "javascript:void(0)" },

    ]
    const words = ` Am Owen, I am a fullstack web developer,
`;


    return (
            <div className="hero md:pt-24 px-4 md:px-24 flex flex-col md:flex-row justify-between bg-orange-200 w-full md:justify-center md:h-[500px]  items-center md:gap-12 lg:gap:24">
              <div className="left md:w-2/3 py-4 px-4 md:px-8 md:mt-0 mt-16 w-full !text-white dark:!text-white">
              <TextGenerateEffect words={words} />

              </div>
              <div className="right py-4 w-full md:w-2/3 mt-6 md:mt-0   md:px-24">
              <CardStack items={CARDS}/>
              </div>
            {/* real */}


            </div>
        
    )
};

export const Highlight = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => {
    return (
      <span
        className={cn(
          "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
          className
        )}
      >
        {children}
      </span>
    );
  };
  
  const CARDS = [
    {
      id: 0,
      name: "David. Muhwezi",
      designation: "CEO Bond Tours & Travels",
      content: (
        <p>
          i Really Appreciate the effort towards my Company website, i Really love the faetures, the dashboard is really amazing 🙏
        </p>
      ),
    },
    {
      id: 1,
      name: "Elon Musk",
      designation: "Senior Shitposter",
      content: (
        <p>
          I dont like this Twitter thing,{" "}
          <Highlight>deleting it right away</Highlight> because yolo. Instead, I
          would like to call it <Highlight>X.com</Highlight> so that it can easily
          be confused with adult sites.
        </p>
      ),
    },
    {
      id: 2,
      name: "Tyler Durden",
      designation: "Manager Project Mayhem",
      content: (
        <p>
          The first rule of
          <Highlight>Fight Club</Highlight> is that you do not talk about fight
          club. The second rule of
          <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
          club.
        </p>
      ),
    },
  ];
