import React from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, FlatList, Modal, Picker, View, Text, StyleSheet, ScrollView, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListItem from './list-item';
import Loading from '../ui/loading';
import { container, list} from '../styles/styles';
import { startGetJobs } from '../../actions/jobs';
import { startGetSkills, startGetCountries, startGetCities } from '../../actions/filter';

class List extends React.Component {
  isLoading = true;

  constructor(props) {
    super(props);

    this.state = {
      page: -1,
      jobs: [],
      skills: [],
      cities: [],
      countries: [],
      filter: null,
      selectedCountry: null,
      selectedCity: null,
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
      this.setState({jobs: nextProps.jobs.jobs});
    }
    if(nextProps.filter.skills) {
      this.setState({skills: nextProps.filter.skills});
    }
    if(nextProps.filter.countries) {
      this.setState({countries: nextProps.filter.countries});
    }
    if(nextProps.filter.cities) {
      this.setState({cities: nextProps.filter.cities});
    }
  }

  componentDidMount(){
    let {dispatch} = this.props;
    this.updateItems();
    dispatch(startGetSkills());
    dispatch(startGetCountries());
  }

  openModal() {
    this.setState({modalVisible:true});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  changeCountry(value){
    let {dispatch} = this.props;
    if(value != "choose") {
      this.setState({selectedCountry: value}, () => dispatch(startGetCities(this.state.selectedCountry)));
    }
    else {
      this.setState({ selectedCountry: null, selectedCity: null, cities: null});
    }
  }

  changeCity(value){
    this.setState({selectedCity: value != "choose" ? value : null});
  }

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({item}) => {
    return (
      <ListItem {...item}/>
    );
  }

  _renderSkills() {
    let skills = [];
    for(let skill of this.state.skills) {
      skills.push(
        <Text key={"filter"+skill._id} style={{backgroundColor: "lightgreen", color: "white", fontWeight: "bold", margin: 4, padding: 4}}>{skill._id}</Text>
      );
    }
    return skills;
  }

  _renderPickerItem(type) {
    let pickers = [];
    switch(type){
      case "countries":
        pickers.push(<Picker key={"filtercountrieschoose"} label={"Choose a country"} value={"choose"}/>);
        for(let country of this.state.countries) {
          pickers.push(<Picker key={"filter"+country._id} label={country._id} value={country._id}/>);
        }
        break;
      case "cities":
        pickers.push(<Picker key={"filtercitieschoose"} label={"Choose a city"} value={"choose"}/>);
        for(let city of this.state.cities) {
          pickers.push(<Picker key={"filter"+city._id} label={city._id} value={city._id}/>);
        }
        break;
    }
    return pickers;
  }

  updateItems() {
    let {dispatch} = this.props;
    this.setState({page: ++this.state.page}, () => {
      dispatch(startGetJobs(this.state.page));
    });
  }

  render() {
    return (
      <View style={container}>
        <Modal
          visible={this.state.modalVisible}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.closeModal()}>
          <View style={{ borderColor: "#cecece", borderWidth: 1, backgroundColor: "#f2f6f9", flex: 1, alignSelf: "stretch", marginVertical: 80, marginHorizontal: 20, borderRadius: 6, padding: 16}}>
            <View style={{ flexDirection: "row", borderBottomWidth: 2, borderColor: "#51abe4"}}>
              <Text style={{flex: 1, textAlignVertical: "center", fontWeight: "bold"}}>Country: </Text>
              <Picker mode={'dialog'} style={{flex: 5}}
                selectedValue={this.state.selectedCountry}
                onValueChange={(value) => this.changeCountry(value)}>
                {this._renderPickerItem("countries")}
              </Picker>
            </View>

            <View style={{ flexDirection: "row", borderBottomWidth: 2, borderColor: "#51abe4"}}>
              <Text style={{flex: 1, textAlignVertical: "center", fontWeight: "bold"}}>City: </Text>
              <Picker mode={'dialog'} style={{flex: 5}}
                selectedValue={this.state.selectedCity}
                onValueChange={(value) => this.changeCity(value)}>
                {this._renderPickerItem("cities")}
              </Picker>
            </View>

            <ScrollView style={{marginTop: 8}}>
              <Text style={{textAlignVertical: "center", fontWeight: "bold"}}>Skills: </Text>
              <View  style={{ flexDirection: "row", flexWrap: "wrap"}}>
                {this._renderSkills()}
              </View>
            </ScrollView>

            <View style={{position: "absolute", right: 0, bottom: 0, marginRight: 16, marginBottom: 8, flexDirection: "row"}}>
              <TouchableHighlight style={{marginRight: 8, height: 40, justifyContent: "center"}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => console.log("Pressed")}>
                <Text>CLEAR</Text>
              </TouchableHighlight>
              <TouchableHighlight style={{height: 40, justifyContent: "center"}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => console.log("Pressed")}>
                <Text>SAVE</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <View style={{flexDirection: "row", justifyContent: "center", backgroundColor: "#51abe4", height: 48}}>
          <TouchableHighlight style={{flexDirection: "row"}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => this.openModal()}>
            <View style={{flexDirection: "row"}}>
              <Icon name="sliders" size={24} color="white" style={{textAlignVertical: "center"}}/>
              <Text style={{textAlignVertical: "center", color: "white", fontFamily: "open-sans", fontWeight: "bold", paddingLeft: 8}}>FILTER</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{position: "absolute", right: 0, marginRight: 8, height: 48, justifyContent: "center"}} underlayColor="rgba(255, 255, 255, 0.5)" onPress={() => console.log("Pressed")}>
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
          onRefresh={() => console.log("Refreshed")}
          refreshing={this.isLoading}
          onEndReached={(distance) => {
            console.log("Distance", distance.distanceFromEnd);
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
