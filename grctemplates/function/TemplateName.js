import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './TemplateName.styles';
import PropTypes from 'prop-types';

const initialState = true;
const TemplateName = props => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    return () => {};
  }, [state]);
  return (
    <View style={styles.TemplateName}>
      <Text>TemplateName{JSON.stringify(props)}</Text>
    </View>
  );
};
TemplateName.protoTypes = {};
TemplateName.defaultProps = {};
export default TemplateName;

//const styles = StyleSheet.create({});
