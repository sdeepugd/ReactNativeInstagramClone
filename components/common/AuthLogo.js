import { Image, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ig_logo = require('../../assets/instagram.png')

const AuthLogo = () => {
    return (
        <View style={styles.logoContainer}>
            <Image source={ig_logo} style={{ height:100, width:100}} />
        </View>
    )
}

const styles = StyleSheet.create({ 
    logoContainer:{
        alignItems:'center',
        marginTop:60,
    }
})

export default AuthLogo
