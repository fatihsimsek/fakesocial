import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import { LeftIcon, SaveIcon, DownloadIcon, EditIcon } from '../icons';

function WhatsappHeader({data, dispatch, openPreviewModal, openSaveModal}) {
    const navigation = useNavigation();
    const [textEditing, setTextEditing] = useState(false);

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

    const onNameChange = (text) => {
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                fullname: text
            }
        });
    };

    const onSaveModalOpen = () => {
        openSaveModal();
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Pressable onPress={onNavigateHome}>
                    <LeftIcon width={24} height={24} style={{color:'#075E54'}}></LeftIcon>
                </Pressable>
            </View>
            <View style={styles.headerCenter}>
                <Pressable onPress={onChangePhoto}>
                {
                    data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.avatar} /> 
                                              : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />
                }
                </Pressable>
                { textEditing ?
                    <TextInput style={styles.headerCenterText} value={data.partner.fullname} autoFocus onChangeText={onNameChange} autoCorrect={false} /> :
                    <Text style={styles.headerCenterText}>{data.partner.fullname}</Text> 
                }
                <Pressable onPress={() => setTextEditing(previouseValue => !previouseValue)}>
                    <EditIcon width={24} height={24} style={{color:'#075E54', marginLeft:5}} />
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
      backgroundColor:'#eee4dc'
    },
    headerLeft:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10
    },
    headerCenter:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
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
		borderWidth: 0.5,
        borderColor:'#075E54',
		borderRadius: 36,
		resizeMode: "cover"
    },
    headerCenterText:{
        marginLeft: 10,
        fontWeight:'600',
        fontSize:14,
        width: 100
    }
});

export default WhatsappHeader;