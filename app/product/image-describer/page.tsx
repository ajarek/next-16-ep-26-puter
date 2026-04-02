import { instrumentSerif } from '@/app/fonts'
import Examples from '@/components/Examples'

const ImageDescriber = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-12 px-4 space-y-8 w-full max-w-2xl mx-auto'>
        <h1 className={`w-full max-w-3xl text-2xl md:text-4xl text-center font-serif   ${instrumentSerif.className}`}>
       Image Describer
      </h1>
      <Examples />
    </div>
  )
}

export default ImageDescriber