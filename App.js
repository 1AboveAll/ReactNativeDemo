import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';
import AppContainer from './src';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import ReduxThunk from 'redux-thunk';
import NavigationService from './NavigationService';

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppContainer ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }} />
      </Provider>
    )
  }
}