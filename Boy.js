/**
 * Created by Administrator on 2018/3/19/019.
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Girl from './Girl'
export default class Boy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.text}>I am a Boy.</Text>
          <Text style={styles.text} onPress={() => {
            this.props.navigator.push({
              component: Girl,
              params: {
                word: '一直玫瑰',
                onCallBack(word) {
                  this.setState({
                    word: word
                  })
                }
              },
            })
          }}>送女孩一枝玫瑰</Text>
          <Text style={styles.text}>{{word}}</Text>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'yellow',
    fontSize: 20
  }
})