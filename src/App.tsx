import React, {useEffect, useState} from 'react';
import './App.css';
import {Message} from "./components/Message/Message";
import {MessageType} from "./types/MessageType";
import {SendMessageForm} from "./components/SendMessageForm/SendMessageForm";

const author = 'Неопознанный енот'
const robotName = 'Robot'
const robotAnswer = 'Сообщение успешно отправлено'
let timerID: NodeJS.Timeout;

function App() {

    const [messageList, setMessageList] = useState<MessageType[]>([])

    useEffect(() => {

        const lastMessage = messageList.slice(-1)[0]


        if (lastMessage && lastMessage.author !== robotName) {
            timerID = setTimeout(() => setMessageList(
                (perv) => [...perv, {
                    _id: perv.slice(-1)[0]?._id + 1 || 0,
                    author: robotName,
                    text: robotAnswer
                }]
            ), 1500)
        }

        return () => clearTimeout(timerID)

    }, [messageList])


    const addMessage = (message: string): void => {
        setMessageList((perv) => [...perv, {
            _id: perv.slice(-1)[0]?._id + 1 || 0,
            author,
            text: message
        }])
    }


    return (
        <div className="App">
            <div className={'messages'}>
                {messageList.map(m => <Message key={m._id} message={m}/>)}
            </div>
            <SendMessageForm addMessage={addMessage}/>
        </div>
    );
}

export default App;
