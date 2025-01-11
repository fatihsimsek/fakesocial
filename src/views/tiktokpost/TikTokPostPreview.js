import React, {useRef}  from 'react';
import { Text, Modal, View, StyleSheet, Image, Pressable, Alert } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import { SearchIcon, PlusCircleIcon } from '../../components/icons';

function TikTokPostPreview({data, dispatch, isVisible, close}){
    const previewRef = useRef();

    const cancelModal = () => {
        close();
    };

    const takeScreenShot = () => {
        previewRef.current.capture().then(uri => {
            CameraRoll.saveAsset(uri, { type: 'photo' });
            Alert.alert("Success", "Screenshot is saved on photos");
            close();
        }).catch((err) => {
            console.log('Capture ScreenShot error:')
            console.log(err);
         });
    };

    return (
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <ViewShot ref={previewRef} style={styles.centerContainer} 
                      options={{fileName: 'Fake Social',  format: 'jpg', quality: 0.9 }}>
                    {
                        data.imageUrl ? <Image source={{uri: data.imageUrl}} style={styles.backgroundImg} resizeMode="cover" /> 
                                      : <Image source={require('../../assets/images/tiktokpost_default.png')} style={styles.backgroundImg} resizeMode="cover" />
                    } 
                    <View style={styles.mainContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerLeft}>
                                <Image source={require('../../assets/images/tiktok_live.png')} style={{width:24, height:24}} /> 
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
                                <SearchIcon width={24} height={24} style={{color:'white'}} />
                            </View>
                        </View>
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
                        <View style={styles.footerContainer}>
                            <View style={styles.postDescriptionContainer}>
                                <Text style={styles.partnerFullnameText}>{data.partner.fullname}</Text>
                                <Text style={styles.postDescription}>{data.detail.description}</Text>
                            </View>
                            <View style={styles.profileContainer}>
                            {
                                data.albumImageUrl ? <Image source={{uri: data.albumImageUrl}} style={styles.albumAvatar} />
                                                    : <Image source={require('../../assets/images/user-icon.png')} style={styles.albumAvatar} />
                            }         
                            </View>
                        </View>
                    </View>
                 </ViewShot>
                <View style={styles.modalButtonContainer}>
                    <Pressable onPress={cancelModal}>
                        <Text style={styles.modalButtonTextStyle}>Cancel</Text>
                    </Pressable>
                    <Pressable onPress={takeScreenShot}>
                        <Text style={styles.modalButtonTextStyle}>Take</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    centerContainer: {
        flex:1,
        width:"100%",
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    mainContainer: {
        width:'100%',
        height:'100%',
        position:'absolute',
        ...Platform.select({
          ios: {
            paddingTop:20
          },
          android: {
            paddingTop:10
          }
        })
    },
    backgroundImg:{
        flex:1,
        width:"100%",
        height:"100%"
    },
    headerContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        height:45
    },
    headerLeft:{
        marginHorizontal:10,
        flexDirection:'row',
        alignItems:'center'
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
    },
    postBody:{
        flex:1,
        marginVertical:10,
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
    },
    footerContainer: {
        marginHorizontal:10,
        marginBottom:10,
        flexDirection:'row'
    },
    postDescriptionContainer: {
        flex:1,
        flexShrink:1,
        marginRight:10
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
    },
    albumAvatar: {
        width: 42,
		height: 42,
        borderRadius: 42,
    },
    modalButtonContainer: {
        flexDirection:'row',
    },
    modalButtonTextStyle: {
        borderRadius: 5,
        padding: 10,
        marginBottom:5,
        marginHorizontal:10,
        elevation: 2,
        backgroundColor: '#25d366'
    }
});

export default TikTokPostPreview;