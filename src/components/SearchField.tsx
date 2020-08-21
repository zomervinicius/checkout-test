import InputBase from '@material-ui/core/InputBase'
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25)
      },
      marginLeft: 0,
      width: '100%',
      justifyContent: 'center',
      display: 'flex',
      marginTop: 20,
      marginBottom: 20,
      [theme.breakpoints.up('lg')]: {
        right: 0,
        marginTop: 0,
        marginBottom: 0
      }
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      right: 55,
      [theme.breakpoints.up('lg')]: {
        right: 0
      }
    },
    inputRoot: {
      color: 'inherit',
      fontSize: '15px',
      borderBottom: '2px solid grey'
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '50ch'
      }
    }
  })
)
const SearchField: React.FC<{}> = () => {
  const classes = useStyles()
  return (
    <div className={classes.search}>
      <InputBase
        placeholder="O que você procura?"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput
        }}
        inputProps={{ 'aria-label': 'search' }}
      />
      <SearchIcon className={classes.searchIcon} />
    </div>
  )
}

export default SearchField
