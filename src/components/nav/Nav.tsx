import React from "react";
import s from "./Nav.module.scss"
// import {NavLink} from "react-router-dom";

export const Nav = () => {
    return (
        <div className={s.nav}>
            {/*<NavLink to={'/Home/'}>*/}
            <a className={s.navLink}>Home</a>
            {/*</NavLink>*/}
            <a className={s.navLink}>Projects</a>
            <a className={s.navLink}>Skills</a>
            <a className={s.navLink}>Contacts</a>
        </div>
    );
}