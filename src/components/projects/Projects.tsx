import React from "react";
import s from "./Projects.module.css"
import sContainer from '../../common/styles/Container.module.css'
import {Project} from "./project/Project";



export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <div className={s.title}>
                    <h2 >Projects</h2>
                </div>
                <div className={s.projects}>
                    <Project title={"Todolist"} description={"This is main todolist"}/>
                    <Project title={"Social Network"} description={"This is authoring course from Dimych"}/>
                </div>
            </div>
        </div>
    );
}