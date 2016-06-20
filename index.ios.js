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
import Results from './src/components/results.js';
import Request from './src/components/request.js';
import fetchData  from './src/api.js';

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
    this.bindFetchData= this.bindFetchData.bind(this);
    }

  bindFetchData(){
    var that= this;
    return fetchData(that);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text >
          FLGHTMKR
        </Text>
        <View>
          <Request fetchData= {this.bindFetchData()} />
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
