import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MoviesPage from './components/pages/moviesPage/index.js';
import MovieDetailsPage from './components/pages/moviesDetailsPage/index.js';

const Stack = createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='MoviesPage' component={MoviesPage} options={{headerShown: false}}/>
        <Stack.Screen name='MoviesDetailPage' component={MovieDetailsPage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
