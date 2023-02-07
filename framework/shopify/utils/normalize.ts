import { MoneyV2, ProductOption, ProductVariantConnection } from './../schema.d'
import { Product } from '@/framework/common/types/product'
import { ImageEdge, Product as ShopifyProduct, SelectedOption } from '../schema'

const normalizeProductImages = ({ edges }: { edges: ImageEdge[] }) =>
  edges.map(({ node: { originalSrc, ...rest } }) => ({
    url: `/images/${originalSrc}`,
    ...rest,
  }))

const normalizeProductPrice = ({ currencyCode, amount }: MoneyV2) => {
  return { value: +amount, currencyCode }
}
const normalizeProductOption = ({
  id,
  name: displayName,
  values,
}: ProductOption) => {
  const normalized = {
    id,
    displayName,
    values: values.map((v) =>
      displayName.match(/colou?r/gi) ? { color: v } : { label: v }
    ),
  }
  return normalized
}

const normalizeProductVariants = ({ edges }: ProductVariantConnection) => {
  return edges.map(({ node }) => {
    const { id, selectedOptions, sku, title, priceV2, compareAtPriceV2 } = node
    return {
      id,
      name: title,
      sku: sku ?? id,
      price: +priceV2.amount,
      listPrice: +compareAtPriceV2?.amount,
      requiresShipping: true,
      options: selectedOptions.map(({ name, value }: SelectedOption) =>
        normalizeProductOption({ id, name, values: [value] })
      ),
    }
  })
}

export function normalizeProduct(productNode: ShopifyProduct): Product {
  const {
    id,
    title: name,
    handle,
    vendor,
    description,
    priceRange,
    options,
    variants,
    images: imageConnection,
    ...rest
  } = productNode

  const product = {
    id,
    name,
    vendor,
    description,
    images: normalizeProductImages(imageConnection),
    price: normalizeProductPrice(priceRange.minVariantPrice),
    path: `/${handle}`,
    slug: handle.replace(/^\/+|\/+$/g, ''),
    options: options
      ? options
          .filter((o) => o.name !== 'Title')
          .map((o) => normalizeProductOption(o))
      : [],
    variants: variants ? normalizeProductVariants(variants) : [],
    ...rest,
  } as Product
  return product
}
