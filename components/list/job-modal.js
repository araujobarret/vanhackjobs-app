import React from 'react';
import { Button, Modal, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import { rowContainer } from '../styles/styles';
import { listItems } from '../styles/listsItems.styles';
import { modalJob } from '../styles/modalJob.styles';

export default class JobModal extends React.Component {

  constructor(props) {
    super(props);

    // Only shows the firsts 40th characters from the description
    this.state = {
      _id: props._id,
      title: props.title,
      fullDescription: props.fullDescription,
      date: props.date,
      skills: props.skills,
      location: props.location,
      modalItemVisible: props.modalItemVisible
    };
  }

  _renderModalSkills() {
    let skills = [];

    for(let skill of this.state.skills) {
      skills.push(<Text key={this.state._id+"modal"+skill} style={[listItems.listItemSkill, modalJob.modalSkill]}>{skill}</Text>);
    }

    return skills;
  }

  componentWillReceiveProps(nextProps){
    this.setState({modalItemVisible: nextProps.modalItemVisible});
  }

  closeModal() {
    this.setState({modalItemVisible:false}, () => { this.props.onClose(true)});
  }

  render() {
    return (
      <Modal
        visible={this.state.modalItemVisible}
        animationType={'slide'}
        onRequestClose={() => this.closeModal()}>
        <View style={modalJob.modalContainer}>
          <Text style={modalJob.modalTitle}>{this.state.title}</Text>
          <View style={[rowContainer, modalJob.modalIcon]}>
            <Icon name="map-marker" size={40} color="#51abe4" style={{textAlignVertical: "center"}}/>
            <View style={modalJob.modalLocation}>
              <Text style={modalJob.modalLocationSubText}>Location</Text>
              <Text style={modalJob.modalLocationText}>{this.state.location.country}, {this.state.location.city}</Text>
            </View>
          </View>
          <Text style={modalJob.modalDescription}>Description: {this.state.fullDescription}</Text>
          <Text style={modalJob.modalSkillsTitle}>Required Skills</Text>
          <View style={modalJob.modalSkills}>
            {this._renderModalSkills()}
          </View>
          <View style={modalJob.modalButtons}>
            <TouchableHighlight
              onPress={() => this.closeModal()}
              style={modalJob.modalCloseButton}
              underlayColor="white">
              <Text  style={modalJob.modalCancelText}>CLOSE</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    );
  }
}
