import { NavigationContainer } from "@react-navigation/native";

import StackRouter from './stack.routes';
import LoginRouter from "./login.route";

export default function Routes(){
    const auth = true;

    return(
        <NavigationContainer>
            {auth ? <StackRouter /> : <LoginRouter /> }
            
        </NavigationContainer>
    )
}