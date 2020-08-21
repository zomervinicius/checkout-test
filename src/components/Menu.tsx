import { Box, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import React from 'react'
import SearchField from './SearchField'

const Menu: React.FC<{}> = () => {
  return (
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
          <Typography variant="h6">R$ 62,50</Typography>
        </div>
      </div>
    </Box>
  )
}

export default Menu
