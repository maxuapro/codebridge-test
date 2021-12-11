import { FC } from 'react'
import Box from '@mui/material/Box';
import './ArticleContainer.css'
// import { Grid } from '@mui/material';


// const styles = {

// }

const ArticleContainer: FC = ({ children }) => {
  return (

      <Box mt={5}>
        {children}
      </Box>

  )
}

export default ArticleContainer
