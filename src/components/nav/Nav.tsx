import React from "react";
import s from "./Nav.module.css"

 export const Nav = () => {
    return(
<div className={s.nav}>
     <a>Home</a>
     <a>Skills</a>
     <a>Projects</a>
     <a>Contacts</a>

</div>
    );
}