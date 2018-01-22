import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import { container, activityIndicator } from '../styles/styles';

// Component to show an activityIndicator on screen while fetching the data

export default class Loading extends React.Component {
  render() {
    return (
      <View style={[container, activityIndicator]} >
        <ActivityIndicator size="large" color="#ffffff"/>
      </View>
    );
  }
}
