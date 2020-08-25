import { useOrderSummaryContext } from '@/context/orderSummary'
import formatNumber from '@/utils/formatNumber'
import { Box, Typography } from '@material-ui/core'
import LocalOfferIcon from '@material-ui/icons/LocalOffer'
import LocalShippingIcon from '@material-ui/icons/LocalShipping'
import MenuIcon from '@material-ui/icons/Menu'
import PaymentIcon from '@material-ui/icons/Payment'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import SearchField from './SearchField'

const Menu: React.FC<{}> = () => {
  const { itemsTotalPrice } = useOrderSummaryContext()
  return (
    <>
      <Box marginTop={4}>
        <div className="flex flex-col flex-center lg:justify-between lg:flex-row">
          <div className="flex justify-around mt-2">
            <div className="flex lg:mr-5 items-center">
              <MenuIcon color="secondary" fontSize="default" />
              <Box marginLeft={1} />
              <Typography variant="h6">SETORES</Typography>
            </div>
            <div className="flex ">
              <Box marginLeft={3} />
              <Typography variant="h6">OFERTAS</Typography>
            </div>
          </div>
          <div className="flex justify-center">
            <SearchField />
          </div>
          <div className="flex justify-center items-center">
            <ShoppingCartIcon color="primary" fontSize="default" />
            <Box marginLeft={1} />
            <Typography variant="h6">
              {formatNumber(itemsTotalPrice())}
            </Typography>
          </div>
        </div>
      </Box>
      <Box marginTop={6}>
        <div className="flex flex-col flex-center lg:justify-around lg:flex-row">
          <div className="flex lg:mr-5 items-center justify-center">
            <LocalShippingIcon color="secondary" fontSize="small" />
            <Box marginLeft={2} />
            <Typography variant="body1">
              Delivery apenas para Joinville
            </Typography>
          </div>
          <div className="flex lg:mr-5 items-center justify-center my-5 kg:my-0">
            <LocalOfferIcon color="secondary" fontSize="small" />
            <Box marginLeft={2} />
            <Typography variant="body1">
              Desconto de 10% nas compras acima de R$200,00
            </Typography>
          </div>
          <div className="flex lg:mr-5 items-center justify-center">
            <PaymentIcon color="secondary" fontSize="small" />
            <Box marginLeft={2} />
            <Typography variant="body1">Pague em até 12x no cartão</Typography>
          </div>
        </div>
      </Box>
    </>
  )
}

export default Menu
