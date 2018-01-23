import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, Animated, Easing, FlatList, Picker, View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListItem from './list-item';
import FilterModal from './filter-modal';
import JobsCarousel from './jobs-carousel';
import { container, list } from '../styles/styles';
import { startGetJobs } from '../../actions/jobs';

class List extends React.Component {
  isLoading = true;
  isCarousel = false;

  constructor(props) {
    super(props);
    this.closedFilterModal = this.closedFilterModal.bind(this);

    this.state = {
      page: 0,
      jobs: null,
      filter: null,
      modalVisible: false,
      fadeAnim: new Animated.Value(1),
      fadeAnimCarousel: new Animated.Value(0),
      displayList: "flex",
      displayCarousel: "none"
    };
  }

  componentWillReceiveProps(nextProps) {
    // Activate/Deactivate the loader
    if(nextProps.jobs.jobs == null) {
      this.isLoading = true;
    }
    else {
      this.isLoading = false;
    }
    this.setState({page: nextProps.jobs.page, jobs: nextProps.jobs.jobs, filter: nextProps.filter});
  }

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({item}) => {
    return (
      <ListItem {...item}/>
    );
  }

  updateItems(page = this.state.page) {
    let {dispatch} = this.props;
    dispatch(startGetJobs(page, this.state.filter));
  }

  closedFilterModal(flag){
    if(flag) {
      this.setState({modalVisible:false});
    }
  }

  openModal(){
    this.setState({modalVisible: true});
  }

  // ### Animations Transitions in the change of Views ##

  changeView(){
    if(this.isCarousel) {
      this.changeToList();
    }
    else {
      this.changeToCarousel();
    }
    this.isCarousel = !this.isCarousel;
  }

  changeToCarousel(){
    Animated.timing( this.state.fadeAnim,
    {
      toValue: 0,
      duration: 500,
      easing: Easing.linear
    }).start(() => {
      this.setState({displayCarousel: "flex", displayList: "none"});
      this.showCarousel();
    });
  }

  showCarousel(){
    Animated.timing( this.state.fadeAnimCarousel,
    {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  changeToList(){
    Animated.timing( this.state.fadeAnimCarousel,
    {
      toValue: 0,
      duration: 500,
      easing: Easing.linear
    }).start(() => {
      this.setState({displayCarousel: "none", displayList: "flex"});
      this.showList();
    });
  }

  showList(){
    Animated.timing( this.state.fadeAnim,
    {
      toValue: 1,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  // ## End of animations methods ###

  render() {
    let {fadeAnim, fadeAnimCarousel, displayList, displayCarousel} = this.state;
    return (
      <View style={container}>

        <FilterModal {...this.state} onCloseFilter={this.closedFilterModal}/>

        <View style={{flexDirection: "row", justifyContent: "center", backgroundColor: "#51abe4", height: 48}}>
          <TouchableHighlight style={{flexDirection: "row"}}
            underlayColor="rgba(255, 255, 255, 0.5)"
            onPress={() => this.openModal()}>
            <View style={{flexDirection: "row"}}>
              <Icon name="sliders" size={24} color="white" style={{textAlignVertical: "center"}}/>
              <Text style={{textAlignVertical: "center", color: "white", fontFamily: "open-sans", fontWeight: "bold", paddingLeft: 8}}>FILTER</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{position: "absolute", right: 0, marginRight: 8, height: 48, justifyContent: "center"}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => this.changeView()}>
            <View style={{flexDirection: "row"}}>
              <Icon name="window-restore" size={16} color="white" style={{textAlignVertical: "center"}}/>
            </View>
          </TouchableHighlight>
        </View>

        <Animated.View style={{flex: 1, opacity: fadeAnim, display: displayList}}>
          <FlatList
            styles={list}
            data={this.state.jobs}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onRefresh={() => this.updateItems(0)}
            refreshing={this.isLoading}
            onEndReached={(distance) => {
              if(distance.distanceFromEnd <= 0 && !this.isCarousel) {
                this.updateItems();
              }
            }}
            onEndReachedThreshold={0.0001}/>
        </Animated.View>

        <Animated.View style={{flex: 1, opacity: fadeAnimCarousel, display: displayCarousel}}>
          <JobsCarousel />
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    jobs: store.jobs,
    filter: store.filter
  }
}

export default connect(mapStateToProps)(List);
