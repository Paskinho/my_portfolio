import React from "react";
import s from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a className={s.navLink}>Home</a>
            <a className={s.navLink}>Projects</a>
            <a className={s.navLink}>Skills</a>
            <a className={s.navLink}>Contacts</a>
        </div>
    );
}