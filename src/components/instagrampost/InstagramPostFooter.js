import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { HeartIcon, MessageCircleIcon, SendIcon, BookmarkIcon, EditIcon } from '../icons';

function InstagramPostFooter({data, dispatch}){
    return (
        <View style={styles.footerContainer}>
            <View style={styles.iconsContainer}>
                <View style={styles.iconsLeftSide}>
                    {
                        data.isLike ? <HeartIcon width="28" height="28" stroke="red" fill="red" style={styles.icons}></HeartIcon>
                                : <HeartIcon width="28" height="28" color="black"  style={styles.icons}></HeartIcon>
                    }
                    <MessageCircleIcon width="28" height="28" color="black" style={styles.icons}></MessageCircleIcon>
                    <SendIcon width="28" height="28" color="black" style={styles.icons}></SendIcon>
                </View>
                <View style={styles.iconsRightSide}>
                    <EditIcon width="24" height="24" color="black" style={styles.icons}></EditIcon>
                </View>
            </View>
            <View style={styles.commentContainer}>
                {data.likeCount > 0 && <Text style={{fontWeight: "bold", marginVertical: 5}}>
                                        {data.likeCount >= 1000 ? (Math.round(data.likeCount / 1000) + 'k'): data.likeCount} 
                                        {data.likeCount < 2 ? ' like' : ' likes'}
                                    </Text>
                }
                <View style={styles.postDescription}>
                    <Text style={styles.partnerFullnameText}>{data.partner.fullname}</Text>
                    <View style={{alignContent:'flex-start', flexShrink:1}}>
                        <Text>
                            {data.description}
                            {
                                data.showMore && <Text style={styles.postDescriptionMoreText}> ...more</Text>
                            }
                        </Text>
                    </View>
                </View>
                <View style={{marginVertical:10}}>
                    {
                        data.commentCount > 0 && <Text style={styles.commentText}> 
                                                      View all {data.commentCount} {data.commentCount < 2 ? 'comment' : 'comments'}
                                                 </Text>
                    }
                </View>
                <View style={{flexDirection:'row'}}>
                    {
                        data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.avatar} /> 
                                                : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />
                    }
                    <Text style={styles.addCommentText}>Add a comment...</Text>
                </View>
                <View style={{marginVertical:5}}>
                    <Text style={styles.timeText}>{data.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        flex:1
    },
    iconsContainer :{
        flexDirection:'row'
    },
    iconsLeftSide: {
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    iconsRightSide: {
        alignSelf:'flex-start'
    },
    icons: {
        marginHorizontal:5
    },
    commentContainer: {
        margin:10
    },
    postDescription: {
        flexDirection:'row'
    },
    partnerFullnameText: {
        fontWeight: "600",
        marginRight: 3
    },
    postDescriptionMoreText: {
        color:'#999999',
        fontSize:12
    },
    commentText:{
        color:'#999999',
        fontSize:14,
        fontWeight:500
    },
    addCommentText: {
        marginLeft: 10,
        color:'#999999',
        fontSize:14,
        fontWeight:500,
        alignItems:'center',
        alignSelf:'center'
    },
    avatar:{
        width: 32,
		height: 32,
		borderRadius: 32,
		resizeMode: "cover",
    },
    timeText: {
        color:'#999999',
        fontSize:12,
        fontWeight:500
    }
});

export default InstagramPostFooter;