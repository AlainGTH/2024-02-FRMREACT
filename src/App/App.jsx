import React, {useEffect, useState} from 'react';
import {View, Text, ToastAndroid, Image} from 'react-native';
import Button from './components/ui/Button/Button';
import Styles from './App.styles';

function App() {
  //let counter = 0;
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    //Creation Update
    console.log('Use Effect: ', counter);
    return () => {
      //Destruction
    };
  }, [counter]);
  useEffect(() => {
    //Creation Update
    setCounter(0);
    return () => {
      //Destruction
    };
  }, []);
  return (
    <View>
      <Text>Hello counter: {counter}</Text>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show('Ajouter clicked depuis App', ToastAndroid.SHORT);
          //counter++;
          setCounter(counter + 1);
          console.log(counter);
        }}
        bgColor="skyblue">
        <View>
          <Image
            source={require('../../assets/img/plus.png')}
            style={Styles.buttonimage}
          />
          <Text style={Styles.buttontext}>Ajouter</Text>
        </View>
      </Button>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show('Suprimer clicked depuis App', ToastAndroid.SHORT);
          setCounter(counter - 1);
          console.log(counter);
        }}
        bgColor="red">
        <View style={Styles.vue}>
          <Image
            source={require('../../assets/img/minus.png')}
            style={Styles.buttonimage}
          />
          <Text style={[Styles.buttontext, {color: 'yellow'}]}>Supprimer</Text>
        </View>
      </Button>
    </View>
  );
}

export default App;
