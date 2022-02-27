import React from 'react'

function MessageSender({ message, user }) {
  return (
    <div className="row message-body">
      <div className="col-sm-12 message-main-sender">
        <div className="sender">
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

export default MessageSender