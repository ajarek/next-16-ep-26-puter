import { instrumentSerif } from '@/app/fonts'
import ImageDescriber from '@/components/ImageDescriber'

const ImageDescriberPage = () => {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center '>
      <ImageDescriber />
    </div>
  )
}

export default ImageDescriberPage