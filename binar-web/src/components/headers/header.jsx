import React from "react";
import style from "./header.module.scss";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav className={style.nav}>
      <div className={style.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={style.linkHome}>
      <Link to="/">Home</Link>
      <Link to="#">Work</Link>
      <Link to="#">Contact</Link>
      <Link to="#">About Us</Link>
      </div>
      <div className={style.linkLogin}>
        <Link to="/auth">Sign In</Link>
      </div>
    </nav>
  );
}
