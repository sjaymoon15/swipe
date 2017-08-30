import React, { Component } from 'react';
import { View, Animated, PanResponder } from 'react-native';

class Deck extends Component {
  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      //any time user tabs or press down on screen
      //should pR in charge of handling the action? true or false
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: () => {}
    });
    // this.position = position;
    this.state = { panResponder, position };
  }

  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }
  render() {
    return (
      <Animated.View 
        style={this.state.position.getLayout()}
        {...this.state.panResponder.panHandlers}
        >
        {this.renderCards()}
      </Animated.View>
    );
  }
}

export default Deck;