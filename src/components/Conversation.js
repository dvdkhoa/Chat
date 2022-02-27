import React, { useRef } from 'react'
import MessageContainer from './MessageContainer'

function Conversation({ messages, sendMessage, user }) {
  const textRef = useRef()

  return (
    <div className="col-sm-8 conversation">
            <div className="row heading">
              <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
                <div className="heading-avatar-icon">
                  <img src="https://bootdey.com/img/Content/avatar/avatar6.png" />
                </div>
              </div>
              <div className="col-sm-8 col-xs-7 heading-name">
                <a className="heading-name-meta">John Doe
                </a>
                <span className="heading-online">Online</span>
              </div>
              <div className="col-sm-1 col-xs-1  heading-dot pull-right">
                <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
              </div>
            </div>
            <MessageContainer messages={messages} user={user} />
            <div className="row reply">
              <div className="col-sm-1 col-xs-1 reply-emojis">
                <i className="fa fa-smile-o fa-2x" />
              </div>
              <div className="col-sm-9 col-xs-9 reply-main">
                <textarea ref={textRef} className="form-control" rows={1} id="comment" defaultValue={""} />
              </div>
              <div className="col-sm-1 col-xs-1 reply-recording">
                <i className="fa fa-microphone fa-2x" aria-hidden="true" />
              </div>
              <div className="col-sm-1 col-xs-1 reply-send" onClick={()=>sendMessage(textRef.current.value)}>
                <i className="fa fa-send fa-2x" aria-hidden="true" />
              </div>
            </div>
          </div>
  )
}

export default Conversation