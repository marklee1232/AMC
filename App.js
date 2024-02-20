import React, { Component } from 'react';
import { StyleSheet, Switch, View, Text, Image } from 'react-native';

export default class App extends Component {
  state = {
    switchValue: false,
    backgroundColor: 'black',
    textColor: 'white',
    imageSource: require('./off.jpg')
  }

  handleSwitchToggle = (switchValue) => {
    const textColor = switchValue ? 'black' : 'white';
    const backgroundColor = switchValue ? 'yellow' : 'black';
    const imageSource = switchValue ? require('./on.png') : require('./off.jpg');
    this.setState({ switchValue, textColor, backgroundColor, imageSource });
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.backgroundColor }]}>
        <Text style={[styles.textStyle, { color: this.state.textColor }]}>AMC MP1</Text>
        <Image source={this.state.imageSource} style={{ width: 100, height: 100 }} />
        <Switch
          style={{ marginTop: 20 }}
          value={this.state.switchValue}
          onValueChange={this.handleSwitchToggle}
        />
        <Text style={[styles.textStyle, { color: this.state.textColor }]}>
          {this.state.switchValue ? 'on' : 'off'}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    margin: 20,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
