import React from "react";
import s from "./Skills.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                <Skill title={"React"} description={"I learn react"}/>
                <Skill title={"JS"} description={"I learn JavaScript"}/>
                <Skill title={"TS"} description={"I learn TypeScript"}/>
                </div>
            </div>
        </div>
    );
}