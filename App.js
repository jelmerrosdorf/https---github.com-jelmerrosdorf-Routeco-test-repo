import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './Screens/LoginScreen';
import ProfileScreen from './Screens/ProfileScreen';
import HomeScreen from './Screens/HomeScreen';
import RegisterScreen from './Screens/RegisterScreen';
import CameraScreen from './Screens/CameraScreen';
import GalleryScreen from './Screens/GalleryScreen';
import ImageScreen from './Screens/ImageScreen';
import MapScreen from './Screens/MapScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Register'
          component={RegisterScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Login'
          component={LoginScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Profile'
          component={ProfileScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Camera'
          component={CameraScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Gallery'
          component={GalleryScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Image'
          component={ImageScreen}
        />
        <Stack.Screen
          // options={{ headerShown: false }}
          name='Map'
          component={MapScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

