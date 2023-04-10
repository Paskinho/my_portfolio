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
            <Fade direction={'up'} cascade={true}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={todolist} title={"Todolist"} description={"This is main todolist"}/>
                    <Project style={socialNetwork} title={"Social Network"} description={"This is authoring course from Dimych"}/>
                </div>
            </div>
            </Fade>
        </div>
    );
}