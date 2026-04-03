import { instrumentSerif } from "../fonts"
import Link from "next/link"

const AboutPage = () => {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-start md:justify-center gap-4 p-4 '>
      <h1
        className={`w-full max-w-3xl text-2xl md:text-4xl text-center font-serif   ${instrumentSerif.className}`}
      >
        AboutPage
      </h1>
      <p className='text-justify text-xl max-w-2xl '>
        Puter.js provides free, serverless frontend access to cloud and AI
        services (storage, databases, Claude, GPT, Gemini, NoSQL) with no
        backend code or API keys required. - Accessible via @heyputer/puter.js
        npm module or a single script tag, enabling frontend code to use hosting
        API, auth, OCR, networking, text-to-speech, and more. - Cost model:
        developers pay nothing because each user covers their own cloud and AI
        usage; scalable to any number of users while remaining free for the
        developer. - Built on Puter, an open-source cloud operating system
        focused on privacy, with no tracking or data collection/monetization.
      </p>

      <Link
        href='https://docs.puter.com/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-center text-xl max-w-2xl underline text-primary'
      >
        Documentation...
      </Link>
    </div>
  )
}

export default AboutPage
