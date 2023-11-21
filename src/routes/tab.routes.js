import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Pets from '../pages/Pets';

import StackRouter from './stack.routes';

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
        component={StackRouter}
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="home" size={size} color={color} />
        }}
      />

      <Tab.Screen 
        name="Entrar" 
        component={StackRouter} 
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="paw-outline"size={size} color={color} />
        }}
      />
      <Tab.Screen 
        name="Pets" 
        component={StackRouter} 
        options={{
          tabBarIcon: ({color, size}) => <Ionicons name="settings-outline"size={size} color={color} />
        }}
      />

    </Tab.Navigator>
  );
}

export default TabRoutes;