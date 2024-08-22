import {View, Text} from 'react-native'

export function SOSView({navigation, route}) {

  const name = route.params.name

  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}