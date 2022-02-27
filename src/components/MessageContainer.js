import { useEffect, useRef } from 'react';
import MessageReceiver from './MessageReceiver';
import MessageSender from './MessageSender'

const MessageContainer = ({ messages, user }) => {
    const messageRef = useRef();

    console.log('messages: ',messages)
    // useEffect(() => {
    //     if (messageRef && messageRef.current) {
    //         const { scrollHeight, clientHeight } = messageRef.current;
    //         messageRef.current.scrollTo({ left: 0, top: scrollHeight - clientHeight, behavior: 'smooth' });
    //     }
    // }, [messages]);

    // return <div ref={messageRef} className='message-container' >
    //     {messages.map((m, index) =>
    //         <div key={index} className='user-message'>
    //             <div className='message bg-primary'>{m.message}</div>
    //             <div className='from-user'>{m.user}</div>
    //         </div>
    //     )}
    // </div>
    return <div className="row message" id="conversation">
    <div className="row message-previous">
      <div className="col-sm-12 previous">
        <a id="ankitjain28" name={20}>
          Show Previous Message!
        </a>
      </div>
    </div>
    {messages.map((m) => user === m.user ? <MessageSender message={m.message} user={m.user} />
                                          : <MessageReceiver message={m.message} user={m.user} /> )}
  </div>
}

export default MessageContainer;