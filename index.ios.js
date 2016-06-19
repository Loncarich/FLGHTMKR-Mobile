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

      fetchTSA(terminal, callback){

       $.ajax({
     url: '/tsa',
     dataType: 'json',
     type: 'GET',
     success: function onSuccess(resp){

         callback(resp, terminal);
        },
     error: function onError(jq,statusText,errText){
         console.log("Error");
        },
     });

  };
     fetchGoogle(address, callback){
           $.ajax({
         url: '/google',
         data: address,
         dataType: 'text',
         type: 'POST',
         success: function onSuccess(resp){
          console.log('Success inside Google', resp);
          console.log(resp);
              callback(resp);
            },
         error: function onError(jq,statusText,errText){
             console.log("Error");
            },
         });
     }

     sortData(data, terminal){
       var waitTimes= data[0].WaitTimes;
       for (var i= 0; i< waitTimes.length; i++){
         if (waitTimes[i].CheckpointIndex == terminal){
           this.setState({tsaTime: ((parseInt(waitTimes[i].WaitTimeIndex, 10) -1) * 10) +' Minutes'});
            break;
          }
          else if (i === waitTimes.length -1){
            this.setState({tsaTime: 20});
          }
        }
        var data= JSON.parse(data[1]);
        this.setState({driveTime: parseInt(data.routes[0].legs[0].duration.text, 10) +' Minutes'});
        this.setState({totalTime: (parseInt(this.state.driveTime, 10) + parseInt(this.state.tsaTime,10)) + ' Minutes'});

     }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
