import React from "react";
import s from "./Nav.module.css"

 export const Nav = () => {
    return(
<div className={s.nav}>
     <a href=''>Home</a>
     <a href=''>Skills</a>
     <a href=''>Projects</a>
     <a href=''>Contacts</a>
</div>
    );
}