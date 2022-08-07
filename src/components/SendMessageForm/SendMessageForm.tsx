import styles from './SendMessageForm.module.scss'
import {ChangeEvent, SyntheticEvent, useState} from "react";
import {SendMessageFormProps} from "./SendMessageForm.props";

export const SendMessageForm = ({addMessage}: SendMessageFormProps): JSX.Element => {

    const [message, setMessage] = useState<string>('')

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault()
        message && addMessage(message)
        setMessage('')
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input value={message} onChange={handleChange} className={styles.inputMessage} type="text" name="message"/>
            <button className={styles.buttonSend}>Send message</button>
        </form>
    );
}
