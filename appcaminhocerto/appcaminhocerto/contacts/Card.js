import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { Entypo } from '@expo/vector-icons';

import Filha from '../assets/filha.png'

export function Card({nome, tipo='FILHA', telefone, textStyle, onDelete}) {
  return (
    <View style={styles.view}>
      <Image source={Filha} style={styles.img} />
      <View style={styles.viewText}>
        <Text>{tipo}</Text>
        <Text style={[styles.strong, textStyle]}>{nome}</Text>
        <Text>{telefone}</Text>
      </View>
      <TouchableOpacity onPress={onDelete}>
        <Entypo name="remove-user" size={24} color="black" />
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row'
  },
  img: {
    height: 90,
    width: 70,
    borderRadius: 10
  },
  viewText: {
    paddingLeft: 10,
    justifyContent: 'center'
  },
  strong: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})