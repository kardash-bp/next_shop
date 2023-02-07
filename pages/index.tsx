import Head from 'next/head'
import { InferGetStaticPropsType } from 'next'
import { getAllProducts } from '@/framework/shopify/product'
import { Layout } from '@/components/common'
import { ProductCard } from '@/components/product'
import { Carousel, Grid, Hero } from '@/components/ui'

export async function getStaticProps() {
  const products = await getAllProducts()
  return {
    props: { products },
    revalidate: 4 * 60 * 60,
  }
}
export default function Home({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>eCommerc Next App</title>
        <meta name='description' content='ECommerce app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Grid layout={'A'}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
      <Hero
        headline='Tart halvah fruitcake I love liquorice'
        description='Cheesecake cheesecake jelly-o bonbon oat cake. Lemon drops ice cream cookie bear claw dragée marzipan cheesecake. Ice cream gingerbread jelly soufflé pudding. Chocolate bar toffee pudding cake candy chocolate bar fruitcake. '
      />
      <Carousel>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} variant='slim' />
        ))}
      </Carousel>
    </>
  )
}
Home.Layout = Layout
