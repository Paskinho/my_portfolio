import React from "react";
import s from "./Skills.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../../common/components/title/Title";
import reactImage from "../../assets/images/React.png"
import jsImage from "../../assets/images/JS.png"
import typeScriptImage from "../../assets/images/Typescript.png"
import { Tilt } from 'react-tilt'
import {Fade} from "react-awesome-reveal";

export const Skills = () => {

    const ReactImage = {
        backgroundImage:`url(${reactImage})`
    }

    const JSImage = {
        backgroundImage:`url(${jsImage})`
    }

    const TypeScriptImage = {
        backgroundImage:`url(${typeScriptImage})`
    }


    return (
        <div id='skills' className={s.skillsBlock}>
            <Fade direction={'right'} cascade={false}>
            <div className={`${sContainer.container} ${s.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Tilt>
                <Skill style={ReactImage} title={"React"} description={"I learn react"}/>
                    </Tilt>
                        <Tilt>
                <Skill style={JSImage} title={"JS"} description={"I learn JavaScript"}/>
                        </Tilt>
                            <Tilt>
                <Skill style={TypeScriptImage} title={"TS"} description={"I learn TypeScript"}/>
                    </Tilt>
                </div>
            </div>
            </Fade>
        </div>
    );
}