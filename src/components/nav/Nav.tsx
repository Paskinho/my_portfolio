import React from "react";
import s from "./Nav.module.scss"
// import {NavLink} from "react-router-dom";
import {Link} from 'react-scroll'


export const Nav = () => {
    return (
        <div className={s.nav}>
            {/*<NavLink to={'/Home/'}>*/}
            <a href={''} className={s.navLink}>Home</a>
            {/*</NavLink>*/}
            <a href='#projects' className={s.navLink}>Projects</a>
            {/*<Link activeClass={s.active}*/}
            {/*      to='projects'*/}
            {/*      spy={true}*/}
            {/*      smooth={true}*/}
            {/*      offset={1}*/}
            {/*      duration={500}*/}
            {/*>Projects</Link>*/}
            <a className={s.navLink}>Skills</a>
            <a className={s.navLink}>Contacts</a>
        </div>
    );
}