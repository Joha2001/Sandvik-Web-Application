import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';
import store from 'store'
import { Redirect } from 'react-router-dom';
import isLoggedIn from '../../helpers/is_logged_in';
import NavBar from '../../components/Header/NavBar'
import {Button} from 'react-bootstrap'

const handleLogout = history => () => {
    store.remove('loggedIn');
    history.push('/Login');
  };
  
  const Home = ({ history }) => {
    if (!isLoggedIn()) {
      return <Redirect to="/Login" />;
    }
    return (
        <div className="App">
            <NavBar></NavBar>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                 className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                </a>
            </header>
            <Button size="lg" onClick={handleLogout(history)}>Logout</Button>
        </div>
    );
}

export default Home;
