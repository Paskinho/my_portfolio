import React from "react";
import s from "./Footer.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Footer = () => {
    return(
        <div className={s.footerBlock}>
            <div className={`${sContainer.container} ${s.footerContainer}`}>
                <div className={s.name}>
            <span>Uladzislau Paskanau</span>
                </div>
                    <div className={s.social}>
                        <div className={s.square}><img className={s.square} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/1200px-Square_gray.svg.png'/></div>
                        <div className={s.square}><img className={s.square} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/1200px-Square_gray.svg.png'/></div>
                        <div className={s.square}><img className={s.square} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/1200px-Square_gray.svg.png'/></div>
                        <div className={s.square}><img className={s.square} src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Square_gray.svg/1200px-Square_gray.svg.png'/></div>
                    </div>


                    <div className={s.copyRight}>
                Ⓒ 2023 All right reserved
                </div>
            </div>
        </div>
    );
}