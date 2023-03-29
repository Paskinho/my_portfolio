import React from "react";
import s from "./Footer.module.scss"
import sContainer from "../../common/styles/Container.module.css";

export const Footer = () => {


    const Instagram = {

    }


    const Telegram = {

    }

    const Linkedin = {

    }

    const Github = {

    }


    return(
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
            <span>Uladzislau Paskanau</span>
                </div>
                    <div className={s.social}>
                        <div className={s.square}>
                            <img style={Instagram} className={s.square}/></div>
                        <div className={s.square}>
                            <img style={Telegram} className={s.square} /></div>
                        <div className={s.square}>
                            <img style={Linkedin} className={s.square} /></div>
                        <div className={s.square}>
                            <img style={Github} className={s.square} /></div>
                    </div>
                    <div className={s.copyRight}>
                Ⓒ 2023 All right reserved
                </div>
            </div>
        </div>
    );
}