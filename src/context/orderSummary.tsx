/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/camelcase */
import { useCartItemsContext } from '@/context/cart'
import api from '@/services/api'
import constate from 'constate'
import { normalize, schema } from 'normalizr'
import { useEffect, useState } from 'react'

export interface DiscountRules {
  desconto_percentual: number
  tipo: string
  valor: number
}

export interface UseOrderSummaryState {
  discountRules: Record<string, DiscountRules>
  setDiscountRules: Function
  loading: boolean
  errorMessage: string
  itemsTotalQuantity: Function
  itemsTotalPrice: Function
  totalDiscountPrice: Function
  totalOrderPrice: Function
}

function useOrderSummary(): UseOrderSummaryState {
  const [discountRules, setDiscountRules] = useState<
    Record<string, DiscountRules>
  >({})
  const [loading, setLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const { cartItems } = useCartItemsContext()

  const cartItemsList = Object.values(cartItems)

  const itemsTotalQuantity = (): number => {
    const total = cartItemsList.reduce((sum, { quantidade }) => {
      sum += quantidade
      return sum
    }, 0)
    return total
  }

  const itemsTotalPrice = (): number => {
    const total = cartItemsList.reduce(
      (sum, { quantidade, valor_unitario }) => {
        sum += quantidade * valor_unitario
        return sum
      },
      0
    )
    return total
  }

  const totalDiscountPrice = (): number => {
    let discountPrice = 0
    const itemsQuantity = itemsTotalQuantity()
    const itemsPrice = itemsTotalPrice()
    // check if two discount rules apply
    if (
      itemsPrice > discountRules?.valor_minimo?.valor &&
      itemsQuantity > discountRules?.quantidade_itens_minima?.valor
    ) {
      // if first discount percentage is bigger than second
      if (
        discountRules.valor_minimo.desconto_percentual >
        discountRules.quantidade_itens_minima.desconto_percentual
      ) {
        // apply only first rule
        discountPrice +=
          itemsPrice * (discountRules.valor_minimo.desconto_percentual / 100)
        // apply only second rule
      } else {
        discountPrice +=
          itemsPrice *
          (discountRules.quantidade_itens_minima.desconto_percentual / 100)
      }
      // if only first rule discount rule apply
    } else if (itemsPrice > discountRules?.valor_minimo?.valor) {
      discountPrice +=
        itemsPrice * (discountRules.valor_minimo.desconto_percentual / 100)
      // if only second discount rule apply
    } else if (itemsQuantity > discountRules?.quantidade_itens_minima?.valor) {
      discountPrice +=
        itemsPrice *
        (discountRules.quantidade_itens_minima.desconto_percentual / 100)
    }

    return discountPrice
  }

  const totalOrderPrice = (): number => itemsTotalPrice() - totalDiscountPrice()

  async function getOrderSummary(): Promise<void> {
    setLoading(true)
    try {
      const response = await api({
        method: 'GET',
        url: `/politicas-comerciais`
      })
      const { data } = response
      const discountRulesSchema = new schema.Entity(
        'discountRules',
        {},
        {
          idAttribute: 'tipo'
        }
      )
      const { entities } = normalize(data, [discountRulesSchema])
      setDiscountRules(entities.discountRules)
    } catch (error) {
      setErrorMessage(
        'Não foi possível obter as políticas comerciais, tente novamente mais tarde'
      )
    }
    setLoading(false)
  }

  useEffect(() => {
    getOrderSummary()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    discountRules,
    setDiscountRules,
    loading,
    errorMessage,
    itemsTotalQuantity,
    itemsTotalPrice,
    totalDiscountPrice,
    totalOrderPrice
  }
}

const [OrderSummaryProvider, useOrderSummaryContext] = constate(useOrderSummary)

export { OrderSummaryProvider, useOrderSummaryContext }
