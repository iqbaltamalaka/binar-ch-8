import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/footer'
import style from './home.module.scss'
export default function Hero() {
  return (
    <>
    <div className={style.hero}>
      <h1 className={style.textHero}>Play Traditional Game</h1>
      <h3 className={style.describeHero}>
        Experience new traditional game play
      </h3>
      <Link to='/apps/room'>
        <div className={style.button}>PLAY GAME</div>
      </Link>
      <Footer />
    </div>
    </>
  )
}
