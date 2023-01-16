import React from "react";
import s from "./Footer.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return(
        <div className={s.footerBlock}>
            <div className={sContainer.container}>
            <h2 className={s.name}>Uladzislau Paskanau </h2>
            </div>
        </div>
    );
}