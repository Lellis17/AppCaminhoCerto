import {useState} from 'react'

import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'

import {Button} from 'react-native-paper'

import {Card} from './Card'

import {findAll, remove} from './ContactsApi'

/*
const contacts = [
  {
    id: 1,
    name: 'LARISSA',
    type: 'FILHA'
  },
  {
    id: 2,
    name: 'KAMILLA',
    type: 'FILHA'
  },
  {
    id: 1,
    name: 'LARISSA',
    type: 'FILHA'
  },
  {
    id: 2,
    name: 'KAMILLA',
    type: 'FILHA'
  },
]
*/
export function ContactsView({navigation}) {
  const [contacts, setContacts] = useState([])

  const findContacts = async () => {
    const contacts = await findAll()
    setContacts(contacts)
  }

  const onDelete = async (id) => {
    console.log(`Removendo o contato ${id} ...`)
    await remove(id)
    alert('Contato excluido com sucesso!')
    await findContacts()
  }

  return (
    <View>
      <Text>Contatos</Text>
      <FlatList 
        data={contacts}
        renderItem={
          (ri) => <TouchableOpacity onPress={() => navigation.navigate('sos', {name: ri.item.name})}>
                    <Card 
                      {...ri.item}

                      textStyle={{fontSize: 10}}
                      onDelete={() => onDelete(ri.item.id)}
                    />
                  </TouchableOpacity>
        }
        keyExtractor={(item) => item.id}
        
        contentContainerStyle={styles.lacuna}
        numColumns={1}
        horizontal={false}
      />
      <Button onPress={findContacts}>
        Atualizar
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  lacuna: {
    gap: 10
  }
})








