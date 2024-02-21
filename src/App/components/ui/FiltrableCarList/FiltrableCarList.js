import {Dimensions, ScrollView, Text, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './FiltrableCarList.styles';
import PropTypes from 'prop-types';
import CarListViewer from '../CarListViewer/CarListViewer';
import CarViewer from '../CarViewer/CarViewer';

const initialState = '';
const FiltrableCarList = props => {
  const [state, setState] = useState(initialState);

  //useEffect(() => {
  //  return () => {};
  //}, [state]);
  return (
    <View style={styles.FiltrableCarList} testId="FiltrableCarList">
      <Text style={{textAlign: 'center', fontSize: 20}}>
        Liste des vehicules
      </Text>
      <TextInput
        placeholder="Rechercher..."
        value={state}
        onChangeText={str => {
          setState(str);
        }}
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderBottomColor: 'grey',
          margin: 5,
        }}
      />
      <View style={{height: Dimensions.get('screen').height - 400}}>
        <ScrollView>
          {props.cars
            .filter(e => e.model.toLowerCase().includes(state.toLowerCase()))
            .map((c, index) => {
              return (
                <CarListViewer
                  style={{margin: 5}}
                  key={'c' + index}
                  car={c}
                  onPress={() => {
                    props.onUpdateSelect(c);
                  }}
                />
              );
            })}
        </ScrollView>
      </View>
      {props.selectedCar !== undefined && <CarViewer car={props.selectedCar} />}
    </View>
  );
};
FiltrableCarList.protTypes = {
  cars: PropTypes.array.isRequired,
};
FiltrableCarList.defaultProps = {};
export default FiltrableCarList;

//const styles = StyleSheet.create({});
