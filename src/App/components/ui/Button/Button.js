import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        console.log('button clicked');
      }}>
      <View>
        <Text>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
