import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'

import { Divider } from "react-native-elements/dist/divider/Divider";

export const bottomTabIcons = [
    {
        name:'Home',
        imageUrl:require('../../assets/icons8-home-24.png')
    },
    {
        name:'Search',
        imageUrl:require('../../assets/icons8-search-24.png')
    },
    {
        name:'Reels',
        imageUrl:require('../../assets/icons8-instagram-reels-50.png')
    },
    {
        name:'Shop',
        imageUrl:require('../../assets/icons8-online-shop-80.png')
    },
    {
        name:'Avatar',
        imageUrl:require('../../assets/instagram.png')
    },
]

const BottomTabs = ({icons}) => {
    const [activeTab,setActiveTab] = useState('Home')

    const Icon = ({icon})=>(
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}> 
            <Image source={icon.imageUrl} style={[activeTab === icon.name? {tintColor:'green'}:{tintColor:'white'},styles.icon,icon.name === 'Avatar' ? styles.profilePic:{}]}/>
        </TouchableOpacity>
    )
    return (
        <View style={styles.wrapper}>
            <Divider width={1} orientation='vertical' />
            <View style={styles.container}>
                {icons.map((icon,index) => (
                    <Icon key={index} icon={icon}/>
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon:{
        width: 30, 
        height: 30,
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-around',
        height: 50,
        paddingTop:10
    },
    wrapper:{
        position: 'absolute',
        width: '100%',
        bottom:'3%',
        zIndex:999,
        backgroundColor:'#000'
    },
    profilePic:{
        borderRadius:50,
        borderWidth:1,
        borderColor:'white'
    }
})

export default BottomTabs
