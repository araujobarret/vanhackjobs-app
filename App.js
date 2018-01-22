import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Font } from 'expo';

import AppNavigation from './navigation/appNavigation';
import configureStore from './store/store';
import Splash from './components/ui/splash';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }
  async componentDidMount() {
    await Font.loadAsync({
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
      'open-sans-light': require('./assets/fonts/OpenSans-Light.ttf'),
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    });
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 3000);
  }

  // Render the app integrated with redux and react-navigation
  render() {
    const store = configureStore();
    if(!this.state.isLoading){
      return (
        <Provider store={store}>
          <AppNavigation />
        </Provider>
      );
    }
    else {
      return <Splash />;
    }

  }
}
