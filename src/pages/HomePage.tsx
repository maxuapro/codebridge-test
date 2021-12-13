import { useEffect, useState } from 'react'
import MainContainer from '../components/MainContainer'
import SearchForm from '../components/SearchForm'
import ArticleCard from '../components/ArticleCard'
import ArticleContainer from '../components/ArticleContainer'
import { Grid, Typography } from '@mui/material'

import { IArticleData } from '../Interfaces'

const url = "https://api.spaceflightnewsapi.net/v3/articles/"

const filterData = (
  data: IArticleData[] | undefined,
  str: string | undefined,
): IArticleData[] | undefined => {
  if (!str) {
    return data
  }
  const reg = new RegExp(`${str}`, 'gi')
  const filtered = data
    ? data.filter((elem: IArticleData) => {
      return reg.test(elem.title) || reg.test(elem.summary)
    })
    : undefined
  return filtered
}

const sortData = (
  data: IArticleData[] | undefined,
  str: string | undefined,
): IArticleData[] | undefined => {
  if (!str) {
    return data
  }
  const reg = new RegExp(`${str}`, 'gi')
  const sorted = data
    ? data.sort((elem, elem2) => {
      if (reg.test(elem.title)) return 1
      if (reg.test(elem2.title)) return -1
      return 0
    })
    : undefined
  return sorted ? sorted.reverse() : undefined
}


const HomePage = () => {

  const [data, setData] = useState<IArticleData[]>()
  const [fiteredData, setFiteredData] = useState<IArticleData[]>()
  const [reg, setReg] = useState<string>()
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [str, setStr] = useState<string>()

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch(url)
        const fetchedData = await result.json()
        console.log('useEffect: All articles data fetched')
        setData(fetchedData)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const filtered = filterData(data, reg)
    const sorted = sortData(filtered, reg)
    setFiteredData(sorted)
  }, [data, reg])

  // TIMER 2 sec
  useEffect(() => {
    console.log("Is typing:", isTyping)
    if (!isTyping) {
      return
    }
    const timer = setTimeout(() => {
      setReg(str)
      console.log('timer is of')
      setIsTyping(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [isTyping, str])

  /**
   * Fires up timer and sets up RegExp
   * @param val string
   */
  const searchString = (val: string) => {
    console.log(val)
    setStr(val)
  }

  return (
    <MainContainer>
      <SearchForm setreg={(val: string) => {
        setIsTyping(true)
        searchString(val)
      }} />
      <ArticleContainer>
        <Typography variant='subtitle1' sx={{ borderBottom: "1px solid grey", marginBottom: '20px' }}>
          Results: {fiteredData && fiteredData.length}
        </Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}>

          {fiteredData && fiteredData.map((art, index) => {
            return (
              <Grid item xs={4} sm={4} md={4} lg={4} key={index}>
                <ArticleCard
                  regstr={reg}
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
  )
}

export default HomePage
