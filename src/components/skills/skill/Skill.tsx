import React from "react";
import s from "./Skill.module.css"

type skillPropsType = {
    title: string
    description: string
}

export const Skill = (props:skillPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}