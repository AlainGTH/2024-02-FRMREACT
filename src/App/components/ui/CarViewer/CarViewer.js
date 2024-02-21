import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './CarViewer.styles';
import PropTypes from 'prop-types';

const CarViewer = props => {
  console.log(props);
  return (
    <View style={styles.vue}>
      <View style={styles.vueleft}>
        <Text style={styles.marquetext}>{props.car.marque}</Text>
        <Text style={styles.text}>{props.car.model}</Text>
        <Text style={styles.text}>{props.car.imat}</Text>

        <Text style={[styles.text, {marginTop: 10}]}>{props.car.couleur}</Text>
        <Text style={styles.text}>{props.car.prix}</Text>
        <Text style={styles.text}>
          Disponible: {props.car.disponible ? 'oui' : 'non'}
        </Text>
      </View>
      <View style={styles.vueright}>
        <Image
          style={styles.image}
          source={
            props.car.photo !== undefined
              ? {
                  uri: props.car.photo,
                }
              : require('../../../../../assets/img/minus.png')
          }
        />

        <Text style={styles.idtext}>Id: {props.car.id}</Text>
      </View>
    </View>
  );
};

CarViewer.protoTypes = {
  car: PropTypes.shape({
    id: PropTypes.number,
    marque: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    imat: PropTypes.string.isRequired,
    couleur: PropTypes.string.isRequired,
    photo: PropTypes.string,
    disponible: PropTypes.bool.isRequired,
    prix: PropTypes.number.isRequired,
  }).isRequired,
};
//CarViewer.defaultProps = {};
export default CarViewer;
