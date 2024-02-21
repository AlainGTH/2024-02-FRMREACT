import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  vue: {
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  vueleft: {
    flexGrow: 1,
    flexDirection: 'column',
    //backgroundColor: 'violet',
    margin: 10,
  },
  vueright: {
    flexDirection: 'column',
    verticalAlign: 'middle',
    margin: 10,
    //backgroundColor: 'green',
  },
  image: {
    height: 100,
    width: 150,
  },
  marquetext: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
  },
  idtext: {
    fontSize: 22,
    marginLeft: 30,
    marginTop: 10,
  },
});

export default styles;
