import React from "react";
import s from "./Main.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import profilePhoto from './../../assets/images/ProfilePhoto.jpg'


export const Main = () => {

    const profile = {
        backgroundImage: `url(${profilePhoto})`,
    }

    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <span>Hello!</span>
                <div className={s.mainText}>
                <h1>I am Uladzislau Paskanau</h1>
                </div>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo} style={profile}>
                <img />
            </div>
            </div>
        </div>
    );
}