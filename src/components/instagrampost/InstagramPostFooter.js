import React, {useState} from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { HeartIcon, MessageBubbleIcon, SendIcon, BookmarkIcon, EditIcon } from '../icons';

function InstagramPostFooter({data, dispatch}){
    return (
        <View style={styles.footerContainer}>
            <View style={styles.iconsContainer}>
                <View style={styles.iconsLeftSide}>
                    {
                        data.isLike ? <HeartIcon width="28" height="28" stroke="red" fill="red" style={styles.icons}></HeartIcon>
                                    : <HeartIcon width="28" height="28" color="black"  style={styles.icons}></HeartIcon>
                    }
                    {
                        data.likeCount > 0 && <Text style={styles.iconCountText}>{data.likeCount}</Text>
                    }
                    <MessageBubbleIcon width="28" height="28" color="black" style={styles.icons}></MessageBubbleIcon>
                    {
                        data.commentCount > 0 && <Text style={styles.iconCountText}>{data.commentCount}</Text>
                    }
                    <SendIcon width="28" height="28" color="black" style={styles.icons}></SendIcon>
                    {
                        data.sendCount > 0 && <Text style={styles.iconCountText}>{data.sendCount}</Text>
                    }
                </View>
                <View style={styles.iconsRightSide}>
                    <EditIcon width="24" height="24" color="black" style={styles.icons}></EditIcon>
                </View>
            </View>
            <View style={styles.commentContainer}>
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
                <View style={{marginVertical:5}}>
                    <Text style={styles.timeText}>{data.time}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        marginTop:3
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
    iconCountText: {
        fontWeight: "bold",
        alignSelf:'center'
    },
    commentContainer: {
        margin:10
    },
    postDescription: {
        flexDirection:'row',
        marginVertical:5
    },
    partnerFullnameText: {
        fontWeight: "600",
        marginRight: 3
    },
    postDescriptionMoreText: {
        color:'#999999',
        fontSize:12
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