import { Box, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import CartItem from './CartItem'
import OrderSummary from './OrderSummary'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cartItems: {
      width: '100%',
      [theme.breakpoints.up('lg')]: {
        width: '75%'
      }
    },
    orderSummary: {
      width: '100%',
      marginTop: 30,
      [theme.breakpoints.up('lg')]: {
        width: '25%',
        height: 'max-content',
        marginTop: 0
      }
    }
  })
)

const Cart: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <>
      <Box marginRight={10} marginLeft={10} marginBottom={16}>
        <Box
          marginTop={6}
          marginBottom={6}
          display="flex"
          justifyContent="center"
        >
          <Typography variant="caption">Carrinho</Typography>
        </Box>
        <div className="flex flex-col lg:flex-row">
          <Box className={classes.cartItems}>
            {[...new Array(1)].map(item => (
              <CartItem key={item} />
            ))}
          </Box>
          <Box className={classes.orderSummary}>
            <OrderSummary />
          </Box>
        </div>
      </Box>
    </>
  )
}

export default Cart
