import Image from "next/image"
import { instrumentSerif } from "../fonts"
import Link from "next/link"

const ProductPage = () => {
  return (
    <div className='min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center gap-4'>
      <h1
        className={`w-full max-w-3xl text-2xl md:text-4xl text-center font-serif   ${instrumentSerif.className}`}
      >
        Our Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link href="/product/image-describer" className="">
          <Image src="/describer.png" alt="Image Describer" width={406} height={459} className="w-full h-auto border-2 border-muted rounded-lg" />
        </Link>
        <Link href="/product/ai-chat" className="">
          <Image src="/ai-chat.png" alt="AI Chat" width={406} height={459} className="w-full h-auto border border-muted rounded-lg" />
        </Link>
      </div>
    </div>
  )
}

export default ProductPage
