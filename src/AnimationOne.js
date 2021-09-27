import React from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

const Interpolation = () => {
  const position = new Animated.ValueXY({x: 0, y: 0});
  //   Animated.spring(position, {
  //     toValue: {
  //       x: 300,
  //       y: 400,
  //     },

  //   }).start();
  Animated.timing(position, {
    toValue: {
      x: 300,
      y: 400,
    },
    duration: 3000,
    useNativeDriver: true,
  }).start();

  const rotate = position.y.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  const rotateX = position.x.interpolate({
    inputRange: [0, 100],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={{
          height: 80,
          width: 80,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#D62AD0',
          marginTop: 250,
          transform: [
            {translateY: position.y, translateX: position.x},
            {rotate: rotate},
            {rotate: rotateX},
          ],
        }}>
        <Text>ok</Text>
      </Animated.View>
    </View>
  );
};

export default Interpolation;
