import { Product } from '@/framework/common/types/product'
import { TChoices } from './productView/ProductView'

export const getVariant = (product: Product, choices: TChoices) =>
  product.variants.find((variant) =>
    variant.options.every((variantOption) => {
      const optionName = variantOption.displayName.toLocaleLowerCase()
      if (optionName in choices) {
        return optionName === 'size'
          ? choices[optionName] === variantOption.values[0].label
          : choices[optionName] === variantOption.values[0].color
      }
    })
  )
