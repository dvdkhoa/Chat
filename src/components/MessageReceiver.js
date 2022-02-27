import React from 'react'

function MessageReceiver({ message, user }) {
  return (
    <div className="row message-body">
      <div className="col-sm-12 message-main-receiver">
        <div className="receiver">
          <div className="message-text">
            {message}
          </div>
          <span className="message-time pull-right">
            {user}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MessageReceiver