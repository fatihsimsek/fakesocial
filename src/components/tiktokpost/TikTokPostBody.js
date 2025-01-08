import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import { PlusCircleIcon, EditIcon } from '../icons';

function TikTokPostBody({data, dispatch}){
    const options = {
        title: 'Select Avatar',
        mediaType: 'photo',
        includeBase64: false
    };

    const onChangePartnerPhoto = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('Image picker error: ', response.error);
            } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              dispatch({
                type: 'updatePartner',
                data: {
                    ...data.partner,
                    profileImage: imageUri
                }
              });
            }
        });
    };

    const onChangePhoto = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('Image picker error: ', response.error);
            } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              dispatch({
                type: 'updateImageUrl',
                data: imageUri
              });
            }
        });
    };

    return (
        <View style={styles.postBody}>
            <View style={{...styles.postIconContainer, marginBottom:20}}>
                <Pressable onPress={onChangePhoto}>
                    <EditIcon width="24" height="24" stroke="white"></EditIcon>
                </Pressable>
            </View>
            <View style={styles.profileContainer}>
                <Pressable onPress={onChangePartnerPhoto}>
                {
                     data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.profileAvatar} />
                                               : <Image source={require('../../assets/images/user-icon.png')} style={styles.profileAvatar} />
                }
                </Pressable>
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