import React from "react";
import s from "./Footer.module.scss"
import sContainer from "../../common/styles/Container.module.css";
import instagramImage from "../../assets/images/Instagram.png"
import telegramImage from "../../assets/images/Telegram.png"
import linkedinImage from "../../assets/images/Linkedin.png"
import githubImage from "../../assets/images/Github.png"
import {Title} from "../../common/components/title/Title";
import {Tilt} from "react-tilt";


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


    return (
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
                    <span>Uladzislau Paskanau</span>
                    {/*<Title text={'Uladzislau Paskanau'}/>*/}
                </div>
                <div className={s.social}>
                    <Tilt options={{
                        reverse: true,
                        transition: true,
                        perspective: 5000
                    }
                    }>
                        <div className={s.square}>
                            <a href={'https://instagram.com/paskach?igshid=ZDdkNTZiNTM='}>
                                <img style={Instagram} className={s.square}/>
                            </a>
                        </div>
                    </Tilt>
                    <Tilt reverse={true}>
                        <div className={s.square}>
                            <a href={'https://instagram.com/paskach?igshid=ZDdkNTZiNTM='}>
                                <img style={Telegram} className={s.square}/> </a>
                        </div>

                    </Tilt>
                    <Tilt reverse={true}>
                        <div className={s.square}>
                            <a href={'https://www.linkedin.com/in/uladzislau-paskanau-206a83201/'}>
                                <img style={Linkedin} className={s.square}/>
                            </a>
                        </div>
                    </Tilt>
                    <Tilt reverse={true}>
                        <div className={s.square}>
                            <a href={'https://github.com/Paskinho'}>
                                <img style={Github} className={s.square}/>
                            </a>
                        </div>
                    </Tilt>

                </div>
                <div className={s.copyRight}>
                    Ⓒ 2023 All right reserved
                </div>
            </div>
        </div>
    );
}