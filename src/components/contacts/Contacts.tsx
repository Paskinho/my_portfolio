import React from "react";
import s from "./Contacts.module.scss"
import sContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";

export const Contacts = () => {

    const SendCallback = () => {
        return alert('Thank you')
    }

    return(
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input className={s.input}></input>
                    <input className={s.input}></input>
                    <textarea className={s.textarea}></textarea>

                </form>
                <button className={s.button} onClick={SendCallback}>Send</button>
        </div>
        </div>
    );
}