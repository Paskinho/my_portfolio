import React from "react";
import s from "./Projects.module.css"
import sContainer from '../../common/styles/Container.module.css'
import {Project} from "./project/Project";
import {Title} from "../../common/components/title/Title";



export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${sContainer.container} ${s.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={s.projects}>
                    <Project title={"Todolist"} description={"This is main todolist"}/>
                    <Project title={"Social Network"} description={"This is authoring course from Dimych"}/>
                </div>
            </div>
        </div>
    );
}