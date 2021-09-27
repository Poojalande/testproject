import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Animated,
  Text,
  TouchableOpacity,
} from 'react-native';

const BoxModal = ({onPress}) => {
  const opacity = useState(new Animated.Value(0))[0];
  Animated.timing(opacity, {
    toValue: 1,
    duration: 2000,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Animated.Image
          style={{
            height: 80,
            width: 80,
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: '#D62AD0',
            // marginTop: 250,
            borderRadius: 50,
            borderColor: 'green',
            opacity,
          }}
          source={require('./images/rightCheck.webp')}></Animated.Image>
        <Animated.Text style={{opacity, fontSize: 20, marginVertical: 4}}>
          Order Succesessfully
        </Animated.Text>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <Text style={{width: 200, textAlign: 'center', marginVertical: 10}}>
            Your order is succesessfully place with nesterra team{' '}
          </Text>
        </View>
        <TouchableOpacity style={styles.closeBtn} onPress={onPress}>
          <Text style={styles.closeText}>close me</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: '100%',
    // width: '100%',
    backgroundColor: 'transparent',
    zIndex: -1,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
    elevation: 2,

    // flexDirection: 'row',
  },
  innerContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    position: 'absolute',
    // opacity: 0.1,
    paddingHorizontal: 50,
    paddingVertical: 50,
    borderRadius: 10,
  },
  closeBtn: {
    backgroundColor: 'gray',
    padding: 4,
    marginVertical: 8,
    borderRadius: 10,
    width: 100,
  },
  closeText: {
    fontSize: 16,
    padding: 2,
    textAlign: 'center',
  },
});
export default BoxModal;
