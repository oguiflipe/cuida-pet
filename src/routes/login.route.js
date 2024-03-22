import { createStackNavigator } from '@react-navigation/stack';

import Login from '../pages/Login';

const Stack = createStackNavigator();


function LoginRouter() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        tabBarShowLabel: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}


export default LoginRouter;