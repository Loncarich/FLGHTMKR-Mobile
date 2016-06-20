/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Results from './src/components/results';
import Request from './src/components/request';
import fetchData  from './src/api';

class flghtmkr extends Component {
    constructor(props){
      super(props);
      this.state= {
        totalTime: '',
        tsaTime: '',
        driveTime: '',
        lat: 33.9485094,
        lng: -118.3995575
      }
    }
  render() {
    return (
      <View style={styles.container}>
        <Text >
          FLGHTMKR
        </Text>
        <View>
          <Request fetchData= {fetchData} />
        </View>
        <View >
          <Results totalTime= {this.state.totalTime} tsaTime= {this.state.tsaTime} driveTime= {this.state.driveTime} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('flghtmkr', () => flghtmkr);
