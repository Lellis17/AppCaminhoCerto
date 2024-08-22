
import {HomeView} from './home/HomeWiew'
import {ContactsView} from './contacts/ContactsWiew'
import{SOSView} from './sos/SOSView'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
  <NavigationContainer>
      <Stack.Navigator screenOptions={defaultOptions}>
        <Stack.Screen name="home" component={HomeView} options={homeOptions}/>
        <Stack.Screen name="contacts" component={ContactsView} options={contactsOptions} />
        <Stack.Screen name="sos" component={SOSView} options={sosOptions} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const defaultOptions ={
   headerStyle: {
    backgroundColor: '#25CCB0'
},
headerTintColor: 'white'
}

const homeOptions ={
  headerShown: false 
}


const contactsOptions ={
  title: 'Lista de  Contatos'
  }
  
  const sosOptions = {
    title: 'SOS'
  }









