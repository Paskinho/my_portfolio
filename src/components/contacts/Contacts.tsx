import React from "react";
import s from "./Contacts.module.css"
import sContainer from "../../common/styles/Container.module.css";

export const Contacts = () => {
    return(
        <div className={s.contactsBlock}>
            <div className={`${sContainer.container} ${s.contactsContainer}`}>
<h3 className={s.title}>Contacts</h3>
                <form className={s.form}>
                    <input></input>
                    <input></input>
                    <textarea></textarea>

                </form>
        </div>
        </div>
    );
}