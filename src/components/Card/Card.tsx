import React, { FC } from 'react'

export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width: string;
  height: string;
  variant: CardVariant;
}

const Card: FC<CardProps> = ({
  width,
  height,
  variant,
  children
}) => {
  return (
    <div style={{ width, height,
      border: variant === CardVariant.outlined ? '1px solid black' : 'none',
      background: variant === CardVariant.primary ? 'Lightgray' : ''    
    }}>
      {children}
    </div>
  )
}

export default Card
