import React from "react";
import s from "./Project.module.css"

type projectPropsType = {
    title: string
    description: string
}

export const Project = (props:projectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}