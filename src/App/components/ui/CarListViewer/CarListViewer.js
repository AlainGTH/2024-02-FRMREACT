import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarListViewer.styles';
import PropTypes from 'prop-types';

const initialState = true;
const CarListViewer = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.CarListViewer}>
      <Text>CarListViewer{JSON.stringify(props)}</Text>
    </View>
  );
};
CarListViewer.protoTypes = {};
CarListViewer.defaultProps = {};
export default CarListViewer;

//const styles = StyleSheet.create({});
