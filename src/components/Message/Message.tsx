import {MessageProps} from "./Message.props";
import styles from './Message.module.scss'

export const Message = ({ message }: MessageProps): JSX.Element => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.author}>{message.author}</div>
            <div className={styles.message}>{message.text}</div>
        </div>
    );
}
