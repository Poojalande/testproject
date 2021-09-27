import React from 'react';
import {View, Text} from 'react-native';
import Alert from './src/Alert';
import Animation from './src/AnimationOne';
import Animations from './src/SquareAnimation';
import SquareAnimation from './src/SquareAnimation';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Animation /> */}
      <Animations />
    </View>
  );
};

export default App;
