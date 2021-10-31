import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'

import BottomTabs from '../components/home/BottomTabs'
import Header from '../components/home/Header'
import { POSTS } from '../data/posts'
import Post from '../components/home/Post'
import React from 'react'
import Stories from '../components/home/Stories'
import {bottomTabIcons} from '../components/home/BottomTabs'

const HomeScreen = ({navigation}) => {
        return(

            <SafeAreaView style={styles.container}c>
                <Header navigation={navigation}/>
                <Stories/>
                <ScrollView>
                    {POSTS.map((post,index) => (
                        <Post post={post} key ={index}/>
                    ))}
                </ScrollView>
                <BottomTabs icons = {bottomTabIcons}/>
            </SafeAreaView>
        )
}

const styles = StyleSheet.create(
    {
        container :{
            backgroundColor:'black',
            flex: 1
        }
    }
)

export default HomeScreen