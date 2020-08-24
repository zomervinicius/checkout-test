import api from '@/services/api'
import constate from 'constate'
import { useEffect, useState } from 'react'

export interface CartItems {
  id: number
  nome: string
  quantidade: number
  sku: string
  url_imagem: string
  valor_unitario: number
}

export interface UseCartItemsState {
  cartItems: CartItems[]
  setCartItems: Function
  loading: boolean
  errorMessage: string
}

function useCartItems(): UseCartItemsState {
  const [cartItems, setCartItems] = useState<CartItems[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [errorMessage, setErrorMessage] = useState<string>('')

  async function getCartItems(): Promise<void> {
    setLoading(true)
    try {
      const response = await api({
        method: 'GET',
        url: `/carrinho`
      })
      const { data } = response
      setCartItems(data)
    } catch (error) {
      setErrorMessage(
        'Não foi possível obter os itens, tente novamente mais tarde'
      )
    }
    setLoading(false)
  }

  useEffect(() => {
    getCartItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    cartItems,
    setCartItems,
    loading,
    errorMessage
  }
}

const [CartItemsProvider, useCartItemsContext] = constate(useCartItems)

export { CartItemsProvider, useCartItemsContext }
