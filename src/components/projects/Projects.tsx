import React from "react";
import s from "./Projects.module.css"
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from "../skills/skill/Skill";



export const Projects = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Projects</h2>
                <div className={s.skills}>
                    <Skill title={"React"} description={"I learn react"}/>
                    <Skill title={"JS"} description={"I learn JavaScript"}/>
                    <Skill title={"TS"} description={"I learn TypeScript"}/>
                </div>
            </div>
        </div>
    );
}