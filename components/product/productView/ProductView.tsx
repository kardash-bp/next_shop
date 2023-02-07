import cn from 'classnames'
import { FC, useState } from 'react'
import s from './productView.module.css'
import { Button, Container } from '@/components/ui'
import Image from 'next/image'
import { useApiContext } from '@/context/context'
import { Product } from '@/framework/common/types/product'
import ProductSlider from '../productSlider/ProductSlider'
import Swatch from '../swatch'
import { getVariant } from '../helpers'
interface Props {
  product: Product
}
type KeyChoices = 'color' | 'size' | string
export type TChoices = {
  [T in KeyChoices]: string
}
const ProductView: FC<Props> = ({ product }) => {
  const [isLoading, setIsLoading] = useState(false)
  const [choices, setChoices] = useState<TChoices>({})
  const { openSidebar } = useApiContext()

  const variant = getVariant(product, choices)
  const addToCart = async () => {
    try {
      const item = {
        productId: String(product.id),
        variantId: String(variant ? variant.id : product.variants[0].id),
        quantity: 1,
      }
      console.log(item)
      // setIsLoading(true)
      // await addItem(item)
      // setIsLoading(false)
      openSidebar()
    } catch {
      setIsLoading(false)
    }
  }
  return (
    <Container>
      <div className='relative h-full grid items-start gap-8 grid-cols-1 lg:grid-cols-12 overflow-x-hidden fit mb-5'>
        <div className={cn(s.productDisplay, 'fit')}>
          <div className={s.nameBox}>
            <h1 className={s.name}>{product.name}</h1>
            <div className={s.price}>
              {product.price.value}
              {` `}
              {product.price.currencyCode}
            </div>
          </div>

          <ProductSlider>
            {product.images.map((image) => (
              <div key={image.url}>
                <Image
                  className='w-full h-auto max-h-full object-cover'
                  src={image.url}
                  alt={image.alt! || 'product'}
                  width={1050}
                  height={1050}
                  quality='85'
                />
              </div>
            ))}
          </ProductSlider>
        </div>
        <div className={s.sidebar}>
          <section>
            {product.options.map((option, index) => (
              <div key={index} className='pb-4'>
                <h2 className='uppercase font-medium'>{option.displayName}</h2>
                <div className='flex flex-row py-4'>
                  {option.values.map((optValue, index) => {
                    const activeKey = option.displayName.toLowerCase()
                    const activeChoice =
                      Object.keys(choices).length && choices[activeKey]
                    return (
                      <Swatch
                        key={index}
                        label={optValue.label}
                        color={optValue.color}
                        variant={option.displayName}
                        active={
                          Object.values(optValue)[0] === activeChoice &&
                          activeChoice !== undefined
                        }
                        onClick={() => {
                          if (optValue.label) {
                            setChoices((prev) => ({
                              ...prev,
                              size: optValue.label.toLowerCase(),
                            }))
                          }
                          if (optValue.color) {
                            setChoices((prev) => ({
                              ...prev,
                              color: optValue.color!,
                            }))
                          }
                        }}
                      />
                    )
                  })}
                </div>
              </div>
            ))}
            <div className='pb-16 break-words w-full max-w-xl text-lg'>
              {product.description}
            </div>
          </section>
          <div>
            <Button
              className='bg-secondary text-accents-1 cursor-pointer inline-flex px-10 rounded-sm leading-6  transition ease-in-out shadow-sm font-semibold text-center justify-center uppercase py-4 border border-transparent items-center focus:outline-none hover:bg-accents-0 hover:text-primary hover:border hover:border-secondary'
              onClick={addToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default ProductView
