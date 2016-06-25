import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Results= (props) => (
  <View style= {styles.resultsView}>
    <Text style= {styles.resultsTotal}>
    Total Time: {props.totalTime}
    </Text>
    <Text style= {styles.resultsOther}>
    TSA Wait Time: {props.tsaTime}
    </Text>
    <Text style= {styles.resultsOther}>
    Drive Time: {props.driveTime}
    </Text>
  </View>
);

const styles= StyleSheet.create({
  resultsView: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  resultsTotal: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  resultsOther: {
    fontSize: 20
  }
});

export default Results;