import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

import { Link } from 'react-router-dom';

// ICONS
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
// CSS
import './ArticleCard.css'

import { IArticleData } from '../../Interfaces';

const goodDate = (str: any) => {
  const d = new Date(str);
  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(d);
  const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(d);
  const lastChar = da.slice(-1)
  let suffix
  if (lastChar === '1') {
    suffix = 'st'
  } else if (lastChar === '2') {
    suffix = 'nd'
  } else if (lastChar === '3') {
    suffix = 'rd'
  } else {
    suffix = 'th'
  }
  return `${mo} ${da}${suffix}, ${ye}`
}

const makeDescription = (str: any): string => {
  return str.slice(0, 100) + '...'
}

const ArticleCard = ({
  id,
  title,
  imageUrl,
  summary,
  publishedAt
}: IArticleData) => {
  return (
    // sx={{maxWidth: 345}}
    <Card elevation={5} className="cardBlock">

      <CardActionArea className='cardActionArea'>
        <Link to={`/article/${id}`} className='readmore'>
          <CardMedia
            component="img"
            height="140"
            image={imageUrl}
            alt="green iguana"
          />

          <CardContent>

            <Typography variant="subtitle1" color="text.secondary">
              <CalendarTodayOutlinedIcon fontSize='small' />
              {goodDate(publishedAt)}
            </Typography>


            <Typography variant="h5">
              {title}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {makeDescription(summary)}
            </Typography>


          </CardContent>
        </Link>
      </CardActionArea>

      <CardActions >
        <Typography>
          <Link to={`/article/${id}`} className='readmore'>
            Read more →
          </Link>
        </Typography>
      </CardActions>

    </Card>
  )
}

export default ArticleCard
