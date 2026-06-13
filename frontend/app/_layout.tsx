import { Stack } from "expo-router";
import AuthProvider  from "./contexts/authContext";

export default function Layout() {
    return(
        <AuthProvider>
            <Stack screenOptions={{animation: 'none'}}>
                <Stack.Screen name="(protected)" options={{headerShown: false}} />
                <Stack.Screen name="screens/TelaInicial/index" options={{headerShown: true, title:'Home Inicial'}} />
                <Stack.Screen name="auth/Login/index" options={{headerShown: true, title:'Entrar'}} />
                <Stack.Screen name="auth/Cadastro/index" options={{headerShown: true, title:'Cadastrar'}} />
                <Stack.Screen name="screens/listarAtividades/index" options={{headerShown: true, title:'Minhas Atividades'}} />
            </Stack>
        </AuthProvider>
    )
}