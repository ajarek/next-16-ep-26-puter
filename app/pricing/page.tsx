import React from "react"
import { instrumentSerif } from "../fonts"
import Link from "next/link"

const PricingPage = () => {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start md:justify-center gap-4 p-4 '>
      <h1
        className={`w-full max-w-3xl text-2xl md:text-4xl text-center font-serif   ${instrumentSerif.className}`}
      >
        Free, Serverless, Cloud and AI
      </h1>
      <p className='text-center text-xl max-w-2xl'>
        Build and monetize Cloud and AI applications in seconds Directly from
        your frontend code
      </p>
      <div>
        <h2>No Servers•No Billing•No API Keys</h2>
      </div>
      <Link
        href='https://docs.puter.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-center text-xl max-w-2xl underline text-primary'
      >
       Start Building in Seconds
      </Link>
      <Link
        href='https://docs.puter.com/playground/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-center text-xl max-w-2xl underline text-primary'
      >
       Try the Playground
      </Link>
    </div>
  )
}

export default PricingPage
