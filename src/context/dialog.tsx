import constate from 'constate'
import React from 'react'

export interface DialogState {
  open: boolean
  setOpen: Function
  activeEditItem: number
  setActiveEditItem: Function
}

function Dialog(): DialogState {
  const [open, setOpen] = React.useState<boolean>(false)
  const [activeEditItem, setActiveEditItem] = React.useState<number>(0)

  return {
    open,
    setOpen,
    activeEditItem,
    setActiveEditItem
  }
}

const [DialogProvider, useDialogContext] = constate(Dialog)

export { DialogProvider, useDialogContext }
