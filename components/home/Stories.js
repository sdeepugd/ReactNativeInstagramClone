import { Image, ScrollView, StyleSheet, Text, View, _View } from 'react-native'

import React from 'react'
import { USERS } from '../../data/user'

const Stories = () => {
    return (
        <View style={{ marginbottom:13,margin:10 }}> 
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {USERS.map((story,index) => (
            <View key={story.id} style = {styles.storyContainer}>
                <Image source= {{uri:story.avatar}}
                                        style={styles.story}
                                    /> 
                <Text style={styles.storyText}>{
                    story.user.length>11 ? story.user.slice(0,10).toLowerCase() + '...' : story.user
                }</Text>
            </View>
                  
            ))}
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        story:{
            width: 70,
            height: 70,
            borderRadius:50,
            marginLeft:6,
            borderWidth:3,
            borderColor:'#ff8501',

        },
        storyText:{
            color:'white'
        },
        storyContainer:{
            alignItems:'center',
        }
    }
)

export default Stories
