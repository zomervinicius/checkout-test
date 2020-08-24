import {
  Box,
  Card,
  CardContent,
  Divider,
  IconButton,
  List,
  ListItem,
  Typography
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AddIcon from '@material-ui/icons/Add'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import DeleteIcon from '@material-ui/icons/Delete'
import RemoveIcon from '@material-ui/icons/Remove'
import React from 'react'
import { CartItems } from '../context/cart'
import formatNumber from '../utils/formatNumber'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 700,
      backgroundColor: theme.palette.background.paper,
      padding: 0
    },
    firstSection: { width: '60%' },
    secondSection: {
      width: '20%',
      [theme.breakpoints.down('lg')]: {
        marginTop: 20,
        width: '90%'
      }
    },
    thirdSection: {
      width: '20%',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('lg')]: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center'
      }
    },
    sectionsMargin: {
      width: 'inherit',
      margin: '25px 10px 15px 10px',
      [theme.breakpoints.down('lg')]: {
        flexDirection: 'column'
      }
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 1
    }
  })
)

interface CartItemProps {
  item: CartItems
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const classes = useStyles()
  return (
    <List className={classes.root}>
      <ListItem
        style={{
          padding: 0
        }}
      >
        <Box className={classes.sectionsMargin} display="flex">
          <Box className={classes.firstSection} display="flex">
            <img
              src={item.url_imagem}
              alt="product_img"
              style={{
                height: 100,
                width: 100
              }}
            />
            <Box marginRight={8} />
            <div className="flex flex-col">
              <Typography variant="subtitle2">{item.nome}</Typography>
              <Box marginTop={2} />
              <Typography
                variant="body1"
                style={{
                  color: '#9E9E9E'
                }}
              >
                {`SKU ${item.sku}`}
              </Typography>
              <Box marginTop={2} />
              <div className="flex items-center">
                <IconButton
                  aria-label="add_observation"
                  size="small"
                  style={{ padding: 0 }}
                >
                  <ChatBubbleOutlineIcon fontSize="small" color="primary" />
                  <Box marginLeft={1} />
                  <Typography variant="body1" color="primary">
                    Adicionar observação
                  </Typography>
                </IconButton>
              </div>
            </div>
          </Box>
          <Box className={classes.secondSection} marginLeft={4}>
            <Card>
              <CardContent
                style={{
                  padding: 0
                }}
              >
                <div className={classes.controls}>
                  <IconButton aria-label="decrease_quantity" size="small">
                    <RemoveIcon color="secondary" />
                  </IconButton>
                  <Typography variant="body2">{item.quantidade}</Typography>
                  <IconButton aria-label="increase_quantity" size="small">
                    <AddIcon color="primary" />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Box>
          <Box className={classes.thirdSection} display="flex">
            <div className="flex justify-between lg:flex-col items-center">
              <div className="mr-8 lg:mr-0">
                <Typography variant="body2">
                  {formatNumber(item.valor_unitario)}
                </Typography>
              </div>
              <IconButton aria-label="increase_quantity" size="small">
                <DeleteIcon color="primary" fontSize="small" />
              </IconButton>
            </div>
          </Box>
        </Box>
      </ListItem>
      <Divider component="li" />
    </List>
  )
}

export default CartItem
