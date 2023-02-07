import React, {
  Children,
  isValidElement,
  useState,
  ReactNode,
  cloneElement,
} from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
const ProductSlider = ({ children }: { children: ReactNode }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <div className='relative w-full h-full overflow-y-hidden'>
        <div
          ref={sliderRef}
          className='keen-slider h-full transition-opacity bg-violet'
        >
          {Children.map(children, (child) => {
            if (isValidElement(child)) {
              return cloneElement(
                child as React.ReactElement<{ className: string }>,
                { className: 'keen-slider__slide imageContainer' }
              )
            }
            return child
          })}
        </div>
        {loaded && instanceRef.current && (
          <>
            {currentSlide !== 0 && (
              <button
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                className='absolute w-12 h-12 bg-left-cursor bg-cover top-1/2 left-2 transform -translate-y-1/2 opacity-80'
              />
            )}
            {currentSlide < Children.toArray(children).length - 1 && (
              <button
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                className='absolute w-12 h-12 bg-right-cursor bg-cover top-1/2 right-2 transform -translate-y-1/2 opacity-80'
              />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default ProductSlider
