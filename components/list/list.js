import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, Modal, Picker, View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListItem from './list-item';
import FilterModal from './filter-modal';
import Loading from '../ui/loading';
import { container, list} from '../styles/styles';
import { startGetJobs } from '../../actions/jobs';

class List extends React.Component {
  isLoading = true;

  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      jobs: [],
      filter: null,
      modalVisible: false
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

  componentDidMount(){
    let {dispatch} = this.props;
    this.updateItems();
  }

  openFilterModal() {
    this.setState({ modalVisible:true });
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

  render() {    
    return (
      <View style={container}>

        <FilterModal modalVisible={this.state.modalVisible}/>

        <View style={{flexDirection: "row", backgroundColor: "#51abe4", height: 48}}>
          <TouchableHighlight style={{flexDirection: "row", marginLeft: 16}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => this.openFilterModal()}>
            <View style={{flexDirection: "row"}}>
              <Icon name="sliders" size={24} color="white" style={{textAlignVertical: "center"}}/>
              <Text style={{textAlignVertical: "center", color: "white", fontFamily: "open-sans", fontWeight: "bold", paddingLeft: 8}}>FILTER</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{position: "absolute", right: 0, marginRight: 16, height: 48, justifyContent: "center"}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => console.log("Pressed")}>
            <View style={{flexDirection: "row"}}>
              <Icon name="window-maximize" size={16} color="white" style={{textAlignVertical: "center"}}/>
            </View>
          </TouchableHighlight>
        </View>

        <FlatList
          styles={list}
          data={this.state.jobs}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onRefresh={() => this.updateItems(0)}
          refreshing={this.isLoading}
          onEndReached={(distance) => {
            if(distance.distanceFromEnd <= 0 ) {
              this.updateItems();
            }
          }}
          onEndReachedThreshold={0.0001}
          />
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
