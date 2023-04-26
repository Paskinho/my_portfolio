import React from "react";
import s from "./Contacts.module.scss"
import sContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";

export const Contacts = () => {

    const SendCallback = () => {

        return alert('Thank you')
    }

    return(
        <div id='contacts' className={s.contactsBlock}>
            <Fade direction={'left'} cascade={true} reverse={false}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={s.form}>
                    <input className={s.input} placeholder={'Email'}></input>
                    <input className={s.input} placeholder={'Name'}></input>
                    <textarea className={s.textarea} placeholder={'Message'}></textarea>
                </form>
                <button className={s.button} onClick={SendCallback}>Send</button>
                {/*перенести кнопку в форму*/}
        </div>
            </Fade>
        </div>
    );
}