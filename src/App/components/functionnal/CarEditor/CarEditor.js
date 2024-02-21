import {
  Image,
  Switch,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './CarEditor.styles';
import PropTypes from 'prop-types';
import Button from '../../ui/Button/Button';
//const initialState = true;
const CarEditor = props => {
  const [car, setCar] = useState(props.car);
  useEffect(() => {
    return () => {};
  }, [car]);
  return (
    <React.Fragment>
      <Button
        onButtonClicked={() => {
          ToastAndroid.show('Validation du formulaire', 1000);
          props.onSubmit(car);
        }}>
        Valider
      </Button>
      <View style={styles.CarEditor} testID="CarEditor">
        <View style={styles.leftContainer}>
          <TextInput
            style={styles.big}
            value={car.marque}
            onChangeText={newStrValue => {
              setCar({...car, marque: newStrValue});
            }}
          />
          <TextInput
            style={styles.big}
            value={car.model}
            onChangeText={newStrValue => {
              setCar({...car, model: newStrValue});
            }}
          />
          <TextInput
            style={styles.big}
            value={car.imat}
            onChangeText={newStrValue => {
              setCar({...car, imat: newStrValue});
            }}
          />
          <Text>{'\n'}</Text>
          <TextInput
            value={car.couleur}
            onChangeText={newStrValue => {
              setCar({...car, couleur: newStrValue});
            }}
          />
          <TextInput
            style={[styles.big, styles.price]}
            value={car.prix.toString()}
            keyboardType="decimal-pad"
            onChangeText={newStrValue => {
              setCar({...car, prix: parseFloat(newStrValue)});
            }}
          />
          <Text>{'\n'}</Text>
          <Text>
            Disponible :
            <Switch
              value={car.disponible}
              onValueChange={newBoolValue => {
                setCar({...car, disponible: newBoolValue});
              }}
            />
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <Text>{car.id}</Text>
          <TouchableHighlight
            onPress={() => {
              ToastAndroid.show('Change image ask', 1000);
            }}>
            <Image source={{uri: car.photo}} style={styles.image} />
          </TouchableHighlight>
        </View>
      </View>
    </React.Fragment>
  );
};
CarEditor.propTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    marque: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imat: PropTypes.string.isRequired,
    couleur: PropTypes.string.isRequired,
    prix: PropTypes.number.isRequired,
    disponible: PropTypes.bool.isRequired,
    photo: PropTypes.string,
  }).isRequired,
};
CarEditor.defaultProps = {};
export default CarEditor;
