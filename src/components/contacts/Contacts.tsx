import React, {useState} from "react";
import s from "./Contacts.module.scss"
import sContainer from "../../common/styles/Container.module.css";
import {Title} from "../../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import axios from "axios";

export const Contacts = () => {

    const [text, setText] = useState('')

    const formClear = () => {
        return setText('')
    }

    const SendCallback = () => {
        return axios.post('http://localhost:3010/sendMessage')
            .then(() => {
                alert('Your message has been sent')
            })

    }

    return (
        <div id='contacts' className={s.contactsBlock}>
            <Fade direction={'left'} cascade={true} reverse={false}>
                <div className={`${sContainer.container} ${s.contactsContainer}`}>
                    <Title text={'Contacts'}/>
                    <form className={s.form}>
                        <input className={s.input} placeholder={'Email'} onClick={formClear}></input>
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