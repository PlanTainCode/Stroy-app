import React from 'react'
import './footer.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
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
    </div>
  )
}
