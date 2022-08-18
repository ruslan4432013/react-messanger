import {MessageListProps} from "./MessageList.props";
import {Message} from "../Message/Message";

export const MessageList = ({messageList}: MessageListProps): JSX.Element => {

    return (
        <>
            {messageList.map(m => <Message key={m._id} message={m}/>)}
        </>
    )
}
