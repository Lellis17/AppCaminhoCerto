import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export function Menu({title, color='#25CCB0', onPress}) {

  // teste

  /* 
  bloco
  */
  return(
    <TouchableOpacity 
      style={[styles.button, {backgroundColor: color}]}
      onPress={onPress}
    >
      {/*
          teste
      */}
      <Text style={styles.text}>{title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: 22,
    color: 'white'
  }
})