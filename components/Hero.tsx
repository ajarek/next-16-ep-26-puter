import { ArrowRight, Play } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"
import { instrumentSerif } from "@/app/fonts"
import Link from "next/link"

const Hero = () => {
  return (
    <div className='h-[calc(100vh-64px)] w-full mx-auto  container flex flex-col items-center justify-center p-4'>
      <div className='w-full flex flex-col items-center text-center gap-6'>
        <h1
          className={`w-full max-w-4xl text-3xl md:text-6xl font-serif   ${instrumentSerif.className}`}
        >
          Puter.js brings free, serverless, Cloud and AI directly to your
          frontend JavaScript with no backend code or API keys required.
        </h1>

        <p className='max-w-3xl  text-muted-foreground uppercase tracking-wider px-4'>
          The Puter.js AI feature allows you to integrate artificial
          intelligence capabilities into your applications.
        </p>

        <div className='flex gap-4'>
          <Link href='https://docs.puter.com/'>
            <Button className='cursor-pointer  uppercase tracking-wider rounded-lg'>
              Documentation <ArrowRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
          <Link href='https://docs.puter.com/playground/' target='_blank'>
            <Button
              variant='outline'
              className='cursor-pointer  uppercase tracking-wider rounded-lg'
            >
              Try the Playground <Play className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
