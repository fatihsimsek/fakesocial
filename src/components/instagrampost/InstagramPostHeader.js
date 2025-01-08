import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import { LeftIcon, SaveIcon, DownloadIcon, EditIcon, BlueCheckIcon } from '../icons';
import { FollowType } from '../../views/PostTypes';

function InstagramPostHeader({data, dispatch, openPreviewModal, openSaveModal, openProfileModal}){
    const navigation = useNavigation();

    const onNavigateHome = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    const options = {
        title: 'Select Avatar',
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
                type: 'updatePartner',
                data: {
                    ...data.partner,
                    profileImage: imageUri
                }
              });
            }
        });
    };

    const onPreview = () => {
        openPreviewModal();
    };

    const onProfileModalOpen = () => {
        openProfileModal();
    }

    const onSaveModalOpen = () => {
        openSaveModal();
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <View style={{marginRight:10}}>
                    <Pressable onPress={onNavigateHome}>
                        <LeftIcon style={{color:'#075E54'}}></LeftIcon>
                    </Pressable>
                </View>
                <Pressable onPress={onChangePhoto}>
                {
                    data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.avatar} /> 
                                              : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />
                }
                </Pressable>
                <View>
                    <Text style={styles.headerCenterText}>
                        {data.partner.fullname}
                    </Text> 
                    {
                        data.partner.geoLocation?.length > 0 &&   
                        <Text style={styles.headerCenterInlineText}>
                            {data.partner.geoLocation}
                        </Text> 
                    }
                </View>
                <View style={{flexDirection:'row', alignSelf:'flex-start', marginTop:8}}>
                    {
                        data.partner.isVerified && <BlueCheckIcon width={16} height={16} /> 
                    }
                    {
                        data.partner.followType != FollowType.HIDE && <Text style={styles.followTypeType}>{data.partner.followType}</Text>
                    }
                </View>
               <Pressable onPress={onProfileModalOpen}>
                    <EditIcon width={20} height={20} style={{color:'#075E54', marginLeft:10}} />
                </Pressable>
            </View>
            <View style={styles.headerRight}>
                <Pressable onPress={onPreview}>
                    <DownloadIcon width={20} height={20} style={{color:'#075E54'}} />
                </Pressable>
                <Pressable onPress={onSaveModalOpen}>
                    <SaveIcon width={20} height={20} style={{marginLeft:10, color:'#075E54'}} />
                </Pressable>
            </View>
        </View> )
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection:'row',
      height:45,
      backgroundColor:'#FAFAFA',
      shadowColor: '#808080',
      shadowOffset: {width: -2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 3
    },
    headerLeft:{
        flex:2,
        flexDirection:'row',
        alignItems:'center'
    },
    headerRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginHorizontal:10
    },
    avatar:{
        width: 36,
		height: 36,
		borderRadius: 36,
		resizeMode: "cover"
    },
    headerCenterText:{
        marginLeft: 5,
        fontWeight:'600',
        fontSize:14,
        width: 100
    },
    headerCenterInlineText: {
        marginLeft: 5,
        fontWeight:'500',
        color: "#c8c8c8",
        fontSize:12,
        width: 100
    },
    followTypeType: {
        justifyContent:'flex-start',
        marginLeft:5,
        fontSize:13,
        fontWeight:'bold',
        color:'#3897f0'
    }
});

export default InstagramPostHeader;