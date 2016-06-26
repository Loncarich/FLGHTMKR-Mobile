import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';



class Request extends Component {
  constructor(props){
    super(props);
    this.state= {
      address: '',
      terminal: '',
      searchString: ''
    };
    this.handlePress= this.handlePress.bind(this);
    this.handleGeoPress= this.handleGeoPress.bind(this);
  }
  onAddressChange(value) {
      this.setState({address: value});
    }

  onTerminalChange(value) {
    this.setState({terminal: value});
  }
  handlePress(){
    this.props.fetchData(this.state.terminal, this.state.address);
    this.setState({terminal: '', address: ''});
  }
  handleGeoPress(){
    navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log(position);
                this.setState({address: position.coords.latitude+', '+position.coords.longitude})
              },
              (error) => alert(error.message),
              {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
            )
  }
  render(){
    return (
      <View style= {styles.requestView}>
        <TextInput value= {this.state.address}
                   placeholder=  'Enter Address'
                   onChangeText= {(value) => this.onAddressChange(value)}
                   style= {styles.textInput}/>
        <Text>or</Text>
        <TouchableHighlight onPress= {this.handleGeoPress}
                            style= {styles.geoButton}
                            underlayColor='#ff1493'>
          <Text>Use Current Location</Text>
        </TouchableHighlight>
        <TextInput value= {this.state.terminal}
                   placeholder= 'Enter Terminal # (Integer or TB)'
                   onChangeText= {(value) => this.onTerminalChange(value)}
                   style= {styles.textInput}/>
        <TouchableHighlight style= {styles.button}
                            underlayColor='#ff1493'
                            onPress= {this.handlePress}>
          <Text>Get Total Travel Time!</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  requestView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250,
    margin: 5,
    textAlign: 'center'
  },
  geoButton: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 35,
    width: 150,
    height: 40
  }
})

export default Request;

