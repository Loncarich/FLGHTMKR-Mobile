import React, { Component } from 'react';
import {
  View,
  TouchableHighlight,
  TextInput,
  Text,
  StyleSheet
} from 'react-native';
import { TSA } from './src/api';


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
  onAddressChange(e) {
      this.setState({address: e.target.value});
        console.log(e.target.value);
    }

  onTerminalChange(e) {
    this.setState({terminal: e.target.value});
    console.log(event.target.value);
  }
  handlePress(){
    props.fetchData(this.state.terminal, this.state.address, TSA);
  }
  render(){
    return (
      <View>
        <TouchableHighlight onPress= {this.handlePress}>
          <Text>Get Total Travel Time!</Text>
        </TouchableHighlight>
        <TextInput value= {this.state.address}
                   placeholder=  'Address'
                   onChange= {(e) => this.onAddressChange(e)}
                   style= {styles.textInput}/>
        <TextInput value= {this.state.terminal}
                   placeholder= 'Terminal Number (Integer or TBIT for Tom Bradley)'
                   onChange= {(e) => this.onTerminalChange(e)}
                   style= {styles.textInput}/>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})

export default Request;

