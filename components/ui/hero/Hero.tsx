import Link from 'next/link'
import Container from '../container'
type Props = {
  headline: string
  description: string
}
const Hero = ({ headline, description }: Props) => {
  return (
    <div className='p-6 mx-auto grid grid-cols-1 py-32 md:grid-cols-2 md:gap-5'>
      <div>
        <h2 className='text-4xl leading-none font-bold md:text-5xl md:leading-12 md:font-bold lg:text-6xl lg:leading-15 lg:font-extrabold'>
          {headline}
        </h2>
      </div>
      <div>
        <p className='mt-5 leading-7 '>{description}</p>
        <Link href='/'>Read it here</Link>
      </div>
    </div>
  )
}

export default Hero
