import Image from "next/image"
import { instrumentSerif } from "../fonts"
import Link from "next/link"

const ProductPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start py-12 px-4 space-y-8 w-full max-w-2xl mx-auto'>
      <h1
        className={`w-full max-w-3xl text-2xl md:text-4xl text-center font-serif   ${instrumentSerif.className}`}
      >
        Our Products
      </h1>
      <Link href="/product/image-describer" className="">
        <Image src="/describer.png" alt="Image Describer" width={406} height={459} className="w-full h-auto" />
      </Link>
    </div>
  )
}

export default ProductPage
