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
    this.handlePress= this.handlePress.bind(this)
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
  render(){
    return (
      <View style= {styles.requestView}>
        <TextInput value= {this.state.address}
                   placeholder=  'Address'
                   onChangeText= {(value) => this.onAddressChange(value)}
                   style= {styles.textInput}/>
        <TextInput value= {this.state.terminal}
                   placeholder= 'Terminal # (Integer or TB)'
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
  button: {
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    width: 150,
    height: 40
  }
})

export default Request;

