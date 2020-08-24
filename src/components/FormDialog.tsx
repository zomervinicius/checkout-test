import { useCartItemsContext } from '@/context/cart'
import { useDialogContext } from '@/context/dialog'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'
import React, { useState } from 'react'

const FormDialog: React.FC<{}> = () => {
  const { open, setOpen, activeEditItem } = useDialogContext()
  const { addItemObservation } = useCartItemsContext()
  const [observation, setObservation] = useState<string>('')

  const handleClose = (): void => {
    setObservation('')
    setOpen(false)
  }

  const handleAddObservation = (): void => {
    addItemObservation(activeEditItem, observation)
    handleClose()
  }

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Adicionar observação</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Adicione a observação para esse item
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="observation"
            label="Observação"
            fullWidth
            value={observation}
            onChange={e => setObservation(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAddObservation} color="primary">
            Inserir
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default FormDialog
