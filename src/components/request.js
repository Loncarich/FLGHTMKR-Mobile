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
        console.log(value);
    }

  onTerminalChange(value) {
    this.setState({terminal: value});
    console.log(value);
  }
  handlePress(){
    this.props.fetchData(this.state.terminal, this.state.address);
  }
  render(){
    return (
      <View>
        <TouchableHighlight onPress= {this.handlePress}>
          <Text>Get Total Travel Time!</Text>
        </TouchableHighlight>
        <TextInput value= {this.state.address}
                   placeholder=  'Address'
                   onChangeText= {(value) => this.onAddressChange(value)}
                   style= {styles.textInput}/>
        <TextInput value= {this.state.terminal}
                   placeholder= 'Terminal Number (Integer or TBIT for Tom Bradley)'
                   onChangeText= {(value) => this.onTerminalChange(value)}
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

