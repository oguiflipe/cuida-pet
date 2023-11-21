import { NavigationContainer } from "@react-navigation/native";

import StackRouter from './stack.routes';

export default function Routes(){
    return(
        <NavigationContainer>
            <StackRouter />
        </NavigationContainer>
    )
}