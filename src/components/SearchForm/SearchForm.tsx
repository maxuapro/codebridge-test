// import {FC} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, Typography } from '@mui/material';
import { Link } from '@mui/material';



const SearchForm = ({ setreg }: any) => {
  return (
    <Box>

      <Typography variant="overline" display="block">
        Filter by keywords  <Link href="https://github.com/maxuapro/codebridge-test" target="_blank">GITHUB CODE</Link>
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
