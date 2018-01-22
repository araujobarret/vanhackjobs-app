import React from 'react';
import { Animated, Dimensions, Easing, Image, View, Text, StyleSheet } from 'react-native';

import { container } from '../styles/styles';
import { blurContainer, imageOverlapped } from '../styles/splash';

// Component to show the splashScreen for 3 seconds before loading

export default class Splash extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing( this.state.fadeAnim,
    {
      toValue: 1,
      duration: 3000,
      easing: Easing.spring
    }).start();
  }

  render() {
    let { fadeAnim } = this.state;
    return (
      <View style={container}>
        <Image
          style={{zIndex: 1}}
          resizeMode="cover"
          source={require('../../assets/images/background.jpg')}
        />
        <View style={blurContainer}/>
        <View style={imageOverlapped}>
          <Animated.Image
            resizeMode="contain"
            source={require('../../assets/images/vanhacklogo.png')}
            style={{width: 196, height: 128, opacity: fadeAnim}}
          />
        </View>
      </View>
    );
  }
}
