import React from "react";
import s from "./BurgerNav.module.scss"
// import {NavLink} from "react-router-dom";
import {Link} from "react-scroll";


export const BurgerNav = () => {
    return (
        <div className={s.nav}>
            {/*<NavLink to={'/Home/'}>*/}
            {/*<a href='#main' className={s.navLink}>Home</a>*/}
            {/*/!*</NavLink>*!/*/}
            {/*<a href='#projects'  className={s.navLink}>Projects</a>*/}

            <Link
                className={s.navLink}
                activeClass={s.active}
                  to='main'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            >Home</Link>
            <Link className={s.navLink}
                activeClass={s.active}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={1000}
            >Projects</Link>
            <Link className={s.navLink}
                activeClass={s.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={1200}
            >Skills</Link>
            <Link className={s.navLink}
                activeClass={s.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={1400}
            >Contacts</Link>

            {/*<a href='#skills' className={s.navLink}>Skills</a>*/}
            {/*<a href='#contacts' className={s.navLink}>Contacts</a>*/}
        </div>
    );
}