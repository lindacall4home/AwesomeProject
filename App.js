import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Weather from './weather.js'
import Calendar from './calendar.js'

export default class App extends React.Component {
  render() {
    return (
      <View
        style={styles.container}>
        <Text>Hello ipad!</Text>
        <Weather/>
        <Calendar/>
        <Text> Hi Tucker!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
