import { Layout } from '@/components/common'
import { ProductView } from '@/components/product'
import { Container } from '@/components/ui'
import { getAllProductsPaths, getProduct } from '@/framework/shopify/product'

import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next'
import React from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  const { products } = await getAllProductsPaths()
  return {
    paths: products.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
export const getStaticProps = async ({
  params,
}: GetStaticPropsContext<{ slug: string }>) => {
  const product = await getProduct({ slug: params!.slug })
  return { props: { product } }
}

const ProductSlug = ({
  product,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return product && <ProductView product={product} />
}
ProductSlug.Layout = Layout
export default ProductSlug
