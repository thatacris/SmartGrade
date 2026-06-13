import { View, TouchableOpacity, Text } from "react-native";
import { useAuth } from "hooks/useAuth";
import { use } from "react";

export default function Index() {

    const {signOut} = useAuth()

    return (
        <View>
            <TouchableOpacity onPress={signOut}>
                <Text>Sair</Text>
            </TouchableOpacity>
        </View>
    )
}