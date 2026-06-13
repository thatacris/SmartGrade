import { router } from "expo-router";
import {createContext, PropsWithChildren, useState, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthState = {
    isLoggedIn: boolean;
    isReady: boolean;
    roleUser: string | null;
    token: string | null;
    userId: number | null;
    signIn: (role: string, token: string, userId:number) => void;
    signOut: () => void;
}

const AUTH_STORAGE_KEY = "@myapp:auth-state"

export const AuthContext = createContext<AuthState>({} as AuthState)

export default function AuthProvider({children} : PropsWithChildren){
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isReady, setIsReady]=useState(true)
    const [roleUser, setRoleUser] = useState("")
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<number | null>(null);

    async function storageState(newState: {isLoggedIn: boolean, roleUser: string | null, token: string | null,  userId: number | null;}) {
        try{
            await AsyncStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newState))

        }catch(error){
            console.log("ERROR_SET_STORAGE_AUTH:",error)
        }
    }

    function signIn(role: string, token: string, userId:number) {
        setRoleUser(role)
        setToken(token)
        setUserId(userId);
        setIsLoggedIn(true)
        storageState({
            isLoggedIn: true, 
            roleUser: role, 
            token,
            userId})
        
        router.replace("/(protected)/aluno/Feedback")
    }

    function signOut() {
        setIsLoggedIn(false)
        setRoleUser("");
        setToken(null);
        setUserId(null);

        storageState({
            isLoggedIn: false, 
            roleUser: null, 
            token: null,
            userId: null})
        router.replace("/screens/TelaInicial")
    }

    useEffect(() => {
        async function loadStorageAuthState(){
            try{
                const storageState = await AsyncStorage.getItem(AUTH_STORAGE_KEY)
                const state = storageState ? JSON.parse(storageState) : null;     
                
                setRoleUser(state?.roleUser ?? "");
                console.log("roleUSer --->", roleUser)

                setToken(state?.token ?? null);
                setUserId(state?.userId ?? null);
                setIsLoggedIn(state?.isLoggedIn ?? false);
                console.log("STORAGE --> ",state)


            }catch(error){
                console.log("ERROR_GET_STORAGE_AUTH:",error)
                setIsLoggedIn(false)
            } finally {
                setIsReady(true)
            }
        }

        loadStorageAuthState()
    },[])

    return(
        <AuthContext.Provider value={{ isLoggedIn,
        roleUser,
        token,
        userId,
        signIn,
        signOut,
        isReady}}>
            {children}
        </AuthContext.Provider>
    )
}