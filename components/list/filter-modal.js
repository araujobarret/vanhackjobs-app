import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Picker, View, Text, ScrollView, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { container, list} from '../styles/styles';
import { modalFilter } from '../styles/modalFilter.styles';

import { startGetJobs } from '../../actions/jobs';
import { startGetSkills, selectSkill, startGetCountries, startSelectCountry, selectCity, clearFilterData } from '../../actions/filter';

class FilterModal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      ...props.filter,
      jobs: props.jobs
    };
  }

  // Render the skills array, the selected ones will have a different style
  _renderSkills() {
    let skills = [];
    for(let skill of this.state.skills) {
      skills.push(
        <Text
          style={
            this.state.selectedSkills.indexOf(skill._id) == -1 ? modalFilter.skillNormal : modalFilter.skillSelected
          }
          onPress={() => this.addSkill(skill._id)}
          key={"filter_text_"+skill._id}>
          {skill._id}
        </Text>
      );
    }
    return skills;
  }

  // Render the pickers items, for countries and cities
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
    this.setState({...nextProps.filter, jobs: nextProps.jobs});
  }

  componentDidMount() {
    let {dispatch} = this.props;
    dispatch(startGetSkills());
    dispatch(startGetCountries());
  }

  closeModal() {
    this.props.onCloseFilter(true);
  }

  // Dispatch the action to clear the filters
  clearFilters() {
    let {dispatch} = this.props;
    dispatch(startGetJobs(0, null));
    dispatch(clearFilterData());
    this.closeModal();
  }

  // Add a skill to the selected state array
  addSkill(skill) {
    let {dispatch} = this.props;
    dispatch(selectSkill(skill));
  }

  // Change the selected country and get dispatch the request to get the cities of the country
  changeCountry(value){
    let {dispatch} = this.props;
    if(value != "choose") {
      dispatch(startSelectCountry(value));
    }
    else {
      dispatch(startSelectCountry(null));
    }
  }

  // Change the selected city
  changeCity(value){
    let {dispatch} = this.props;
    dispatch(selectCity(value));
  }

  // Dispatch the action to do the query with filters
  filter() {
    let {dispatch} = this.props;
    dispatch(startGetJobs(0, this.state));
    this.closeModal();
  }

  // Render the modal
  render() {
    return (
      <Modal
          visible={this.props.modalVisible}
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.closeModal()}>
          <View style={modalFilter.modalContainer}>
            <View style={modalFilter.pickerContainer}>
              <Text style={modalFilter.pickerText}>Country: </Text>
              <Picker mode={'dialog'} style={{flex: 5}}
                selectedValue={this.state.selectedCountry}
                onValueChange={(value) => this.changeCountry(value)}>
                {this._renderPickerItem("countries")}
              </Picker>
            </View>

            <View style={modalFilter.pickerContainer}>
              <Text style={modalFilter.pickerText}>City: </Text>
              <Picker mode={'dialog'} style={{flex: 5}}
                selectedValue={this.state.selectedCity}
                onValueChange={(value) => this.changeCity(value)}>
                {this._renderPickerItem("cities")}
              </Picker>
            </View>

            <ScrollView style={modalFilter.skillsContainer}>
              <Text style={modalFilter.skillsTitle}>Skills: </Text>
              <View  style={modalFilter.skillsArray}>
                {this._renderSkills()}
              </View>
            </ScrollView>

            <View style={modalFilter.buttonsContainer}>
              <TouchableHighlight
                style={modalFilter.buttonClear}
                underlayColor="rgba(255, 255, 255, 0.5)"
                onPress={() => this.clearFilters()}>
                <Text>CLEAR</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={modalFilter.buttonFilter}
                underlayColor="rgba(255, 255, 255, 0.5)"
                onPress={() => this.filter()}>
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

const styles = StyleSheet.create({
  skill: {
    borderWidth: 1,
    fontWeight: "bold",
    margin: 4,
    padding: 4
  },
  normal: {
    borderWidth: 1,
    fontWeight: "bold",
    margin: 4,
    padding: 4,
    borderColor: "#51abe4",
    backgroundColor: "white",
    color: "#51abe4",
  },
  selected: {
    borderWidth: 1,
    fontWeight: "bold",
    margin: 4,
    padding: 4,
    borderColor: "white",
    backgroundColor: "#51abe4",
    color: "white",
  }
});

export default connect(mapStateToProps)(FilterModal);
