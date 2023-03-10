import { useApiContext } from '@/context/context'
import { FC, useEffect, useRef } from 'react'

interface Props {
  children: any
}

const Sidebar: FC<Props> = ({ children }) => {
  const state = useApiContext()
  const isOpen = state.isSidebarOpen

  return (
    <>
      {isOpen ? (
        <div className='fixed inset-0 overflow-hidden h-full z-50'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='absolute inset-0 bg-black bg-opacity-50 transition-opacity' />
            <section className='absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16 outline-none'>
              <div className='h-full md:w-screen md:max-w-md'>
                <div className='h-full flex flex-col text-base bg-accents-1 shadow-xl overflow-y-auto'>
                  {children}
                </div>
              </div>
            </section>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Sidebar
