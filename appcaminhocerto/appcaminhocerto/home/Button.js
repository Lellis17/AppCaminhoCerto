import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export function Button({title='?', color='#25CCB0', onPress}) {
  const colorStyle = {
    backgroundColor: color
  }

  return(
    <TouchableOpacity 
      style={[styles.button, colorStyle]}
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'Roboto'
  }
})

