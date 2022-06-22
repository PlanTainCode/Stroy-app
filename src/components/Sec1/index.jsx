import { Button, IconButton, Link, Typography } from '@mui/material';
import React from 'react'
import './sec1.scss';
import { LocalPhoneOutlined as Tel, AlternateEmailOutlined as Email } from '@mui/icons-material'
import {Link as LinkTo} from 'react-scroll';

export default function Sec1() {
  return (
    <div className="sec1">
        <div className="sec1__container">
            <div className="sec1__header h-s1">
                <div className="h-s1__logo">
                    <svg width="23" height="65" viewBox="0 0 23 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.0318 43.9183L10.0216 20L3.18301 23.3581C1.02819 24.4163 0 26.0882 0 28.4764L0.0683756 52.4673L6.81262 49.1092C8.99357 48.0187 10.0318 46.3588 10.0318 43.9183Z" fill="url(#paint0_linear_1_3560)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.3877 56L22.3775 32.0817L15.5389 35.4397C13.3841 36.498 12.3559 38.1698 12.3559 40.5581L12.4243 64.5489L19.1685 61.1909C21.3495 60.1004 22.3877 58.4405 22.3877 56Z" fill="url(#paint1_linear_1_3560)"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M22.0318 23.9183L22.0216 0L15.183 3.35807C13.0282 4.41633 12 6.08819 12 8.47643L12.0684 32.4673L18.8126 29.1092C20.9936 28.0187 22.0318 26.3588 22.0318 23.9183Z" fill="url(#paint2_linear_1_3560)"/>
                        <defs>
                            <linearGradient id="paint0_linear_1_3560" x1="11.1938" y1="20" x2="4.32051" y2="75.4302" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3A78F2"/>
                                <stop offset="1" stopColor="#00143D"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_1_3560" x1="11.1938" y1="20" x2="4.32051" y2="75.4302" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3A78F2"/>
                                <stop offset="1" stopColor="#00143D"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_1_3560" x1="17.0159" y1="7.37951e-08" x2="9.06661" y2="39.4155" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#3A78F2"/>
                                <stop offset="1" stopColor="#00143D"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <span>Стройрегионинвест</span>
                </div>
                <div className="h-s1__contacts">
                    <Link href='tel:89067033141'>
                        <p>8 906 703 31 41</p>
                        <IconButton className='iconbutton'><Tel /></IconButton>
                    </Link>
                    <Link href='mailto:Palma.stroi@yandex.ru'>
                        <p>Palma.stroi@yandex.ru</p>
                        <IconButton className='iconbutton'><Email  /></IconButton>
                    </Link>
                </div>
            </div>
            <div className="sec1__main m-s1">
                <Typography variant='h1'>
                    Строительство
                    <span>Проектирование</span>
                    <p>Инженерия</p>
                </Typography>
                <div className="m-s1__contact">
                    <Button variant='contained'>Связаться</Button>
                    <LinkTo to='sec4' spy={true} smooth={true} duration={500}>
                        <span>
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_2_3613)">
                                <path d="M0 12.5C0 5.87258 5.37258 0.5 12 0.5C18.6274 0.5 24 5.87258 24 12.5C24 19.1274 18.6274 24.5 12 24.5C5.37258 24.5 0 19.1274 0 12.5Z" fill="white"/>
                            </g>
                            <path d="M8.99268 14.2144V10.68C8.99268 9.17335 8.99268 8.42001 9.48339 8.12962C9.97411 7.83922 10.6345 8.20177 11.9552 8.92688L14.9846 10.5901C16.3231 11.3249 16.9924 11.6924 17.0071 12.2668C17.0218 12.8412 16.3722 13.2424 15.0731 14.0448L12.0437 15.916C10.6936 16.7499 10.0185 17.1668 9.50559 16.8807C8.99268 16.5947 8.99268 15.8012 8.99268 14.2144Z" fill="#1D2130"/>
                            <defs>
                                <filter id="filter0_b_2_3613" x="-80" y="-79.5" width="184" height="184" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImage" stdDeviation="40"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_3613"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_3613" result="shape"/>
                                </filter>
                            </defs>
                        </svg>
                        </span>
                        Что мы делаем ?
                    </LinkTo>
                </div>
            </div>
            <div className="sec1__footer f-s1">
                <Typography variant='inherit'>строительный контроль</Typography>
                <span></span>
                <Typography variant='inherit'>общестроительные работы</Typography>
            </div>
        </div>
    </div>
  )
}
