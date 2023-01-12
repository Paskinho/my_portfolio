import React from "react";
import s from "./Main.module.css"


export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.container}>
            <div className={s.text}>
                <span>Hello!</span>
                <h1>I am Uladzislau Paskanau</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}>
                <img src=""/>
            </div>
            </div>
        </div>
    );
}