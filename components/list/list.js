import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, View, Text, TextInput, Button, StyleSheet } from 'react-native';

import ListItem from './list-item';
import Loading from '../ui/loading';
import { container, list} from '../styles/styles';
import { startGetJobs } from '../../actions/jobs';

class List extends React.Component {
  isLoading = true;

  constructor(props) {
    super(props);
    console.log("Props", props);

    this.state = {
      page: -1,
      jobs: []
    };
  }

  componentWillReceiveProps(nextProps) {
    // Activate/Deactivate the loader
    if(nextProps.jobs.jobs == null) {
      this.isLoading = true;
    }
    else {
      this.isLoading = false;
      this.setState({jobs: nextProps.jobs.jobs});
    }
  }

  componentDidMount(){
    this.updateItems();
  }

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({item}) => {
    return (
      <ListItem {...item}/>
    );
  }

  updateItems() {
    console.log("PROPS", this.props);
    let {dispatch} = this.props;
    this.setState({page: ++this.state.page}, () => {dispatch(startGetJobs(this.state.page));});
  }

  render() {
    if(!this.isLoading) {
      return (
        <View style={container}>
          <FlatList
            styles={list}
            data={this.state.jobs}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            onEndReached={() => {this.updateItems()}}
            />
        </View>
      );
    }
    else {
      return <Loading />
    }
  }
}

const mapStateToProps = (store) => {
  return {
    jobs: store.jobs
  }
}

export default connect(mapStateToProps)(List);
