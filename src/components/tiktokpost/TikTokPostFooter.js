import React from 'react';
import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';
import { EditIcon } from '../icons';

function TikTokPostFooter({data, dispatch, openFooterModal}){
    const options = {
        title: 'Select Album',
        mediaType: 'photo',
        includeBase64: false
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
                type: 'updateAlbumImage',
                data: imageUri
              });
            }
        });
    };

    const openFooterModalOpen = () => {
        openFooterModal();
    }

    return (
        <View style={styles.footerContainer}>
            <View style={styles.postDescriptionContainer}>
                <View style={{flexDirection:'row', marginBottom:5, alignItems:'center'}}>
                    <Text style={styles.partnerFullnameText}>{data.partner.fullname}</Text>
                    <Pressable onPress={openFooterModalOpen}>
                        <EditIcon width="24" height="24" stroke="white"></EditIcon>
                    </Pressable>
                </View>  
                <Text style={styles.postDescription}>{data.detail.description}</Text>
            </View>
            <View style={styles.profileContainer}>
                <Pressable onPress={onChangePhoto}>
                {
                    data.albumImageUrl ? <Image source={{uri: data.albumImageUrl}} style={styles.albumAvatar} />
                                       : <Image source={require('../../assets/images/user-icon.png')} style={styles.albumAvatar} />
                }  
                </Pressable>         
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footerContainer: {
        marginHorizontal:10,
        marginBottom:20,
        flexDirection:'row'
    },
    postDescriptionContainer: {
        flex:1,
        flexShrink:1
    },
    partnerFullnameText: {
        color:'white',
        fontSize:16,
        fontWeight:700,
        marginRight:10
    },
    postDescription: {
        color:'white',
        fontSize:14,
        fontWeight:600
    },
    profileContainer: {
        marginRight:10
    },
    albumAvatar: {
        width: 42,
		height: 42,
        borderRadius: 42,
    }
});

export default TikTokPostFooter;