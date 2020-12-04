import React from 'react';
import { Grid, Form, Header, Message, Segment } from 'semantic-ui-react';
import store from 'store';
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';
import style from './LoginStyle.css';
import logo from '../../assets/logo.svg';
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      error: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;
    const { history } = this.props;

    this.setState({ error: false });

    if (!(username === 'SandvikWebApp' && password === 'Password')) {
      return this.setState({ error: true });
    }

    store.set('loggedIn', true);
    history.push('/Home');
  }

  handleChange(e, { name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { error } = this.state;

    if (isLoggedIn()) {
      return <Redirect to="/Home" />;
    }

    return (
      <Grid textAlign='center' style={style} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 10000 }}>
          <Form size = 'large' error={error} onSubmit={this.onSubmit}>
            <img src={logo} className="App-logo" alt="logo" />
            <Header as="h2">Login</Header>
            {error && <Message
              error={error}
              content="That username/password is incorrect. Try again!"
            />}
            <Segment stacked>
            <Form.Input
              fluid icon= 'user'
              inline
              label="Username"
              name="username"
              onChange={this.handleChange}
            />
            <Form.Input
              inline
              label="Password"
              type="password"
              name="password"
              onChange={this.handleChange}
            />
            </Segment>
            <Form.Button type="submit">Sign In</Form.Button>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Login;

