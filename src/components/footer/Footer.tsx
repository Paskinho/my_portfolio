import React from "react";
import s from "./Footer.module.scss"
import sContainer from "../../common/styles/Container.module.css";
import instagramImage from "../../assets/images/Instagram.png"
import telegramImage from "../../assets/images/Telegram.png"
import linkedinImage from "../../assets/images/Linkedin.png"
import githubImage from "../../assets/images/Github.png"


export const Footer = () => {


    const Instagram = {
        backgroundImage: `url(${instagramImage})`,
    }

    const Telegram = {
        backgroundImage: `url(${telegramImage})`,
    }

    const Linkedin = {
        backgroundImage: `url(${linkedinImage})`,
    }

    const Github = {
        backgroundImage: `url(${githubImage})`,
    }

    const InstagramHandler = () => {
        return alert ("Sorry. Later!")
    }

    const TelegramHandler = () => {
        return alert ("Sorry. Later!")
    }

    const LinkedInHandler = () => {
        return alert ("Sorry. Later!")
    }

    const GitHubHandler = () => {
        return alert ("Sorry. Later!")

    }


    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
                    <span>Uladzislau Paskanau</span>
                </div>
                <div className={s.social}>
                    <div className={s.square}>
                        <img onClick={InstagramHandler} style={Instagram} className={s.square}/></div>

                    <div className={s.square}>
                        <img onClick={TelegramHandler} style={Telegram} className={s.square}/></div>
                    <div className={s.square}>
                        <img onClick={LinkedInHandler} style={Linkedin} className={s.square}/></div>
                    <div className={s.square}>
                        <img onClick={GitHubHandler} style={Github} className={s.square}/></div>

                </div>
                <div className={s.copyRight}>
                    Ⓒ 2023 All right reserved
                </div>
            </div>
        </div>
    );
}