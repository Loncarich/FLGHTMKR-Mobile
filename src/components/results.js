import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Results= (props) => (
  <View>
    <Text>
    Total Time: {props.totalTime}
    </Text>
    <Text>
    TSA Wait Time: {props.tsaTime}
    </Text>
    <Text>
    Drive Time: {props.driveTime}
    </Text>
  </View>
);

export default Results;