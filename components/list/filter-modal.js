import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Picker, View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { container, list} from '../styles/styles';
import { startGetJobs } from '../../actions/jobs';
import { startGetSkills, startGetCountries, startSelectCountry, selectCity, clearFilterData } from '../../actions/filter';

class FilterModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props.filter,
      jobs: props.jobs,
      modalVisible: props.modalVisible
    };
  }

  _renderSkills() {
    let skills = [];
    for(let skill of this.state.skills) {
      skills.push(
        <Text
          style={{backgroundColor: "lightgreen", color: "white", fontWeight: "bold", margin: 4, padding: 4}}
          onPress={(text) => console.log("Text value:", text)}
          key={"filter_text_"+skill._id}>
          {skill._id}
        </Text>
      );
    }
    return skills;
  }

  _renderPickerItem(type) {
    let pickers = [];
    switch(type){
      case "countries":
        pickers.push(<Picker key={"filtercountrieschoose"} label={"Choose a country"} value={"choose"}/>);
        if(this.state.countries) {
          for(let country of this.state.countries) {
            pickers.push(<Picker key={"filter"+country._id} label={country._id} value={country._id}/>);
          }
        }
        break;
      case "cities":
        pickers.push(<Picker key={"filtercitieschoose"} label={"Choose a city"} value={"choose"}/>);
        if(this.state.cities) {
          for(let city of this.state.cities) {
            pickers.push(<Picker key={"filter"+city._id} label={city._id} value={city._id}/>);
          }
        }
        break;
    }
    return pickers;
  }

  componentWillReceiveProps(nextProps){
    console.log("NextProps", nextProps);
    //this.setState({...nextProps.filter, jobs: nextProps.jobs, modalVisible: this.props.modalVisible});
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(startGetSkills());
    dispatch(startGetCountries());
  }

  closeModal() {
    this.setState({modalVisible: false});
  }

  clearFilters() {
    let {dispatch} = this.props;
    dispatch(clearFilterData());
    this.closeModal();
  }

  changeCountry(value){
    let {dispatch} = this.props;
    if(value != "choose") {
      dispatch(startSelectCountry(value));
    }
    else {
      dispatch(startSelectCountry(null));
    }
  }

  changeCity(value){
    let {dispatch} = this.props;
    dispatch(selectCity(value));
  }

  filter() {
    let {dispatch} = this.props;
    dispatch(startGetJobs(0, this.state));
    this.closeModal();
  }

  render() {
    return (
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
              <TouchableHighlight
                style={{marginRight: 8, height: 40, justifyContent: "center"}}
                underlayColor="rgba(255, 255, 255, 0.5)"
                onPress={() => this.clearFilters()}>
                <Text>CLEAR</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{height: 40, justifyContent: "center"}}
                underlayColor="rgba(255, 255, 255, 0.5)"
                onPress={() => console.log("Pressed")}>
                <Text>FILTER</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    filter: store.filter,
    jobs: store.jobs
  }
}

export default connect(mapStateToProps)(FilterModal);
