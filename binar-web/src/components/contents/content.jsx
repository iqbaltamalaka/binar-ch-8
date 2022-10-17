import React from "react";
import { Link } from 'react-router-dom';
import style from "./content.module.scss";
import logoPlay from "../../assets/logo.png"

export default function Content() {
  return (
    <div className={style.textHero}>
      <div className={style.text}>
        <h1>PLAY TRADITIONAL GAME</h1>
      </div>
      <div className={style.text2}>
        <h4>EXPERIENCE NEW TRADITIONAL GAME PLAY</h4>
      </div>
      <Link to='/room' className={style.btn}>
        <img className={style.logoPlay} src={logoPlay} alt="logo" /> PLAY NOW
      </Link>
    </div>
  );
}
