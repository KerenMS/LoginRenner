import React from 'react';
import { View } from 'react-native';
import Login from './src/login';

const App: React.FC=()=>{
  return (
    <View style={{flex:1}}>
      <Login/>
    </View>
  );
}

export default App;
