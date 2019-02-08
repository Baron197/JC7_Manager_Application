import React, { Component } from 'react';
import { Header } from 'react-native-elements';
import firebase from '@firebase/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Main from './src/components/Main';

class App extends Component {

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
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
        <Provider store={store}>
          <Main />
        </Provider>
    );
  }
}

export default App;