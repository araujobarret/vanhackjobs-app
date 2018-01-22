import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

class FilterModal extends React.Component {

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
      modalVisible: props.modalVisible
    };
  }

  _renderModalSkills() {
    let skills = [];

    for(let skill of this.state.skills) {
      skills.push(<Text key={this.state._id+"modal"+skill} style={[listItemSkill, modalSkill]}>{skill}</Text>);
    }

    return skills;
  }

  componentWillReceiveProps(nextProps){
    this.setState({modalVisible: nextProps.modalVisible});
  }

  saveJob() {
    this.setState({isSaved: !this.state.isSaved});
  }

  closeModal() {
    this.setState({modalVisible:false});
  }

  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType={'slide'}
        onRequestClose={() => this.closeModal()}>
        <View style={modalContainer}>
          <Text style={modalTitle}>{this.state.title}</Text>
          <View style={[rowContainer, modalIcon]}>
            <Icon name="map-marker" size={40} color="#51abe4" style={{textAlignVertical: "center"}}/>
            <View style={modalLocation}>
              <Text style={modalLocationSubText}>Location</Text>
              <Text style={modalLocationText}>{this.state.location.country}, {this.state.location.city}</Text>
            </View>
          </View>
          <Text style={modalDescription}>Description: {this.state.fullDescription}</Text>
          <Text style={modalSkillsTitle}>Required Skills</Text>
          <View style={modalSkills}>
            {this._renderModalSkills()}
          </View>
          <View style={modalButtons}>
            <TouchableHighlight
              onPress={() => this.closeModal()}
              style={modalCloseButton}
              underlayColor="white">
              <Text  style={modalCancelText}>CLOSE</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => this.saveJob()}
              style={modalSaveButton}
              underlayColor="white">
              <Text style={modalSaveText}>{ this.state.isSaved ? "SAVED" : "SAVE"}</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
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
