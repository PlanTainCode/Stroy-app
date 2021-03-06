import React from 'react'
import './sec5.scss';
import Img1 from '../../assets/s5-p1.png'
import { Button, Typography } from '@mui/material';

export default function Sec5() {
  return (
    <div className="sec5">
      <div className="sec5__container">
        <div className="sec5__pic">
          <img src={Img1} alt="" />
        </div>
        <div className="sec5__content">
          <span>строим под ключ</span>
          <Typography variant='h2'>Берем все заботы на себя</Typography>
          <Typography variant='inherit'>Любой объект, независимо от площади и сложности конструкции, проходит контроль качества со стороны профессиональных прорабов.</Typography>
          <Button variant='contained'>
          Cвязаться
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5774 13.5774C13.252 13.9028 13.252 14.4305 13.5774 14.7559C13.9028 15.0814 14.4305 15.0814 14.7559 14.7559L18.9226 10.5893C19.248 10.2638 19.248 9.73618 18.9226 9.41075L14.7559 5.24408C14.4305 4.91864 13.9029 4.91864 13.5774 5.24408C13.252 5.56951 13.252 6.09715 13.5774 6.42259L16.3215 9.16667H1.66667C1.20643 9.16667 0.833336 9.53976 0.833336 10C0.833336 10.4602 1.20643 10.8333 1.66667 10.8333H16.3215L13.5774 13.5774Z" fill="white"/>
          </svg>
          </Button>
        </div>
      </div>
    </div>
  )
}
