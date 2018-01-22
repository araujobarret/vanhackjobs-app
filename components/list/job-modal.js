import React from 'react';
import { Button, Modal, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class JobModal extends React.Component {

  constructor(props) {
    super(props);

    // Only shows the firsts 40th characters from the description
    this.state = {
      id: props.id,
      title: props.title,
      description: props.description.slice(0, 40) + "...",
      date: props.date,
      skills: props.skills,
      location: props.location,
      fadeAnim: new Animated.Value(0),
      modalVisible: false
    };
  }

  render() {
    return (
      <Modal
        visible={this.state.modalVisible}
        animationType={'slide'}
        onRequestClose={() => this.closeModal()}>
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: 'grey'}}>
          <View style={{alignItems: 'center'}}>
            <Text>This is content inside of modal component</Text>
            <Button onPress={() => this.closeModal()}
                title="Close modal"
            >
            </Button>
          </View>
        </View>
      </Modal>
    );
  }
}
