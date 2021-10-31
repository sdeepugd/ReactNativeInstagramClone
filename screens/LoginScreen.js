import { Image, StyleSheet, Text, View } from 'react-native'

import AuthLogo from '../components/common/AuthLogo'
import LoginForm from '../components/loginScreen/LoginForm'
import React from 'react'

const LoginScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <AuthLogo/>
            <LoginForm navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({ 
    container:{
        flex:1,
        backgroundColor:'white',
        paddingTop:50,
        paddingHorizontal:12,
    },
})

export default LoginScreen
