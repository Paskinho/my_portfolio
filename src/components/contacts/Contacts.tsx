import React from "react";
import s from "./Contacts.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Contacts = () => {

    const SendCallback = () => {
        return alert('Done!')
    }

    return(
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
<h3 className={s.title}>Contacts</h3>
                <form className={s.form}>
                    <input></input>
                    <input></input>
                    <textarea></textarea>

                </form>
                <button className={s.button} onClick={SendCallback}>Send</button>
        </div>
        </div>
    );
}