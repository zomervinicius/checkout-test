import { Button } from '@material-ui/core'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import React from 'react'

export default function Index(): {} {
  return (
    <Container maxWidth="sm">
      <Box my={1}>
        <Typography variant="subtitle1">
          Next.js with TypeScript example
        </Typography>
        <Typography variant="subtitle2">
          Next.js with TypeScript example
        </Typography>
        <Typography variant="body1">Next.js with TypeScript example</Typography>
        <Typography variant="body2">Next.js with TypeScript example</Typography>
        <Typography variant="h6">Next.js with TypeScript example</Typography>
        <Typography variant="h5">Next.js with TypeScript example</Typography>
        <Typography variant="caption">
          Next.js with TypeScript example
        </Typography>
      </Box>
      <Button variant="contained" color="primary">
        Default
      </Button>
    </Container>
  )
}
