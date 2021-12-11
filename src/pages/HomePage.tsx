import { useEffect, useState } from 'react'
import MainContainer from '../components/MainContainer/MainContainer'
import SearchForm from '../components/SearchForm'
import ArticleCard from '../components/ArticleCard'
import ArticleContainer from '../components/ArticleContainer'


import { Grid, Typography } from '@mui/material'

import { IArticleData } from '../Interfaces'

const url = "https://api.spaceflightnewsapi.net/v3/articles/"

const HomePage = () => {

  const [data, setData] = useState<IArticleData[]>()

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(url)
        const data = await result.json()
        console.log('useEffect: All articles data fetched')
        setData(data)
      } catch (error) {
        console.log(error)
      }      
    }
    getData()
  }, [])

  return (
    <>
      <MainContainer>
        <SearchForm />
        <ArticleContainer>
          <Typography gutterBottom variant='subtitle1' sx={{borderBottom: "1px solid black"}}>
            Results: {data && data.length}
          </Typography>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>

            {data && data.map((art, index) => {
              return (
                <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                  <ArticleCard
                    id={art.id}
                    title={art.title}
                    imageUrl={art.imageUrl}
                    summary={art.summary}
                    publishedAt={art.publishedAt}
                  />
                </Grid>
              )
            })}

          </Grid>
        </ArticleContainer>
      </MainContainer>
    </>
  )
}

export default HomePage
