import {DetailedHTMLProps, HTMLAttributes} from "react";
import {MessageType} from "../../../../../types/MessageType";

export interface MessageProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    message: MessageType
}
