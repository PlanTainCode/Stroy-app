import { Typography } from '@mui/material';
import React from 'react'
import './sec2.scss';

export default function Sec2() {
  return (
    <div className="sec2">
      <div className="sec2__container">
        <div className="sec2__item">
          <Typography variant='h2'>{'>'}100</Typography>
          <Typography variant='inherit'>
          успешных проектов
          </Typography>
        </div>
        <span></span>
        <div className="sec2__item">
          <Typography variant='h2'>
          100%
          </Typography>
          <Typography variant='inherit'>
          довольных клиентов
          </Typography>
        </div>
        <span></span>
        <div className="sec2__item">
          <Typography variant='h2'>
          10+
          </Typography>
          <Typography variant='inherit'>
          лет опыта
          </Typography>
        </div>
        <span></span>
        <div className="sec2__item">
          <Typography variant='h2'>
          5+
          </Typography>
          <Typography variant='inherit'>
          команда экспертов
          </Typography>
        </div>
      </div>
    </div>
  )
}
