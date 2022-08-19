import {MessageProps} from "./Message.props";
import styles from './Message.module.scss'
import cn from 'classnames'
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";



export const Message = ({message}: MessageProps): JSX.Element => {

    const author = useSelector((state: RootState) => state.profile.name)

    return (
        <div
            className={cn(styles.wrapper, {
                [styles.wrapper_self]: message.author === author
            })}
        >
            <div className={styles.author}>{message.author}</div>
            <div className={styles.message}>{message.text}</div>
        </div>
    );
}
