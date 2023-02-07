import { Product } from '@/framework/common/types/product'
import { ProductConnection } from '../schema'
import { fetchApi, getAllProductsQuery, normalizeProduct } from '../utils'

type ReturnType = { products: ProductConnection }

const getAllProducts = async (): Promise<Product[]> => {
  const { data } = await fetchApi<ReturnType>({
    query: getAllProductsQuery,
  })
  const products =
    data.products.edges.map(({ node: product }) => normalizeProduct(product)) ??
    []
  return products
}
export default getAllProducts
