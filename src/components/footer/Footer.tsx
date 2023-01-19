import React from "react";
import s from "./Footer.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return(
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
            <h2>Uladzislau Paskanau</h2>

                    <div className={s.copyRight}>
                Ⓒ 2023 All right reserved
                    </div>
                </div>
            </div>
        </div>
    );
}