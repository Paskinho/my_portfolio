import React from "react";
import s from "./Skill.module.scss"

type skillPropsType = {
    title: string
    description: string
    style: any // уточнить тип
}

export const Skill = (props:skillPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={s.icon} style={props.style}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>
                {props.description}
            </span>
        </div>
    );
}