// import {FC} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Typography } from '@mui/material';



const SearchForm = ({ setreg }: any) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '60%' },
      }}
      noValidate
      autoComplete="off"
    >

      <Typography variant="overline" display="block">
        Filter by keywords
      </Typography>

      <TextField
        onChange={(event) => {
          setreg(event.target.value)
        }}
        sx={{ boxShadow: "0px 0px 7px 0px #6F6F6F" }}
        id="input-with-icon-textfield"
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />

    </Box>
  )
}

export default SearchForm
