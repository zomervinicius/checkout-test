import { CartItems, useCartItemsContext } from '@/context/cart'
import { useDialogContext } from '@/context/dialog'
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
import formatNumber from '../utils/formatNumber'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 700,
      backgroundColor: theme.palette.background.paper,
      padding: 0
    },
    firstSection: {
      width: '60%',
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      }
    },
    secondSection: {
      width: '20%',
      [theme.breakpoints.down('xs')]: {
        marginTop: 20,
        width: '90%'
      }
    },
    thirdSection: {
      width: '20%',
      justifyContent: 'flex-end',
      [theme.breakpoints.down('xs')]: {
        marginTop: 20,
        width: '100%',
        justifyContent: 'center'
      }
    },
    sectionsMargin: {
      width: 'inherit',
      margin: '25px 10px 15px 10px',
      [theme.breakpoints.down('xs')]: {
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
  const { setOpen, setActiveEditItem } = useDialogContext()
  const {
    increaseItemQuantity,
    decreaseItemQuantity,
    deleteItem
  } = useCartItemsContext()

  const handleAddObservation = (itemId: number): void => {
    setActiveEditItem(itemId)
    setOpen(true)
  }
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
                  onClick={() =>
                    !item.observacao && handleAddObservation(item.id)
                  }
                >
                  <ChatBubbleOutlineIcon fontSize="small" color="primary" />
                  <Box marginLeft={1} />
                  {item.observacao ? (
                    <Typography variant="body1" color="secondary">
                      Deixei um comentário nesse produto
                    </Typography>
                  ) : (
                    <Typography variant="body1" color="primary">
                      Adicionar observação
                    </Typography>
                  )}
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
                  <IconButton
                    aria-label="decrease_quantity"
                    size="small"
                    onClick={() => decreaseItemQuantity(item.id)}
                  >
                    <RemoveIcon color="secondary" />
                  </IconButton>
                  <Typography variant="body2">{item.quantidade}</Typography>
                  <IconButton
                    aria-label="increase_quantity"
                    size="small"
                    onClick={() => increaseItemQuantity(item.id)}
                  >
                    <AddIcon color="primary" />
                  </IconButton>
                </div>
              </CardContent>
            </Card>
          </Box>
          <Box className={classes.thirdSection} display="flex">
            <div className="flex justify-between sm:flex-col items-center">
              <div className="mr-8 md:mr-0">
                <Typography variant="body2">
                  {formatNumber(item.valor_unitario * item.quantidade)}
                </Typography>
              </div>
              <IconButton
                aria-label="increase_quantity"
                size="small"
                onClick={() => deleteItem(item.id)}
              >
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
