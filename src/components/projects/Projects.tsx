import React from "react";
import s from "./Projects.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from '../../common/components/title/Title';
import todoImage from './../../assets/images/to-dolist.png';
import socialImage from './../../assets/images/Social-Networking-Apps.png';
import { Fade } from "react-awesome-reveal";


export const Projects = () => {

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <div id='projects' className={s.projectsBlock}>
            <Fade direction={'left'} cascade={true} reverse={false}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <a href='https://github.com/Paskinho/newtodolist'>
                    <Project style={todolist} title={"Todolist"} description={"This is main todolist"}/>
                    </a>
                    <a href='https://github.com/Paskinho/Social-Network'>
                    <Project style={socialNetwork} title={"Social Network"} description={"This is authoring course from Dimych"}/>
                    </a>
                    </div>
            </div>
            </Fade>
        </div>
    );
}