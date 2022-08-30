import styles from './Message.module.scss'
import cn from 'classnames'
import {MessageType} from "../../types/MessageType";


export const Message = ({author: messageAuthor, text, user}: MessageType & { user: string }): JSX.Element => {
    return (
        <div
            className={cn(styles.wrapper, {
                [styles.wrapper_self]: messageAuthor === user
            })}
        >
            <div className={styles.author}>{messageAuthor}</div>
            <div className={styles.message}>{text}</div>
        </div>
    );
}
