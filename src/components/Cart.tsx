import { useCartItemsContext } from '@/context/cart'
import { Box, CircularProgress, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React from 'react'
import CartItem from './CartItem'
import FormDialog from './FormDialog'
import OrderSummary from './OrderSummary'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cartItems: {
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '70%'
      },
      [theme.breakpoints.only('md')]: {
        marginRight: '40px'
      }
    },
    orderSummary: {
      width: '100%',
      marginTop: 30,
      [theme.breakpoints.up('md')]: {
        width: '30%',
        height: 'max-content',
        marginTop: 0
      }
    },
    alignCenter: {
      justifyContent: 'center',
      display: 'flex',
      padding: '30px 0 30px 0'
    },
    containerMargins: {
      marginRight: theme.spacing(10),
      marginLeft: theme.spacing(10),
      marginBottom: theme.spacing(16),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(5),
        marginLeft: theme.spacing(5),
        marginBottom: theme.spacing(8)
      }
    }
  })
)

const Cart: React.FC<{}> = () => {
  const classes = useStyles()
  const { cartItems, loading, errorMessage } = useCartItemsContext()
  const cartItemsList = Object.values(cartItems)
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
  if (cartItemsList.length > 0) {
    return (
      <>
        <Box className={classes.containerMargins}>
          <div className="my-6 md:my-12 mb-10 md:mb-20">
            {title}
            <FormDialog />
            <div className="flex flex-col md:flex-row">
              <Box className={classes.cartItems}>
                {cartItemsList.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </Box>
              <Box className={classes.orderSummary}>
                <OrderSummary />
              </Box>
            </div>
          </div>
        </Box>
      </>
    )
  }
  if (cartItemsList.length === 0) {
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
