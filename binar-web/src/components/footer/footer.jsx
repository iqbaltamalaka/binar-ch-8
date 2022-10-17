import React from "react";
import style from "./footer.module.scss"
import scroll from "../../assets/scroll-down.svg"

export default function Footer () {
    return (
        <div className={style.footer}>
            <div className={style.text}>History</div>
            <img className={style.scroll} src={scroll} alt="scroll" />
        </div>
    )
}