import styled from 'styled-components';
import SendMessage from './SendMessage';
import {useRef, useState} from 'react';
import Message from './Message';

const ChatBox = () => {
    const [messages, setMessages] = useState([]);

    const scroll = useRef();
    return (
        <>
            <main className='chat-box'>
                <div className='messages-wrapper'>
                    {messages?.map((message)=>{
                        <Message key={message.id} message={message} />
                    })}
                    </div>

                    <span ref={scroll}> </span>
                    <SendMessage scroll = {scroll}></SendMessage>
                </main>
        </>
    );
}

export default ChatBox ;