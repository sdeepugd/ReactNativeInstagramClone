import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import FormicPostUploader from './FormicPostUploader'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

const Header = ({navigation}) => {
    return (
        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={require('../../assets/icons8-back-30.png')} style={{tintColor:'white',width:30,height:30}}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>
            NEW POST
        </Text>
        <Text/>
        <Text/>
    </View>
    )
}


const AddNewPost = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header navigation={navigation}/>
            <FormicPostUploader navigation={navigation}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        marginHorizontal:10
    },
    headerContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headerText:{
        color:'white',
        fontWeight:'700',
        fontSize:20,
        marginLeft:27.5
    }
}
)

export default AddNewPost
