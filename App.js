import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Movies from './app/components/Movies';
import BookTicket from './app/components/BookTicket';
import Ticket from './app/components/Ticket';
import store from './app/redux/store';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native-web';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Movies navigation={navigation} />
      </View>
    </View>
  );
}

function BookTicketScreen() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <BookTicket navigation={navigation} />
    </View>
  );
}

function TicketScreen() {

  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Ticket navigation={navigation} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {



  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Movies" component={HomeScreen}
            options={{
              title: 'Movie Page',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen name="BookTicket" component={BookTicketScreen}
            options={{
              title: 'Book Ticket Page',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
          <Stack.Screen name="Ticket" component={BookTicketScreen}
            options={{
              title: 'Ticket Page',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
