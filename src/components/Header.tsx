import logo from '@/assets/logo.png'
import { Box, Typography } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PersonIcon from '@material-ui/icons/Person'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import React from 'react'

const Header: React.FC<{}> = () => {
  return (
    <>
      <Box marginTop={4}>
        <div className="flex flex-col flex-center lg:justify-between lg:flex-row">
          <div className="flex justify-center items-center">
            <WhatsAppIcon fontSize="small" />
            <Box marginLeft={1} />
            <Typography variant="subtitle1">(47) 9999-9999</Typography>
          </div>
          <div className="flex justify-around mt-2">
            <div className="flex lg:mr-5 items-center">
              <PersonIcon fontSize="small" />
              <Box marginLeft={1} />
              <Typography variant="subtitle1">Arethusa</Typography>
            </div>
            <div className="flex items-center">
              <LocationOnIcon fontSize="small" />
              <Box marginLeft={1} />
              <Typography variant="subtitle1">
                Bom Retiro - Joinville, SC
              </Typography>
            </div>
          </div>
        </div>
      </Box>
      <Box marginTop={5}>
        <div className="flex justify-center">
          <img src={logo} alt="logo" />
        </div>
      </Box>
    </>
  )
}

export default Header
