import {MessageListProps} from "./MessageList.props";
import {MessageContainer} from "../Message/MessageContainer";

export const MessageList = ({messageList}: MessageListProps): JSX.Element => {

    return (
        <>
            {messageList.map(m => <MessageContainer key={m._id} message={m}/>)}
        </>
    )
}
