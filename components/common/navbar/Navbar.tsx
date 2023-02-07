import Container from '../../ui/container'
import Link from 'next/link'
import Usernav from './Usernav'

const Navbar = () => {
  return (
    <>
      <div className='mx-4 '>
        <div className='flex flex-1 items-center py-3 md:py-5'>
          <Link href='/' className='text-2xl font-bold'>
            NEXT_STORE
          </Link>
          <nav className='ml-6 space-x-6'>
            <Link href='/' className='nav-link'>
              All
            </Link>
            <Link href='/' className='nav-link'>
              Clothes
            </Link>
            <Link href='/' className='nav-link'>
              Accessories
            </Link>
            <Link href='/' className='nav-link'>
              Shoes
            </Link>
          </nav>
          <div className='flex flex-1 justify-end space-x-8'>
            <Usernav />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
