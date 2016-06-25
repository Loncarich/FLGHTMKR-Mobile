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
    console.log('calling bindFetchData')
    var that= this;
    return fetchData(that);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.header}>
          <Text style= {styles.headerText}>
            FLGHTMKR
          </Text>
        </View>
        <View style= {styles.body}>
          <View style= {styles.requestBody}>
            <Request fetchData= {this.bindFetchData()} />
          </View>
          <View style= {styles.resultsBody}>
            {this.state.totalTime.length > 0 ?
              <Results totalTime= {this.state.totalTime} tsaTime= {this.state.tsaTime} driveTime= {this.state.driveTime} /> :
              <Text></Text>
            }
          </View>
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
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  headerText: {
    fontSize: 50,
    fontWeight: 'bold',
    textShadowColor: 'blue'
  },
  body: {
    flex: 3,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

  },
  requestBody: {
    flex: 4
  },
  resultsBody: {
    flex: 5
  }
});

AppRegistry.registerComponent('flghtmkr', () => flghtmkr);
