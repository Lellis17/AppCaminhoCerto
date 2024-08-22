import { View, StyleSheet } from 'react-native';

import { Button } from './Button';
import {Header} from './Header'

import Constants from 'expo-constants'

export function HomeView({navigation}) {

  return (
    <View style={styles.view}>
      <Header />
      <View style={styles.buttons}>
        <Button 
          title='sos' 
          color='red'
          onPress={() => navigation.navigate('contacts') }
        />

        <Button 
          title='registro' 
          onPress={() => alert('REGISTRO')}
        />

        <Button 
          title='rastreio' 
          onPress={() => alert('RASTREIO')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  buttons: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
