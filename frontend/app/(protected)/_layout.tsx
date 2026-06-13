import { Redirect, Stack } from "expo-router";
import { useAuth } from "hooks/useAuth";
import { ActivityIndicator } from "react-native";

export default function protectedLayout(){
    const isReady = useAuth()

    if(!isReady){
        return(
            <ActivityIndicator style={{flex: 1, justifyContent: 'center'}}/>
        )
    }

    const isLoggedIn = useAuth()

    if (!isLoggedIn) {
        return <Redirect href={'/(protected)/aluno/TelaEnvio'}/>
    }
    return (
    <Stack>
        <Stack.Screen name="index" options={{title:"HOME"}} />
    </Stack>
)
}