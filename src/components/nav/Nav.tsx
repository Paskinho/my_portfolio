import React from "react";
import s from "./Nav.module.scss"

export const Nav = () => {
    return (
        <div className={s.nav}>
            <a>Home</a>
            <a>Projects</a>
            <a>Skills</a>
            <a>Contacts</a>
        </div>
    );
}