import React from "react";
import s from "./Project.module.scss"

type projectPropsType = {
    title: string
    description: string
    style: any
}

export const Project = (props:projectPropsType) => {

    // const projectHandler = () => {
    //    return alert("Later!")
    // }

    return (
        <div className={s.projectBlock}>
            <div className={s.image} style={props.style}>
                <button  className={s.button}>Seen</button>
            </div>
            <div className={s.projectInfo}>
            <h3 className={s.projectTitle}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
            </div>
        </div>
    );
}