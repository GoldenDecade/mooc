import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'tb_my'
    }
  }
  render() {
    return (
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_popular'}
              title="最热"
              selectedTitleStyle={{color: 'red'}}
              renderIcon={() => <Image style={styles.image} source={require('./res/images/qianbitou.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}  source={require('./res/images/qianbitou.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_popular' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_trending'}
              title="趋势"
              selectedTitleStyle={{color: 'yellow'}}
              renderIcon={() => <Image style={styles.image}  source={require('./res/images/ok.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}  source={require('./res/images/ok.png')} />}
              onPress={() => this.setState({ selectedTab: 'tb_trending' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_favorite'}
              title="收藏"
              selectedTitleStyle={{color: 'red'}}
              renderIcon={() => <Image style={styles.image} source={require('./res/images/qianbitou.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}  source={require('./res/images/qianbitou.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_favorite' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'tb_my'}
              title="我的"
              selectedTitleStyle={{color: 'yellow'}}
              renderIcon={() => <Image style={styles.image} source={require('./res/images/ok.png')} />}
              renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'yellow'}]}  source={require('./res/images/ok.png')} />}
              badgeText="1"
              onPress={() => this.setState({ selectedTab: 'tb_my' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
        </TabNavigator>
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