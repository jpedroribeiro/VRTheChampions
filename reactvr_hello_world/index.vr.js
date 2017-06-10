import React, { Component } from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet
} from 'react-vr';


const styles = StyleSheet.create({
  block_one: {
    transform: [
      {
        translate: [0, 0, -3]
      }
    ]
  },
  block_two: {
    transform: [
      {translate: [-2, 1, -1.5]},
      {rotateY: 25}
    ]
  }
});

class Block extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      textColour: 'white'
    };
  }

  render() {
    return (
      <Text
        style={{color: this.state.textColour}}
        onEnter= {() => this.setState({textColour:'red', text: this.props.text})}
        onExit= {() => this.setState({textColour:'white', text: this.props.text})}>
        {this.state.text}
      </Text>
    );
  }
}

class reactvr_hello_world extends Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <View style={styles.block_one}>
          <Block text='Hello world line 1' />
          <Block text='Testing text' />
        </View>

        <View style={styles.block_two}>
          <Block text='Hello world line 2' />
          <Block text='Testing text 44' />
        </View>
      </View>
    );
  }
}



AppRegistry.registerComponent('reactvr_hello_world', () => reactvr_hello_world);

