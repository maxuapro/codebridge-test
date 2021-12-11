import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Box, Typography } from '@mui/material';



// styles
import './ArticlePage.css'

const url = "https://api.spaceflightnewsapi.net/v3/articles/"

interface ISingleArticle {
  id?: number;
  title?: string;
  imageUrl?: string;
  summary?: string;
}


const ArticlePage = () => {

  const { id } = useParams()
  const [article, setArticle] = useState<ISingleArticle>({})

  useEffect(() => {
    const getArticle = async (id: any) => {
      try {
        const result = await fetch(url + `${id}`)
        const data = await result.json()
        console.log('useEffect: data fetched')
        setArticle(data)
      } catch (error) {
        console.log(error)
      }      
    }
    getArticle(id)
  }, [id])


  return (
    <>
      <div className='backimage'>
        <img src={article.imageUrl} alt={article.title} />
      </div>
      <Box className='contentbox'>
      <Typography variant="h5" gutterBottom component="div">
        {article.title}
      </Typography>

      <Typography variant="body1" gutterBottom>
        {article.summary}
      </Typography>
        
      </Box>
    </>
  )
}

export default ArticlePage
