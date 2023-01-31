import React from "react";
import s from "./Project.module.css"

type projectPropsType = {
    title: string
    description: string
}

export const Project = (props:projectPropsType) => {
    return (
        <div className={s.projectBlock}>
            <div >
                <button className={s.button}>Seen</button>
            </div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}