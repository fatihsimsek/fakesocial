import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import { LeftIcon, RightIcon, SaveIcon, DownloadIcon, EditIcon, BlueCheckIcon } from '../icons';

function InstagramHeader({data, dispatch, openPreviewModal, openSaveModal, openProfileModal}) {
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
                        <LeftIcon width={24} height={24} style={{color:'#075E54'}}></LeftIcon>
                    </Pressable>
                </View>
                <Pressable onPress={onChangePhoto}>
                {
                    data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.avatar} /> 
                                              : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />
                }
                </Pressable>
                {
                    data.partner.isOnline && <View style={styles.onlineStatus}></View>
                }
                <View>
                    <Text style={styles.headerCenterText}>
                        {data.partner.fullname}
                    </Text> 
                    {
                        (data.partner.isOnline && data.partner.onlineText?.length > 0) &&   
                        <Text style={styles.headerCenterInlineText}>
                            {data.partner.onlineText}
                        </Text> 
                    }
                </View>
                {
                    data.partner.isVerified ? <BlueCheckIcon width={16} height={16} /> 
                                            : <RightIcon width={16} height={16} style={{color:'#075E54'}}/> 
                }
                <Pressable onPress={onProfileModalOpen}>
                    <EditIcon width={24} height={24} style={{color:'#075E54', marginLeft:10}} />
                </Pressable>
            </View>
            <View style={styles.headerRight}>
                <Pressable onPress={onPreview}>
                    <DownloadIcon width={24} height={24} style={{color:'#075E54'}} />
                </Pressable>
                <Pressable onPress={onSaveModalOpen}>
                    <SaveIcon width={24} height={24} style={{marginLeft:10, color:'#075E54'}} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection:'row',
      height:50,
      backgroundColor:'#FAFAFA',
      shadowColor: '#808080',
      shadowOffset: {width: -2, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 3
    },
    headerLeft:{
        flex:2,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:5
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
		borderWidth: 0.6,
        borderColor:'#075E54',
		borderRadius: 36,
		resizeMode: "cover",
        padding:3
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
    onlineStatus: {
        alignSelf:'flex-end',
        backgroundColor:'#78de45',
        width:10,
        height:10,
        borderRadius:5,
        top:-5,
        left:-10
    }
});

export default InstagramHeader;