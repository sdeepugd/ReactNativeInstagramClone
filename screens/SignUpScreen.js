import { StyleSheet, Text, View } from 'react-native'

import AuthLogo from '../components/common/AuthLogo'
import React from 'react'
import SignupForm from '../components/signUpScreen/SignupForm'

const SignUpScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
        <AuthLogo />
        <SignupForm navigation={navigation}/>
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

export default SignUpScreen
