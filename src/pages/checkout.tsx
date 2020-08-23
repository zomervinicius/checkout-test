import Header from '@/components/Header'
import { Box } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
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
  console.log(errors)
  return (
    <>
      <Header />
      <Box mt={15} />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Typography component="h1" variant="h5">
            Endereço de entrega
          </Typography>
          <form
            className={classes.form}
            onSubmit={handleSubmit(data => alert(JSON.stringify(data)))}
          >
            <Controller
              as={
                <TextField
                  fullWidth
                  label="Estado"
                  autoFocus
                  inputRef={register}
                  variant="outlined"
                  margin="normal"
                  error={errors.state}
                />
              }
              control={control}
              rules={{
                required: true
              }}
              name="state"
              defaultValue=""
            />
            {errors.state && errors.state.type === 'required' && (
              <Typography variant="body1" color="error">
                Campo obrigatório
              </Typography>
            )}

            <Controller
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                  fullWidth
                  label="Cidade"
                  type="city"
                  id="city"
                  error={errors.city}
                />
              }
              control={control}
              rules={{
                required: true
              }}
              name="city"
              defaultValue=""
            />
            {errors.city && errors.city.type === 'required' && (
              <Typography variant="body1" color="error">
                Campo obrigatório
              </Typography>
            )}
            <Controller
              as={
                <TextField
                  variant="outlined"
                  margin="normal"
                  inputRef={register}
                  fullWidth
                  type="address"
                  id="address"
                  label="Endereço"
                  error={errors.address}
                />
              }
              control={control}
              rules={{
                required: true
              }}
              name="address"
              defaultValue=""
            />
            {errors.address && errors.address.type === 'required' && (
              <Typography variant="body1" color="error">
                Campo obrigatório
              </Typography>
            )}

            <div className={classes.paper}>
              <Typography component="h1" variant="h5">
                Cartão de crédito
              </Typography>
            </div>
            <Controller
              as={
                <InputMask>
                  {() => (
                    <TextField
                      error={errors.creditCard}
                      variant="outlined"
                      margin="normal"
                      inputRef={register}
                      fullWidth
                      label="Número cartão de crédito"
                    />
                  )}
                </InputMask>
              }
              control={control}
              name="creditCard"
              mask="9999-9999-9999-9999"
              alwaysShowMask
              rules={{
                required: true,
                minLength: { value: 16, message: '' }
              }}
            />

            {errors.creditCard && errors.creditCard.type === 'required' && (
              <Typography variant="body1" color="error">
                Campo obrigatório
              </Typography>
            )}
            <Controller
              as={
                <InputMask>
                  {() => (
                    <TextField
                      variant="outlined"
                      inputRef={register}
                      margin="normal"
                      error={errors.secureCode}
                      fullWidth
                      label="Código de segurança"
                    />
                  )}
                </InputMask>
              }
              control={control}
              name="secureCode"
              mask="999"
              required
              alwaysShowMask
              rules={{ required: true, minLength: { value: 3, message: '' } }}
            />
            {errors.secureCode && errors.secureCode.type === 'required' && (
              <Typography variant="body1" color="error">
                Campo obrigatório
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Finalizar compra
            </Button>
          </form>
        </div>
      </Container>
    </>
  )
}

export default Checkout
