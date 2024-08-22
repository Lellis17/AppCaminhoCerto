import {View, Text, Image, StyleSheet} from 'react-native'

import Logo from '../assets/logo.png'

export function Header() {
  return (
    <View style={styles.main}>
      <View style={styles.viewText}>
        <Text style={styles.text}>Caminho </Text>
        <Text 
          style={[styles.text, styles.textColor]} 
        >
          Certo
        </Text>
      </View>
      <Image source={Logo} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#f1f1f1',
    alignItems: 'center'
  },
  viewText: {
    flexDirection: 'row'
  },
  text: {
    fontSize: 22,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  textColor: {
    color: '#25CCB0'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#c1c1c1'
  }
})






