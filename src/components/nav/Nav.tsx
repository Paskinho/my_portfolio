import React from "react";
import s from "./Nav.module.scss"
// import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";


export const Nav = () => {
    return (
        <div className={s.nav}>
            {/*<NavLink to={'/Home/'}>*/}
            {/*<a href='#main' className={s.navLink}>Home</a>*/}
            {/*/!*</NavLink>*!/*/}
            {/*<a href='#projects'  className={s.navLink}>Projects</a>*/}
            <Link activeClass={s.active}
                  to='main'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >Home</Link>
            <Link activeClass={s.active}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >Projects</Link>
            <Link activeClass={s.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >Skills</Link>
            <Link activeClass={s.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >Contacts</Link>
            {/*<a href='#skills' className={s.navLink}>Skills</a>*/}
            {/*<a href='#contacts' className={s.navLink}>Contacts</a>*/}
        </div>
    );
}