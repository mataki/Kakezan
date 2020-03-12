/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

declare var global: {HermesInternal: null | {}};

const App = () => {
  const [numbers, setNumber] = useState([]);
  const [message, setMessage] = useState(null);

  const [maxSuccess, setMaxSuccess] = useState(0);

  const random = () => {
    return Math.floor(Math.random() * Math.floor(8)) + 2;
  };

  const rotateHands = array => {
    const result = array.slice();

    for (let index = 0; index < random(); index++) {
      const x = result.shift();
      result.push(x);
    }

    return result;
  };

  const resetNumber = () => {
    const a = random();
    const b = random();

    const c = (a - 1) * b;
    const d = (a + 1) * b;

    const hands = rotateHands([a * b, c, d]);

    setMessage(null);
    setNumber([a, b].concat(hands));
  };

  const pressAnswer = num => {
    return () => {
      if (numbers[0] * numbers[1] === num) {
        setMaxSuccess(maxSuccess + 1)
        setMessage('せいかい');
        setTimeout(resetNumber, 1000);
      } else {
        setMaxSuccess(0)
        setMessage('まちがい');
      }
    };
  };

  if (numbers.length === 0) {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Button onPress={resetNumber} title={'すたーと'} />
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text style={styles.text}>{numbers[0]}</Text>
          <Text style={{fontSize: 60}}>x</Text>
          <Text style={styles.text}>{numbers[1]}</Text>
        </View>
        <View style={{alignItems: 'center', marginVertical: 20, height: 40}}>
          <Text style={{fontSize: 20}}>{message}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          {numbers.slice(2, 5).map(num => {
            return (
              <TouchableHighlight
                onPress={pressAnswer(num)}
                underlayColor="#91b7d7"
                style={{
                  margin: 50,
                  borderWidth: 1,
                  borderColor: '#91b7d7',
                  padding: 20,
                  borderRadius: 4,
                  width: 160,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 100, color: '#41b7d7'}}>{num}</Text>
              </TouchableHighlight>
            );
          })}
        </View>
        <View style={{alignItems: 'center', marginVertical: 20, height: 40}}>
          <Text style={{fontSize: 20}}>{maxSuccess} れんぞくせいかい</Text>
        </View>
        <View>
          <Button onPress={resetNumber} title="reset" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 100,
    marginHorizontal: 10,
  },
  button: {
    fontSize: 60,
    borderWidth: 1,
  },
});

export default App;
