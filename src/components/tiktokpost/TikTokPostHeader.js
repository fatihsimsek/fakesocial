import React from 'react';
import { Text, TextInput, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { LeftIcon, RightIcon, SaveIcon, DownloadIcon, EditIcon, BlueCheckIcon } from '../icons';

function TikTokPostHeader({data, dispatch, openPreviewModal, openSaveModal}){
    const navigation = useNavigation();

    const onNavigateHome = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    const onPreview = () => {
        openPreviewModal();
    };

    const onSaveModalOpen = () => {
        openSaveModal();
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <Pressable onPress={onNavigateHome}>
                    <LeftIcon style={{color:'white'}}></LeftIcon>
                </Pressable>
            </View>
            <View style={styles.headerCenter}>
                <Text style={styles.headerText}>Explore</Text>
                <Text style={styles.headerText}>Following</Text>
                <View style={styles.headerCenterTextActive}>
                    <Text style={styles.headerText}>For You</Text>
                    <View style={styles.headerTextActive}></View>
                </View> 
            </View>
            <View style={styles.headerRight}>
                <Pressable onPress={onPreview}>
                    <DownloadIcon width={24} height={24} style={{color:'white'}} />
                </Pressable>
                <Pressable onPress={onSaveModalOpen}>
                    <SaveIcon width={24} height={24} style={{marginLeft:10, color:'white'}} />
                </Pressable>
            </View>
        </View>)
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:50
      },
      headerLeft:{
          marginRight:10,
          flexDirection:'row',
          alignItems:'center',
          marginHorizontal:10
      },
      headerCenter:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignSelf:'center'
      },
      headerCenterTextActive:{
        flexDirection:'column',
        justifyContent:'center'
      },
      headerText :{
        color:'white',
        fontWeight:700,
        fontSize: 17,
        paddingRight:10
      },
      headerTextActive: {
        width:30,
        alignSelf:'center',
        paddingBottom:5,
        borderBottomColor:'white',
        borderBottomWidth:4
      },
      headerRight:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:10
    }
});

export default TikTokPostHeader;