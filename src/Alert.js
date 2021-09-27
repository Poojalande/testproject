import React from 'react';
import {useState} from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import BoxModal from './BoxModal';

const Alert = () => {
  const [show, setShow] = useState(false);

  const modalHandler = () => {
    setShow(true);
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: 'gray',
      }}>
      <TouchableOpacity style onPress={modalHandler}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <Modal animationType="none" transparent={true} visible={show}>
        <BoxModal onPress={() => setShow(false)} />
      </Modal>
      <Text>pooja</Text>
    </View>
  );
};

export default Alert;
