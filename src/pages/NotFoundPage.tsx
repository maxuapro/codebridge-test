import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './ArticlePage.css'

const NotFoundPage = () => {
  return (
    <>
      <div className='backimage'>

      </div>
      <Box className='outerbox'>
        <Box className='contentbox'>
          <Typography variant="h5" gutterBottom component="div">
            404
          </Typography>

          <Typography variant="body1" gutterBottom>
            page is not found 😭
          </Typography>

          <Typography gutterBottom sx={{ marginTop: '30px' }}>
            <Link to="/article" className='goback'>
              ← back to Articles
            </Link>
          </Typography>

        </Box>
      </Box>
    </>
  )
}

export default NotFoundPage
