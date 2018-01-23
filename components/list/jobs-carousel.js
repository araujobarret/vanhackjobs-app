import React from 'react';
import { connect } from 'react-redux';
import { Dimensions, View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';

import { rowContainer } from '../styles/styles';
import { jobsCarouselStyle } from '../styles/jobs-carousel.styles';

// Get device width and height to calc the carousel item measures
let deviceWidth = Dimensions.get("window").width;
let { width:viewportWidth, height: viewportHeight } = Dimensions.get("window");
let slideWidth = Math.round((85 * viewportWidth) /100);
let itemHorizontalMargin = Math.round((0.01 * viewportWidth) / 100);
let itemWidth = slideWidth + itemHorizontalMargin;

class JobsCarousel extends React.Component {

  constructor(props){
    super(props);
    this._renderItem = this._renderItem.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);
    this.carousel = null;

    this.state = {
      page: 0,
      index: 0,
      jobs: []
    };
  }

  // Update the state
  componentWillReceiveProps(nextProps) {
    this.setState({page: nextProps.jobs.page, jobs: nextProps.jobs.jobs, index: 0}, () => {
      if(this.state.page <= 1) {
        setTimeout(() => {this.carousel.snapToItem(0)}, 1000);
      }
    });
  }

  scrollToIndex(){
    if(this.carousel){
      this.carousel.snapToItem(0);
    }
  }

  // Render the "NEW" tag for each new Job
  _renderNewTag(dateValue){
    let date = new Date();
    let jobDate = new Date(dateValue);
    let diffDays = new Date(date.getTime() - jobDate.getTime());

    // Only the jobs from the last 7 days will receive this tag
    if(diffDays.getUTCDate()-1 <= 7) {
      return (
        <Text style={jobsCarouselStyle.newTag}>NEW</Text>
      );
    }
  }

  // Render the skills array of the job
  _renderSkills(skills) {
    let skillsComponent = [];
    for(let skill of skills) {
      skillsComponent.push(<Text key={"carousel_skill"+skill} style={jobsCarouselStyle.skillText}>{skill}</Text>);
    }
    return skillsComponent;
  }

  // Render each item from the carousel
  _renderItem(item, index){
    return (
      <TouchableHighlight underlayColor={"white"} onPress={this.scrollToIndex}
        style={[jobsCarouselStyle.itemBody, {width: itemWidth}]}>
        <View style={{padding: 16}}>
          <Text style={jobsCarouselStyle.itemTitle}>
            {item.item.title}
          </Text>

          <View style={jobsCarouselStyle.location}>
            <View style={rowContainer}>
              <Icon name="map-marker" size={32} color="#51abe4"/>
              <Text style={jobsCarouselStyle.locationText}>{item.item.location.city}, {item.item.location.country}</Text>
            </View>
            {this._renderNewTag(item.item.date)}
          </View>
          <Text style={jobsCarouselStyle.description}>
            {item.item.description.slice(item.item.description, 50) + "..."}
          </Text>
          <View style={jobsCarouselStyle.skillsContainer}>
            <Icon name="tags" size={22} color="#51abe4"/>
            <Text style={jobsCarouselStyle.skillsTitle}>Skills</Text>
          </View>
          <View style={jobsCarouselStyle.skillsItem}>
            {this._renderSkills(item.item.skills)}
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <Carousel
         activeSlideAlignment={'center'}
         ref={(c) => { this.carousel = c }}
         data={ this.state.jobs }
         firstItem={ this.state.index }
         renderItem={ this._renderItem }
         sliderWidth={viewportWidth}
         enableMomentum={false}
         itemWidth={itemWidth}
         inactiveSlideScale={0.9}
         inactiveSlideOpacity={0.5}
         removeClippedSubviews={false}
         customAnimationType={'spring'}/>
     );
  }

}

const mapStateToProps = (store) => {
  return {
    jobs: store.jobs
  }
}

export default connect(mapStateToProps)(JobsCarousel);
