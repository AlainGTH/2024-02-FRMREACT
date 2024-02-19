import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import styles from './Button.styles';
import PropTypes from 'prop-types';

const Button = props => {
  console.log(props);
  return (
    <TouchableOpacity
      onPress={() => {
        props.onButtonClicked();
        console.log('button clicked');
      }}>
      <View style={[styles.vue, props.style, {backgroundColor: props.bgColor}]}>
        <Text style={[styles.text, {color: props.color}]}>
          {props.children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

Button.PropTypes = {
  style: PropTypes.object,
  children: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  onButtonClicked: PropTypes.func.isRequired,
};

Button.defaultProps = {
  bgColor: 'skyblue',
  color: 'white',
};
export default Button;
