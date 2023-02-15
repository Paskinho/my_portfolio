import React from "react";
import s from "./Title.module.css";


type TitlePropsType = {
    text: string
}


export const Title = (props: TitlePropsType) => {
    return (
                <div className={s.title}>
                    <h2>{props.text}</h2>
                </div>

    );
}