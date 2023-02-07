import { CartSidebar } from '@/components/cart'
import { Footer } from '@/components/common'
import Navbar from '@/components/common/navbar/Navbar'
import { Sidebar } from '@/components/ui'
import ContextProvider from '@/context/context'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ElementType, ReactNode } from 'react'

const Noop = ({ children }: { children: ReactNode }): ReactNode => (
  <>{children}</>
)

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: { Layout: ElementType } }) {
  const Layout = Component.Layout ?? Noop

  return (
    <ContextProvider>
      <Layout>
        <Navbar />
        <Sidebar>
          <CartSidebar />
        </Sidebar>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ContextProvider>
  )
}
