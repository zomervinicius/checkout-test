import { useCartItemsContext } from '@/context/cart'
import { Box, CircularProgress, Typography } from '@material-ui/core'
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
    },
    alignCenter: {
      justifyContent: 'center',
      display: 'flex',
      padding: '30px 0 30px 0'
    }
  })
)

const Cart: React.FC<{}> = () => {
  const classes = useStyles()
  const { cartItems, loading, errorMessage } = useCartItemsContext()
  const title = (
    <Box marginTop={6} marginBottom={6} display="flex" justifyContent="center">
      <Typography variant="caption">Carrinho</Typography>
    </Box>
  )
  if (loading) {
    return (
      <>
        {title}
        <div className={classes.alignCenter}>
          <CircularProgress />
        </div>
      </>
    )
  }
  if (errorMessage) {
    return (
      <>
        {title}
        <Typography variant="body2" className={classes.alignCenter}>
          {errorMessage}
        </Typography>
      </>
    )
  }
  if (cartItems.length > 0) {
    return (
      <>
        <Box marginRight={10} marginLeft={10} marginBottom={16}>
          {title}
          <div className="flex flex-col lg:flex-row">
            <Box className={classes.cartItems}>
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
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
  if (cartItems.length === 0) {
    return (
      <>
        {title}
        <Typography variant="body2" className={classes.alignCenter}>
          Nenhum item adicionado ao carrinho
        </Typography>
      </>
    )
  }

  return <></>
}

export default Cart
