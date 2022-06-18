import { Typography } from '@mui/material';
import React from 'react'
import './sec3.scss';

export default function Sec3() {
  return (
    <div className="sec3">
      <div className="sec3__container">
        <div className="sec3__l-p">
          <span>О компании</span>
          <Typography variant='h2'>Ведущая команда</Typography>
          <Typography variant='inherit'>Мы успешно работаем на российском рынке с 2021 года 
и за это время зарекомендовали себя как надежный партнер 
и обязательный застройщик. Наши работы в сфере строительства отвечают всем современным требованиям 
к качеству и срокам возведения объектов.
Все проекты выполняются с использованием передовых технологий и качественных материалов.
Мы выполняем весь комплекс услуг от составления проекта строительства до ввода в эксплуатацию, от укладки фундамента до обустройства крыши.
</Typography>
        </div>
        <div className="sec3__r-p rp-s3">
          <div></div>
          <div className="rp-s3__title">
            <Typography variant='inherit'>стройрегионинвест</Typography>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
