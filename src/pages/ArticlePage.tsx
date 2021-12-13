import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

// styles
import './ArticlePage.css'

const url = "https://api.spaceflightnewsapi.net/v3/articles/"

interface ISingleArticle {
  id?: number | string;
  title?: string;
  imageUrl?: string;
  summary?: string;
}


const ArticlePage = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const [article, setArticle] = useState<ISingleArticle>()

  useEffect(() => {
    const getArticle = async (id: any) => {
      try {
        const result = await fetch(url + `${id}`)
        const data = await result.json()
        if (!data.title){
          navigate('/article/404')
          return
        }
        setArticle(data)
      } catch (error) {        
        console.log("ERROR: -->", error)
        navigate('/article/404')
      }
    }
    getArticle(id)
  }, [id, navigate])


  return (
    <>
      {article &&
        <>
          <div className='backimage'>
            <img src={article.imageUrl} alt={article.title} />
          </div>
          <Box className='outerbox'>
            <Box className='contentbox'>
              <Typography variant="h5" gutterBottom component="div">
                {article.title}
              </Typography>

              <Typography variant="body1" gutterBottom>
                {article.summary}
              </Typography>

              <Typography gutterBottom sx={{ marginTop: '30px' }}>
                <Link to="/article" className='goback'>
                  ← back to Articles
                </Link>
              </Typography>

            </Box>
          </Box>
        </>
      }
    </>
  )
}

export default ArticlePage
