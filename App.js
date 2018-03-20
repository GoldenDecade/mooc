import React from 'react';
import { StyleSheet, Text, View, Image, Navigator } from 'react-native';
import Boy from './Boy'
import TabNavigator from 'react-native-tab-navigator';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
        <View style={styles.container}>
          <Navigator
            initialRoute= {{'component': Boy}}
            renderScene={(route, navigator)=> {
              console.log(route);
              let Component = route.component;
              return <Component navigator={navigator} {...route.params}></Component>
            }}
          ></Navigator>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red'
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow'
  },
  image: {
    width: 22,
    height: 22
  }
});