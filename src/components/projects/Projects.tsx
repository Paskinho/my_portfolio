import React from "react";
import s from "./Projects.module.css"
import sContainer from '../../common/styles/Container.module.css'



export const Projects = () => {
    return (
        <div className={s.mainBlock}>
            <div className={sContainer.container}>
                <h2 className={s.title}>Projects</h2>
            </div>
        </div>
    );
}