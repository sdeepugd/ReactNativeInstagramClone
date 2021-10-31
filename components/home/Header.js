import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React from 'react'

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Image source={require('../../assets/instagram-logo.png')} style={styles.logo} />
            </TouchableOpacity>
            <View style={styles.iconsContainer}>
                <TouchableOpacity onPress={() => navigation.push('NewPostScreen')}>
                    <Image source={require('../../assets/icons8-add-64.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../../assets/icons8-heart-24.png')} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity >
                    <View style={styles.unreadBadge}>
                        <Text style={styles.unreadBadgeText}>11</Text>
                    </View>
                    <Image source={require('../../assets/icons8-facebook-messenger-50.png')} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        logo:{
            width: 100,
            height: 50,
            resizeMode:'contain',
        },
        icon:{
            tintColor:'white',
            height:25,
            width:25,
            marginLeft:10,
            resizeMode:'contain'
        },
        container:{
            justifyContent:'space-between',
            alignItems:'center',
            flexDirection:'row',
            marginHorizontal:20
        },
        iconsContainer:{
            flexDirection:'row',

        },
        unreadBadge:{
            backgroundColor:'red',
            position: 'absolute',
            left:20,
            bottom: 15,
            height: 18,
            width: 25,
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
            zIndex:100
        },
        unreadBadgeText:{
            color: 'white',
            fontWeight:'600'
        }
    }
)
 

export default Header
