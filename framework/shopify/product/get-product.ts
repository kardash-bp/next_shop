import { Product } from '../schema'
import { Product as TProduct } from '../../common/types/product'
import { fetchApi, getProductQuery, normalizeProduct } from '../utils'
import { TVariables } from '../utils/fetch-api'

type TFetch = {
  productByHandle: Product
}
const getProduct = async (variables: TVariables): Promise<TProduct | null> => {
  const { data } = await fetchApi<TFetch>({ query: getProductQuery, variables })
  if (!data.productByHandle) {
    return null
  }
  return normalizeProduct(data.productByHandle)
}

export default getProduct
