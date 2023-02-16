import React from "react";
import s from "./Projects.module.scss"
import sContainer from '../../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from '../../common/components/title/Title';
import todoImage from './../../assets/images/to-dolist.png';
import socialImage from './../../assets/images/Social-Networking-Apps.png';



export const Projects = () => {

    const todolist = {
        backgroundImage: `url(${todoImage})`,
    };

    const socialNetwork = {
        backgroundImage: `url(${socialImage})`,
    };

    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project style={todolist} title={"Todolist"} description={"This is main todolist"}/>
                    <Project style={socialNetwork} title={"Social Network"} description={"This is authoring course from Dimych"}/>
                </div>
            </div>
        </div>
    );
}