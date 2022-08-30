import {ChangeEvent, SyntheticEvent, useCallback, useEffect, useRef, useState} from "react";
import {addMessage, AppDispatch} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {getMessages} from "../../store/messages";
import {getUserName} from "../../store/profile/selectors";
import {useParams} from "react-router-dom";
import {sendResponseFromBot} from "../../store/messages";
import {SendMessageForm} from "./SendMessageForm";

export const SendMessageFormContainer = (): JSX.Element => {

    const [message, setMessage] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const messages = useSelector(getMessages)
    const author = useSelector(getUserName)
    const {chatID} = useParams<{ chatID: string }>()
    const dispatch: AppDispatch = useDispatch()

    const currentChatID = chatID ? +chatID : 0
    const messageList = chatID && messages[+chatID]

    useEffect(() => {
        inputRef.current?.focus()
    }, [inputRef])


    const createNewMessage = useCallback((message: string) => {

        const newMessage = {
            _id: Array.isArray(messageList) ? messageList.length : 0,
            author: author,
            text: message
        }

        addMessage({
            chatID: chatID ? +chatID : 0,
            message: newMessage
        })
    }, [author, chatID, messageList])


    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault()
        message && createNewMessage(message)
        setMessage('')
        inputRef.current?.focus()
        dispatch(sendResponseFromBot(currentChatID))
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value)
    }

    return (
        <SendMessageForm
            handleChange={handleChange}
            message={message}
            ref={inputRef}
            handleSubmit={handleSubmit}
        />);
}
