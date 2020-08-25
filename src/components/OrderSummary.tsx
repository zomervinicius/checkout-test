import { useOrderSummaryContext } from '@/context/orderSummary'
import { Box, Divider } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import { useRouter } from 'next/router'
import React from 'react'
import formatNumber from '../utils/formatNumber'

const useStyles = makeStyles(() =>
  createStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  })
)

const OrderSummary: React.FC<{}> = () => {
  const router = useRouter()
  const classes = useStyles()
  const {
    itemsTotalQuantity,
    itemsTotalPrice,
    totalDiscountPrice,
    totalOrderPrice,
    errorMessage,
    loading
  } = useOrderSummaryContext()
  return (
    <Card>
      <Box style={{ padding: '15px 20px 5px 20px' }}>
        <Typography className={classes.title} variant="h6" gutterBottom>
          RESUMO DO PEDIDO
        </Typography>
      </Box>
      <Divider component="li" />
      <CardContent style={{ padding: '20px 20px 20px 20px' }}>
        <div className="flex justify-between">
          <Typography variant="subtitle2">Itens</Typography>
          <Typography variant="body2">{itemsTotalQuantity()}</Typography>
        </div>
        <div className="flex justify-between mt-3">
          <Typography variant="subtitle2">Total em produtos</Typography>
          <Typography variant="body2">
            {formatNumber(itemsTotalPrice())}
          </Typography>
        </div>
        <div className="flex justify-between mt-3">
          <Typography variant="subtitle2">Descontos</Typography>
          <Typography variant="body2">
            {formatNumber(totalDiscountPrice())}
          </Typography>
        </div>
        <div className="flex justify-between mt-5 mb-5">
          <Typography variant="h5">Total</Typography>
          <Typography variant="h5">
            {formatNumber(totalOrderPrice())}
          </Typography>
        </div>

        {loading && <span>Carregando políticas comerciais...</span>}
        <CardActions style={{ padding: 0, marginTop: '10px' }}>
          {errorMessage || (
            <Button
              variant="contained"
              color="primary"
              disabled={loading}
              fullWidth
              style={{ padding: 10, borderRadius: 0 }}
              onClick={() => router.push('/checkout')}
            >
              Finalizar a compra
            </Button>
          )}
        </CardActions>
      </CardContent>
    </Card>
  )
}

export default OrderSummary
