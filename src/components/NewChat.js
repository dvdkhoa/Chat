import React, { Component } from 'react';
import '../main.css';
import SideOne from './SideOne';
import SideTwo from './SideTwo';
import $ from 'jquery';
import Conversation from './Conversation';

export class NewChat extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // Phần này phụ thêm
    $(function () {
      $(".heading-compose").click(function () {

        $(".side-two").css({
          "left": "0"
        });
      });

      $(".newMessage-back").click(function () {
        $(".side-two").css({
          "left": "-100%"
        });
      });
    })
  }

  render() {
    return (<>
      <div className="container app">
        <div className="row app-one">
          <div className="col-sm-4 side">
            <SideOne />
            <SideTwo  />
          </div>
          <Conversation messages={this.props.messages} sendMessage={this.props.sendMessage} user={this.props.user} />
        </div>
      </div>
    </>)
  }
}