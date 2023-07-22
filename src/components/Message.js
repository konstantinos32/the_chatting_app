import styled from 'styled-components';

const Message = () => {
    return (
        <>
        <div className={`chat-bubble`}>/* a different way to write a className*/
            <img className="chat-bubble__left" src="" alt="user avatar" />
            <div className="chat-bubble__right">

                <p className="user-name">Konstantinos Theo</p>
                <p className="user-message">
                    We are building a real time  chat app with react and firebase</p>

            </div>
        </div>
            
        </>
    );
}

export default Message;