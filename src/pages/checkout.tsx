import Header from '@/components/Header'
import Menu from '@/components/Menu'
import { useCartItemsContext } from '@/context/cart'
import { Box, CircularProgress } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { Alert } from '@material-ui/lab'
import Link from 'next/link'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(4, 0, 2)
  }
}))
const Checkout: React.FC<{}> = () => {
  const classes = useStyles()
  const { register, handleSubmit, control, errors } = useForm()
  const {
    checkout,
    loading,
    checkoutErrorMessage,
    orderId
  } = useCartItemsContext()
  const removeSpecialCharFromString = (str: string): string => {
    let string = str
    string = string.replace(/_/g, '')
    string = string.replace(/-/g, '')
    return string
  }
  if (orderId) {
    return (
      <>
        <Header />
        <Menu />
        <Box mt={15} />
        <Container component="main" maxWidth="xs">
          <div className={classes.paper}>
            <Alert severity="success">
              <Typography variant="body2">
                Pedido criado com sucesso!
              </Typography>
              <Typography variant="body1">
                Para criar um novo pedido, clique <a href="/">aqui</a>
              </Typography>
            </Alert>
          </div>
        </Container>
      </>
    )
  }
  return (
    <>
      <Header />
      <Menu />
      <Box mt={7} />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Endereço de entrega
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(data => checkout(data))}
          >
            <Controller
              rules={{
                required: true
              }}
              as={
                <TextField
                  fullWidth
                  label="Estado"
                  autoFocus
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  error={errors.estado}
                  required
                />
              }
              control={control}
              name="estado"
            />

            <Controller
              rules={{
                required: true
              }}
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                  fullWidth
                  label="Cidade"
                  type="city"
                  required
                  id="city"
                  error={errors.cidade}
                />
              }
              control={control}
              name="cidade"
            />

            <Controller
              rules={{
                required: true
              }}
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                  fullWidth
                  type="address"
                  id="address"
                  required
                  label="Endereço"
                  error={errors.endereco}
                />
              }
              control={control}
              name="endereco"
            />

            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Cartão de crédito
              </Typography>
            </div>
            <Controller
              control={control}
              name="cartaoCredito"
              rules={{
                required: true,
                minLength: {
                  value: 16,
                  message: 'Preencha o campo corretamente'
                }
              }}
              render={({ onChange, onBlur, value }) => (
                <InputMask
                  mask="9999-9999-9999-9999"
                  value={value}
                  onBlur={onBlur}
                  onChange={e => {
                    onChange(removeSpecialCharFromString(e.target.value))
                  }}
                >
                  {() => (
                    <TextField
                      error={errors.cartaoCredito}
                      variant="outlined"
                      margin="normal"
                      inputRef={register}
                      required
                      fullWidth
                      label="Número cartão de crédito"
                    />
                  )}
                </InputMask>
              )}
            />
            {errors.cartaoCredito && errors.cartaoCredito.type === 'minLength' && (
              <Typography variant="body1" color="error">
                {errors.cartaoCredito.message}
              </Typography>
            )}
            <Controller
              render={({ onChange, onBlur, value }) => (
                <InputMask
                  mask="999"
                  value={value}
                  onChange={e => {
                    onChange(removeSpecialCharFromString(e.target.value))
                  }}
                  onBlur={onBlur}
                >
                  {() => (
                    <TextField
                      variant="outlined"
                      margin="normal"
                      error={errors.codigoCartao}
                      required
                      fullWidth
                      label="Código de segurança"
                    />
                  )}
                </InputMask>
              )}
              control={control}
              name="codigoCartao"
              required
              rules={{
                required: true,
                minLength: {
                  value: 3,
                  message: 'Preencha o campo corretamente'
                }
              }}
            />
            {errors.codigoCartao && errors.codigoCartao.type === 'minLength' && (
              <Typography variant="body1" color="error">
                {errors.codigoCartao.message}
              </Typography>
            )}
            {checkoutErrorMessage && (
              <div className="mt-3">
                <Typography variant="body2" color="error">
                  {checkoutErrorMessage}
                </Typography>
              </div>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              color="primary"
              className={classes.submit}
            >
              {loading ? <CircularProgress size={24} /> : 'Finalizar compra'}
            </Button>
            <div className="mt-3">
              <span>
                Deseja ajustar o pedido? clique <Link href="/">aqui</Link>
              </span>
            </div>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Checkout
