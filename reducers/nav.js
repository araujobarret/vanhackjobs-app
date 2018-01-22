import { NavigationActions } from 'react-navigation';

import { LIST } from '../constants/navigation';
import { AppStackNavigator } from '../navigation/appStackNavigator';

// Set the initialState of the navigation
const initialState = AppStackNavigator.router.getStateForAction(AppStackNavigator.router.getActionForPathAndParams(LIST));

// Reducer to control the navigation
const nav = (state = initialState, action) => {
  let newState;

  switch(action.routeName){
    default:
      newState = AppStackNavigator.router.getStateForAction(action, state);
      break;
  }

  return newState;
}

export default nav;
