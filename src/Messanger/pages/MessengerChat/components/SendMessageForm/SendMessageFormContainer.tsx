import {ChangeEvent, SyntheticEvent, useCallback, useEffect, useRef, useState} from "react";
import {AppDispatch} from "src/store";
import {useDispatch, useSelector} from "react-redux";
import {sendMessageWithFireBase} from "src/store/messages";
import {getUserName} from "src/store/profile/selectors";
import {useParams} from "react-router-dom";
import {sendResponseFromBot} from "src/store/messages";
import {SendMessageForm} from "./SendMessageForm";

export const SendMessageFormContainer = (): JSX.Element => {

    const [message, setMessage] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null)
    const author = useSelector(getUserName)
    const {chatID} = useParams<{ chatID: string }>()
    const dispatch: AppDispatch = useDispatch()



    useEffect(() => {
        inputRef.current?.focus()
    }, [inputRef])


    const createNewMessage = useCallback((message: string) => {
        dispatch(sendMessageWithFireBase({
            chatID: chatID || '0',
            messageText: message,
            author: author
        }))


    }, [author, chatID, dispatch])


    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault()

        message && createNewMessage(message)
        chatID && dispatch(sendResponseFromBot(chatID))

        setMessage('')
        inputRef.current?.focus()
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
