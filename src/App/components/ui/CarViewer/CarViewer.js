import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarViewer.styles';
import PropTypes from 'prop-types';

const initialState = true;
const CarViewer = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.CarViewer}>
      <Text>CarViewer{JSON.stringify(props)}</Text>
    </View>
  );
};
CarViewer.protoTypes = {};
CarViewer.defaultProps = {};
export default CarViewer;

//const styles = StyleSheet.create({});
