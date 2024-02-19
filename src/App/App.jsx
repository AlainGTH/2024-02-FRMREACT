import React from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import Button from './components/ui/Button/Button';

function App() {
  return (
    <View>
      <Text>Hello</Text>
      <Button
        onButtonClicked={arg => {
          ToastAndroid.show('button clicked depuis App', ToastAndroid.LONG);
        }}
        bgColor="green">
        test 1
      </Button>
      <Button bgColor="red">test 2</Button>
      <Button bgColor="black" color="yellow" style={{width: '50%'}}>
        test 3
      </Button>
      <Button>test 2</Button>
    </View>
  );
}

export default App;
