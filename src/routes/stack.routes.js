import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Account from '../pages/CreateAccount';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Pets from '../pages/Pets';
import AddPets from '../pages/CratePets';


const Stack = createStackNavigator();


const Tab = createBottomTabNavigator();


function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#6E42F1',
        tabBarShowLabel: false
      }}
    >
        <Tab.Screen 
        name="Início" 
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="home" size={size} color={color} />
        }}
        />

        <Tab.Screen 
        name="Pets" 
        component={Pets} 
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="paw-outline"size={size} color={color} />
        }}
        />

        <Tab.Screen 
        name="Login" 
        component={Login} 
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="settings-outline"size={size} color={color} />
        }}
        />
      
    </Tab.Navigator>
  );
}


function StackRouter() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
        <Stack.Screen name="Home" component={TabRoutes} />
        <Stack.Screen name="Cadastro" component={Account} />
        <Stack.Screen name='NewPet' component={AddPets} />
    </Stack.Navigator>
  );
}

export default StackRouter;