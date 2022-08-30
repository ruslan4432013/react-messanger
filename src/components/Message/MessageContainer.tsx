import {MessageProps} from "./Message.props";
import {Message} from "./Message";
import {useSelector} from "react-redux";
import {getUserName} from "../../store/profile/selectors";

export const MessageContainer = ({message}: MessageProps) => {

    const user = useSelector(getUserName)

    return (
        <Message user={user} {...message}/>
    );
}
