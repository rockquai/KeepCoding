import React from 'react';
import ReactDOM from 'react-dom';
import { Comment, Icon, Input } from 'semantic-ui-react';
import chats from '../assets/chats.json';

export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
    this.state = {
      text: '',
      author: '김수호',
      chats
    };
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
      this.setState({
        text: '',
        chats: [...this.state.chats, {
          id: this.state.chats[this.state.chats.length - 1].id + 1,
          author: this.state.author,
          avatar: this.props.avatar,
          text: e.target.value,
          faves: 10,
          date: Date.now()
        }]
      });
      this.scrollToBottom();
    }
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
                  {v.text}
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
