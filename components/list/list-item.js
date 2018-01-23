import React from 'react';
import { Animated, Easing, Modal, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import JobModal from './job-modal';
import {
  rowContainer,
  listItem,
  listItemText,
  listItemTitle,
  listItemDescription,
  listItemSkill,
  listItemNew,
  listItemIcon,
  listItemIconText,
  modalContainer,
  modalTitle,
  modalIcon,
  modalLocation,
  modalLocationSubText,
  modalLocationText,
  modalDescription,
  modalSkills,
  modalSkillsTitle,
  modalSkill,
  modalButtons,
  modalCloseButton,
  modalSaveButton,
  modalCancelText,
  modalSaveText } from '../styles/styles';

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);

    // Only shows the firsts 40th characters from the description
    this.state = {
      _id: props._id,
      title: props.title,
      description: props.description.slice(0, 40) + "...",
      fullDescription: props.description,
      date: props.date,
      skills: props.skills,
      location: props.location,
      fadeAnim: new Animated.Value(0),
      modalItemVisible: false,
      isSaved: props.isSaved ? props.isSaved : false
    };
  }

  _renderNewTag(){
    let date = new Date();
    let jobDate = new Date(this.state.date);
    let diffDays = new Date(date.getTime() - jobDate.getTime());

    // Only the jobs from the last 7 days will receive this tag
    if(diffDays.getUTCDate()-1 <= 7) {
      return (
        <Text style={listItemNew}>NEW</Text>
      );
    }
  }

  _renderSkills() {
    let skills = [];
    // Loop to render each skill from skills array, maximum of 4 skills
    let i = 0;
    for(let skill of this.state.skills){
      if(i <= 3) {
        skills.push(<Text style={listItemSkill} key={this.state._id+skill}>{skill}</Text>);
        i++;
      }
      else {
        break;
      }
    }
    return skills;
  }

  openItemModal() {
    this.setState({modalItemVisible:true});
  }

  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 500
      }
    ).start();
  }

  render() {
    let {fadeAnim} = this.state;
    return (
      <Animated.View style={[listItem, {opacity: fadeAnim}]}>

        <JobModal {...this.state} />

        <TouchableOpacity onPress={ () => this.openModal()}>
          <View style={rowContainer}>
            <Text style={listItemTitle}>{this.state.title}</Text>
            {this._renderNewTag()}
          </View>
          <Text style={listItemDescription}>{this.state.description}</Text>
          <View style={rowContainer}>
            <View style={listItemIcon}><Icon name="tags" size={18} color="#51abe4"/></View>
            <Text style={[listItemText, listItemIconText]}>Skills: </Text>
            {this._renderSkills()}
          </View>
          <View style={rowContainer}>
            <View style={listItemIcon}><Icon name="map-marker" size={24} color="#51abe4"/></View>
            <Text style={[listItemText, listItemIconText]}>{this.state.location.city}, {this.state.location.country}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
