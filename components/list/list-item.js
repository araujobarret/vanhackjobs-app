import React from 'react';
import { Animated, Easing, Modal, View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import JobModal from './job-modal';
import { rowContainer } from '../styles/styles';
import { listItems } from '../styles/listsItems.styles';

export default class ListItem extends React.Component {
  // Initialize the state and do the bindings
  constructor(props) {
    super(props);
    this.closedModal = this.closedModal.bind(this);
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

  // If the job is new, render the 'NEW' tag to it
  _renderNewTag(){
    let date = new Date();
    let jobDate = new Date(this.state.date);
    let diffDays = new Date(date.getTime() - jobDate.getTime());

    // Only the jobs from the last 7 days will receive this tag
    if(diffDays.getUTCDate()-1 <= 7) {
      return (
        <Text style={listItems.listItemNew}>NEW</Text>
      );
    }
  }

  // Render each skill from the array, with a limit of 4 skills at this screen
  _renderSkills() {
    let skills = [];
    // Loop to render each skill from skills array, maximum of 4 skills
    let i = 0;
    for(let skill of this.state.skills){
      if(i <= 3) {
        skills.push(<Text style={listItems.listItemSkill} key={this.state._id+skill}>{skill}</Text>);
        i++;
      }
      else {
        break;
      }
    }
    return skills;
  }

  // Open the job modal for more iformation about the job
  openModal() {
    this.setState({modalItemVisible:true});
  }

  // Get the property binding from the modal onClose event
  closedModal(flag){
    if(flag) {
      this.setState({modalItemVisible:false});
    }
  }

  // Start the animation of fade in
  componentDidMount(){
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 500
      }
    ).start();
  }

  // Render the List Item component
  render() {
    let {fadeAnim} = this.state;
    return (
      <Animated.View style={[listItems.listItem, {opacity: fadeAnim}]}>

        <JobModal {...this.state} onClose={this.closedModal}/>

        <TouchableOpacity onPress={ () => this.openModal()}>
          <View style={rowContainer}>
            <Text style={listItems.listItemTitle}>{this.state.title}</Text>
            {this._renderNewTag()}
          </View>
          <Text style={listItems.listItemDescription}>{this.state.description}</Text>
          <View style={rowContainer}>
            <View style={listItems.listItemIcon}><Icon name="tags" size={18} color="#51abe4"/></View>
            <Text style={[listItems.listItemText, listItems.listItemIconText]}>Skills: </Text>
            {this._renderSkills()}
          </View>
          <View style={rowContainer}>
            <View style={listItems.listItemIcon}><Icon name="map-marker" size={24} color="#51abe4"/></View>
            <Text style={[listItems.listItemText, listItems.listItemIconText]}>{this.state.location.city}, {this.state.location.country}</Text>
          </View>
        </TouchableOpacity>
      </Animated.View>
    );
  }
}
