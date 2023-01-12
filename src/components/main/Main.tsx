import React from "react";
import s from "./Main.module.css"
import sContainer from '../../common/styles/Container.module.css'



export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
            <div className={s.text}>
                <span>Hello!</span>
                <h1>I am Uladzislau Paskanau</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}>
                <img src=''/>
            </div>
            </div>
        </div>
    );
}