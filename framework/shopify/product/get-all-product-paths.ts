import { Product } from '@/framework/common/types/product'
import { ProductConnection } from '../schema'
import { fetchApi, getAllProductsQuery, normalizeProduct } from '../utils'
import getAllProductsPathsQuery from '../utils/queries/get-all-products-paths'

type ReturnType = { products: Pick<Product, 'slug'>[] }

const getAllProductsPaths = async (): Promise<ReturnType> => {
  const { data } = await fetchApi<{ products: ProductConnection }>({
    query: getAllProductsPathsQuery,
  })
  const products =
    data.products.edges.map(({ node: { handle } }) => ({ slug: handle })) ?? []
  return { products }
}
export default getAllProductsPaths
