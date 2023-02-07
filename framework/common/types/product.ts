export interface ProductImage {
  url: string
  alt?: string
}
export type ProductPrice = {
  value: number
  currencyCode: 'USD' | 'EUR' | string
}
export type ProductOptionValues = {
  label: string
  color?: string
}

export type ProductOption = {
  id: string
  displayName: string
  values: ProductOptionValues[]
}
export type ProductVariant = {
  id: string
  name: string
  options: ProductOption[]
}
export interface Product {
  id: string
  name: string
  description: string
  slug: string
  path: string
  images: ProductImage[]
  price: ProductPrice
  options: ProductOption[]
  variants: ProductVariant[]
}
