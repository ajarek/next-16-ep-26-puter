import { ArrowRight, Play } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { instrumentSerif } from '@/app/fonts'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-[calc(100vh-64px)] w-full mx-auto  container flex flex-col items-center justify-start p-4'>
      <div className='w-full flex flex-col items-center text-center gap-6'>
        <h1 className={`w-full max-w-3xl text-4xl md:text-8xl font-serif   ${instrumentSerif.className}`}>
         Build beautiful spaces at the speed of thought with 3D Plans        </h1>

        <p className='max-w-3xl  text-muted-foreground uppercase tracking-wider px-4'>
          3D Plans is an AI-first design environment that helps you visualize, render, and ship architectural projects faster  than ever.
        </p>

        <div className='flex gap-4'>
          <Link href='#upload'>
            <Button className='cursor-pointer  uppercase tracking-wider rounded-lg'>Start Building <ArrowRight className='ml-2 h-4 w-4' /></Button>
          </Link>
          <Link href='#upload'>
            <Button variant='outline' className='cursor-pointer  uppercase tracking-wider rounded-lg'>Watch Demo <Play className='ml-2 h-4 w-4' /></Button>
          </Link>
        </div>

       
      </div>
    </div>
  )
}

export default Hero