import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth';
import { connect } from 'react-redux';
import { alreadyLogin, notLoginYet } from '../actions';
import Main from './Main';

class AppInit extends Component {

  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyDVfRuEsjlAnzmoI92e5YZ1oefSVAMZlhA',
      authDomain: 'managerjc7.firebaseapp.com',
      databaseURL: 'https://managerjc7.firebaseio.com',
      projectId: 'managerjc7',
      storageBucket: 'managerjc7.appspot.com',
      messagingSenderId: '497439991081'
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            this.props.alreadyLogin(user);
        } else {
            this.props.notLoginYet();
        }
    });
  }

  render() {
    return (
        <Main />
    );
  }
}

export default connect(null, { alreadyLogin, notLoginYet })(AppInit);