import { useApiContext } from '@/context/context'
import Link from 'next/link'
import { Bag as Cart, Heart } from '../../icons'

const Usernav = () => {
  const itemsCount = 5
  const state = useApiContext()
  const openSidebar = () => {
    state.openSidebar()
  }
  return (
    <nav>
      <ul className='flex items-center'>
        <li className='flex space-x-3 mr-6 cursor-pointer transition duration-500 hover:text-accents-6'>
          <Cart onClick={openSidebar} />

          {itemsCount > 0 && <span className=''>{itemsCount}</span>}
        </li>
        <li>
          <Link
            href='/wishlist'
            className='cursor-pointer transition duration-500 hover:text-accents-6'
          >
            <Heart />
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Usernav
