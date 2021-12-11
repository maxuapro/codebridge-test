import { FC } from 'react'
import Box from '@mui/material/Box';

const contStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: "15px",
  minHeight: '200px',
  border: '1px solid black'
}

const MainContainer: FC = ({ children }) => {
  return (
    <Box sx={contStyle}>
      {children}
    </Box>
  )
}

export default MainContainer
