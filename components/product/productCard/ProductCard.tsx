import { Product } from '@/framework/common/types/product'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  product: Product
  variant?: 'simple' | 'slim'
}
const ProductCard = ({ product, variant = 'simple' }: Props) => {
  return (
    <Link
      href={`/products/${product.slug}`}
      className='relative flex justify-center items-center bg-pattern bg-repeat-space'
    >
      {variant === 'slim' ? (
        <div className='px-16 py-4 flex justify-center items-center'>
          <div className='absolute z-20 bg-black opacity-75'>
            <h3 className=' text-white p-3 font-bold text-xl'>
              {product.name}
            </h3>
          </div>{' '}
          {product.images && (
            <Image
              className=''
              alt={product.name ?? 'Product'}
              src={product.images[0].url ?? '/product-image-placeholder.svg'}
              height={320}
              width={320}
              quality='85'
            />
          )}
        </div>
      ) : (
        <>
          {' '}
          <div className='absolute top-0 left-0 text-3xl tracking-tight bg-white'>
            <h3 className='font-bold leading-relaxed'>
              <span className='py-4 px-6'>{product?.name}</span>
            </h3>
            <span className='pb-4 pt-2 px-6 font-semibold text-base'>
              {product.price.value} {product.price.currencyCode}
            </span>
          </div>
          {product.images && (
            <Image
              className='max-h-full z-30 transition hover:duration-200  hover:scale-[1.15]'
              alt={product.name ?? 'Product'}
              src={product.images[0].url ?? '/product-image-placeholder.svg'}
              height={540}
              width={540}
              quality='85'
            />
          )}
        </>
      )}
    </Link>
  )
}

export default ProductCard
