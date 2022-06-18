import { Link, Typography } from '@mui/material';
import React from 'react'
import './sec6.scss';

export default function Sec6() {
  return (
    <div className="sec6">
      <div className="sec6__container">
        <div className="sec6__l-p l-s6">
          <div className='l-s6__span'></div>
          <div className="l-s6__title">
            <span>контакты</span>
            <Typography variant='h2'>Стройрегионинвест</Typography>
            <Typography variant='inherit'>Если у вас возникли вопросы или вы хотите узнать более подробно о нашей компании и сделать заказ - свяжитесь 
с нами !</Typography>
          </div>
        </div>
        <div className="sec6__r-p r-s6">
            <div className="r-s6__item">
              <Typography variant='h4'>Телефон</Typography>
              <Link href='tel:89067033141'>8 906 703 31 41</Link>
            </div>
            <div className="r-s6__item">
              <Typography variant='h4'>Адрес</Typography>
              <Typography variant='inherit'>109202, Г. Москва, ВН.ТЕР.Г. МУНИЦИПАЛЬНЫЙ ОКРУГ НИЖЕГОРОДСКИЙ, УЛ 2-Я КАРАЧАРОВСКАЯ, Д. 1, СТР. 1, ЭТАЖ 2, КОМ.19, ОФ.52</Typography>
            </div>
            <div className="r-s6__item">
              <Typography variant='h4'>Почта</Typography>
              <Link href='mailto:Palma.stroi@yandex.ru'>Palma.stroi@yandex.ru</Link>
            </div>
        </div>
      </div>
    </div>
  )
}
