import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { Divider } from "react-native-elements/dist/divider/Divider";
import React from "react";

const postIcons = [
    {
        name:'Like',
        imageUrl:require('../../assets/icons8-heart-24.png')
    },
    {
        name:'Share',
        imageUrl:require('../../assets/icons8-telegram-app-30.png')
    },
    {
        name:'Comment',
        imageUrl:require('../../assets/icons8-comment-64.png')
    },
    {
        name:'Save',
        imageUrl:require('../../assets/icons8-bookmark-24.png')
    },
]


const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post}/>
      <PostImage post={post}/>
      <View style={{marginHorizontal:15, marginTop:10}}>
        <PostFooter/>
        <Likes post={post}/>
        <Caption post={post}/>
        <CommentSection post={post}/>
      </View>
    </View>
  );
};

const PostHeader = ({post}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 5,
        alignItems: "center",
      }}
    >
      <View style={{flexDirection:'row',alignItems:'center'}}>
        <Image source={{uri:post.profile_picture}} style={styles.story} />
        <Text style={{color:'white',marginLeft:5,fontWeight:"700"}}> {post.user}</Text>
        <Text />
      </View>
      <TouchableOpacity>
          <Image source={require('../../assets/icons8-more-50.png')} style={{tintColor:'white',width:20,height:20}}></Image>
      </TouchableOpacity>
    </View>
  );
};


const PostImage = ({post}) => {
    return (
        <View style={{width:'100%',height:450}}>
            <Image source={{uri:post.imageurl}} style={{height:'100%',resizeMode:'cover'}}/>
        </View>
    )
}

const PostFooter = () => {
    return (
        <View style={{flexDirection:'row'}}>
            <View style={styles.leftFooterIconContainer}>
                <Icon imgStyle = {styles.footerIcon} imgurl={postIcons[0].imageUrl}/>
                <Icon imgStyle = {styles.footerIcon} imgurl={postIcons[1].imageUrl}/>
                <Icon imgStyle = {styles.footerIcon} imgurl={postIcons[2].imageUrl}/>
            </View>
            <View style={{flex:1,alignItems:'flex-end'}}>
                <Icon imgStyle = {styles.footerIcon} imgurl={postIcons[3].imageUrl}/>
            </View>
        </View>
    )
}

const Icon = ({imgStyle,imgurl}) => (
    <TouchableOpacity>
        <Image source={imgurl} style={imgStyle} />
    </TouchableOpacity>
)


const Likes = ({post}) => {
    return (
        <View style={{flexDirection:'row', marginTop:4}}>
            <Text style={{color:'white',fontWeight:'600'}}>{post.likes.toLocaleString('en')} Likes</Text>
        </View>
    )
}


const Caption = ({post}) => {
    return (
        <View style={{flexDirection:'row'}}>
            <Text style={{color:'white',fontWeight:"600"}}>{post.user} </Text>
            <Text style={{color:'white'}}>{post.captions}</Text>
        </View>
    )
}


const CommentSection = ({post}) => {
    return (
        <View style={{marginTop:5}}>
            { !!post.comments.length && (
            <Text style={{color:'gray'}}>
                View {post.comments.length > 1? 'all':''} {post.comments.length >1 ? post.comments.length:''} {
                    post.comments.length >1 ? 'comments': 'comment'
                }
            </Text>)
            }
            <Comments post={post}/>
        </View>
    )
}

const Comments = ({post}) => {
    return (
        <>
            {post.comments.map((comment,index) => (
                <View key={index} style={{flexDirection:'row'}}>
                    <Text style={{color:'white',fontWeight:"600"}}>{comment.user} </Text>
                    <Text style={{color:'white'}}>{comment.comment}</Text>
                </View>
            ))}
        </>
    )
}

const styles = StyleSheet.create(
    {
        story:{
            width: 35,
            height: 35,
            borderRadius:50,
            marginLeft:6,
            borderWidth:1.6,
            borderColor:'#ff8501',

        },
        footerIcon:{
            tintColor:'white',
            height:25,
            width: 25,
            margin:2
        },
        leftFooterIconContainer:{
            flexDirection:'row',
        },
        rightFooterIconContainer:{
            flexDirection:'row',
        }
    }
)


export default Post;
