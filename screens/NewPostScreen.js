import { SafeAreaView, Text, View } from 'react-native'

import AddNewPost from '../components/newPost/AddNewPost'
import React from 'react'

const NewPostScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{backgroundColor:'black',flex:1}}>
            <AddNewPost navigation={navigation}/>
        </SafeAreaView>
    )
}

export default NewPostScreen
