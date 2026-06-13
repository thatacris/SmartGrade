import { View, Text, StyleSheet } from 'react-native'
import  React from 'react'
import { Tabs } from 'expo-router'
import { Container } from 'styles/login.styles'

const Page = () => {
    return(
         <View style={styles.Container}>
            <Text>Home Aluno</Text>
         </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        justifyContent:'center', 
        alignItems: 'center'
    }
})