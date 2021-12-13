import { FC } from 'react'
import Box from '@mui/material/Box';

const contStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: "15px",
  minHeight: '200px',
  boxShadow: "0px 0px 7px 0px #6F6F6F",
}

const MainContainer: FC = ({ children }) => {
  return (
    <Box sx={contStyle}>
      {children}
    </Box>
  )
}

export default MainContainer
