import React from "react";
import s from "./Footer.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return(
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
            <span>Uladzislau Paskanau</span>
                    <div>
                        <div className={s.item}><img alt={"Insta"}/></div>
                        <div className={s.item}><img alt={"LinkedIn"}/></div>
                        <div className={s.item}><img alt={"Github"}/></div>
                        <div className={s.item}><img alt={"VK"}/></div>
                    </div>

                </div>
                    <div className={s.copyRight}>
                Ⓒ 2023 All right reserved
                </div>
            </div>
        </div>
    );
}
