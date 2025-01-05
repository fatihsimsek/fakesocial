import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { PlusCircleIcon } from '../icons';

function TikTokPostBody({data, dispatch}){
    return (
        <View style={styles.postBody}>
            <View style={styles.profileContainer}>
                {
                     data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.profileAvatar} />
                                               : <Image source={require('../../assets/images/user-icon.png')} style={styles.profileAvatar} />
                }
                <PlusCircleIcon style={{top:-14}} size={36} fill='red' stroke='white' />
            </View>
            <View style={styles.postIconContainer}>
                <Image style={styles.postIcon} source={require('../../assets/images/tiktok_heart.png')}/>
                <Text style={styles.postIconText}>{data.detail.likeCount}</Text>
            </View>
            <View style={styles.postIconContainer}>
                <Image style={{...styles.postIcon, height:34}} source={require('../../assets/images/tiktok_comment.png')}/>
                <Text style={styles.postIconText}>{data.detail.commentCount}</Text>
            </View>
            <View style={styles.postIconContainer}>
                <Image style={{...styles.postIcon, width:30, height:34}} source={require('../../assets/images/tiktok_bookmark.png')}/>
                <Text style={styles.postIconText}>{data.detail.bookmarkCount}</Text>
            </View>
            <View style={styles.postIconContainer}>
                <Image style={styles.postIcon} source={require('../../assets/images/tiktok_share.png')}/>
                <Text style={styles.postIconText}>{data.detail.sharedCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postBody:{
        flex:1,
        margin:15,
        alignSelf:'flex-end',
        justifyContent:'flex-end'
    },
    profileContainer: {
        alignItems:'center'
    },
    profileAvatar: {
        width: 54,
		height: 54,
        borderWidth: 2,
        borderColor:'white',
		borderRadius: 54,
    },
    postIconContainer: {
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center'
    },
    postIcon: {
        width:36,
        height:32,
    },
    postIconText: {
        marginVertical:5,
        color:'white',
        fontSize:14
    }
});

export default TikTokPostBody;