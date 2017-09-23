import React from 'react';
import { Header, Menu, Container, Dropdown, Button, Image, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Chat from './Chat';
import avatar from '../assets/avatars.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
    this.state = {
      activeItem: 'editorials',
      avatar: avatar[0],
      author: 'Guest'
    };
  }
  onClickHandler(avatarPath) {
    const name = prompt('이름입력');
    this.setState({
      avatar: avatarPath,
      author: name
    });
  }
  handleItemClick(e, { name }) {
    // this.state.activeItem = name;
    this.setState({
      activeItem: name
    });
  }
  render() {
    return (
      <div>
        <Header as="h1">
          <Menu>
            <Menu.Item
              name='editorials'
              active={this.state.activeItem === 'editorials'}
              onClick={this.handleItemClick}
            >
              채팅
            </Menu.Item>

            <Menu.Item
              name='reviews'
              active={this.state.activeItem === 'reviews'}
              onClick={this.handleItemClick}
            >
              기타
            </Menu.Item>

            <Menu.Item
              name='upcomingEvents'
              active={this.state.activeItem === 'upcomingEvents'}
              onClick={this.handleItemClick}
            >
              등등
            </Menu.Item>
            <Menu.Menu position='right'>
              <Dropdown item trigger={<Image src={this.state.avatar} />}>
                <Dropdown.Menu>
                  {avatar.map(v => (
                    <Dropdown.Item key={v} onClick={e => this.onClickHandler(v)}>
                      <Image src={v} />
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              <Menu.Item>
                <Modal trigger={<Button>Show Modal</Button>}>
                  <Modal.Header>Select a Photo</Modal.Header>
                  <Modal.Content image>
                    <Image wrapped size='medium' src={this.state.avatar} />
                    <Modal.Description>
                      <Header>Default Profile Image</Header>
                      <p>Wil address.</p>
                      <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                  </Modal.Content>
                </Modal>
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Header>
        <Container text style={{ display: this.state.activeItem === 'editorials' ? 'block' : 'none' }}>
          <Chat
            avatar={this.state.avatar}
            author={this.state.author}
          />
        </Container>
        <Container text style={{ display: this.state.activeItem === 'reviews' ? 'block' : 'none' }}>
          <Header as='h2'>reviews</Header>
          <p>Lorem reviews do</p>
          <p>Lorem reviews do</p>
        </Container>
        <Container text style={{ display: this.state.activeItem === 'upcomingEvents' ? 'block' : 'none' }}>
          <Header as='h2'>upcomingEvents</Header>
          <p>Lorem ipsum do upcomingEvents</p>
          <p>Lorem ipsum do upcomingEvents</p>
        </Container>
      </div>
    );
  }
}
