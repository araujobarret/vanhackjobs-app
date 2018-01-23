import React from 'react';
import { TouchableHighlight, Image, Text, Platform, StatusBar, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import List from '../components/list/list';

export const AppStackNavigator = StackNavigator(
  {
    List: {
      screen: List
    },
  },
  {
    headerMode: 'float',
    navigationOptions: ({navigation}) => ({
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { alignSelf: 'center' },
      title: <Text style={{color: "#595a5a"}}>Jobs</Text>,
      headerLeft: <TouchableHighlight underlayColor="white" onPress={ () =>  {}}>
        <Image style={{width: 48, height: 48}} resizeMode="stretch"
          source={require('../assets/images/vanhackicon.jpg')}/>
        </TouchableHighlight>,
      headerRight: <View style={{width: 48, height: 48}}/>
    })
  }
);
