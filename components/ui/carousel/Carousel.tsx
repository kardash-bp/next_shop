import { ReactNode } from 'react'
import Marquee from 'react-fast-marquee'
type Props = {
  children: ReactNode[]
}
const Carousel = ({ children }: Props) => {
  return (
    <Marquee pauseOnHover speed={50}>
      <div className='h-[320px] flex '>{children}</div>
    </Marquee>
  )
}

export default Carousel
{
  /* <div classNameName='h-[320px] flex flex-row relative'></div> */
}
