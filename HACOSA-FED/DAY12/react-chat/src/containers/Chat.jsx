import React from 'react';
import ReactDOM from 'react-dom';
// import io from 'socket.io-client';
import firebase from 'firebase';
import { Comment, Icon, Input, Button } from 'semantic-ui-react';
// import chats from '../assets/chats.json';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {
      text: '',
      author: props.author,
      chats: []
    };
    /* this.socket = io.connect('http://192.168.0.15:8080');
    this.socket.on('connection', (messages) => {
      this.setState({
        chats: messages
      });
    });
    this.socket.on('message', this.onReceivedMessageHandler.bind(this));*/

    const config = {
      apiKey: 'AIzaSyAnN9jAlOjBtrDK4G1gXrgJKZ5Nhr-VEQY',
      authDomain: 'realtime-chat-41fd1.firebaseapp.com',
      databaseURL: 'https://realtime-chat-41fd1.firebaseio.com',
      projectId: 'realtime-chat-41fd1',
      storageBucket: 'realtime-chat-41fd1.appspot.com',
      messagingSenderId: '967645058238'
    };
    firebase.initializeApp(config);
    this.ref = firebase.database().ref('messages');
    window.firebase = firebase;
    this.ref.on('child_added', this.onReceivedMessageHandler.bind(this));
  }
  componentDidUpdate() {
    this.scrollToBottom();
  }
  onChangeHandler(e) {
    this.setState({
      text: e.target.value
    });
  }
  onKeyUpHandler(e) {
    if (!e.target.value) return;
    if (e.keyCode === 13) {
      this.sendMessage({
        author: this.props.author,
        avatar: this.props.avatar,
        text: e.target.value,
        faves: 10,
      });
      this.setState({
        text: ''
      });
      this.scrollToBottom();
    }
  }
  onReceivedMessageHandler(data) {
    console.log(data.val());
    const d = data.val();
    d.id = data.key;
    this.setState({
      chats: [...this.state.chats, d]
    });
  }
  sendMessage(message) {
    // this.socket.emit('message', message);
    const key = this.ref.push().key;
    const updates = {
      [`messages${key}`]: message
    };
    this.ref.update(updates);
  }
  scrollToBottom() {
    const element = ReactDOM.findDOMNode(this);
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }
  render() {
    console.log('render');
    return (
      <div style={{ height: '600px', overflowY: 'scroll' }}>
        <Comment.Group>
          {this.state.chats.map(v => (
            <Comment key={v.id}>
              <Comment.Avatar as='a' src={v.avatar} />
              <Comment.Content>
                <Comment.Author>{v.author}</Comment.Author>
                <Comment.Metadata>
                  <div>{new Date(v.date).toUTCString()}</div>
                  <div>
                    <Icon name='star' />
                    {v.faves} Faves
                  </div>
                </Comment.Metadata>
                <Comment.Text>
                  {v.text}<Button onClick={() => firebase.database().ref(`messages/${v.id}`).remove()}>삭제</Button>
                </Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
        </Comment.Group>
        <Input
          style={{ position: 'fixed', bottom: 0 }}
          action='전송'
          placeholder='할말...'
          onChange={this.onChangeHandler}
          onKeyUp={this.onKeyUpHandler}
          value={this.state.text}
        />
      </div>
    );
  }
}
