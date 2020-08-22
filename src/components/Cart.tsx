import { Box, Typography } from '@material-ui/core'
import React from 'react'
import CartItem from './CartItem'

const Cart: React.FC<{}> = () => {
  return (
    <>
      <Box marginRight={10} marginLeft={10}>
        <Box
          marginTop={6}
          marginBottom={6}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="caption">Carrinho</Typography>
        </Box>
        {[...new Array(5)].map(item => (
          <CartItem />
        ))}
      </Box>
    </>
  )
}

export default Cart
