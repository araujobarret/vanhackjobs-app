import React, { Component } from "react";
import { BackHandler } from "react-native";
import { connect } from "react-redux";
import { addNavigationHelpers } from "react-navigation";
import { AppStackNavigator } from "./appStackNavigator";

class AppNavigation extends Component {
  componentWillMount(){
      BackHandler.addEventListener('hardwareBackPress', function(){
        let {dispatch, navigation, nav} = this.props;
        // Do nothing if its have only one route at the stack
        if(nav.routes.length === 1){
          return false;
        }

        dispatch({ type: "Navigation/BACK"});
        return true;
      }.bind(this));
  }

  componentWillUnmount(){
    BackHandler.removeEventListener("hardwareBackPress");
  }

  render() {
    const { nav, dispatch } = this.props;
    return (
      <AppStackNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
  }
}

const mapStateToProps = state => {
  return {
    nav: state.nav
  };
};

export default connect(mapStateToProps)(AppNavigation);
