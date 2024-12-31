import React, {useRef}  from 'react';
import { Text, View, StyleSheet, Image, Modal, Pressable, Alert } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import { BlueCheckIcon, HeartIcon, MessageBubbleIcon, SendIcon, MoreHorizontalIcon, BookmarkIcon } from '../../components/icons';
import { FollowType } from "../PostTypes";

function InstagramPostPreview({data, dispatch, isVisible, close}){
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
                    <View style={styles.mainContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerLeft}>                 
                                {
                                    data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.profileAvatar} /> 
                                                            : <Image source={require('../../assets/images/user-icon.png')} style={styles.profileAvatar} />
                                }
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
                            </View>
                            <View style={styles.headerRight}>
                                <MoreHorizontalIcon width={20} height={20} style={{color:'#075E54'}} />
                            </View>
                        </View>
                        <View style={styles.postBody}>
                        {
                            data.imageUrl ? <Image source={{uri: data.imageUrl}} style={styles.postImage} /> 
                                        : <Image source={require('../../assets/images/beach_default.jpg')} style={styles.postImage} />
                        }
                        </View>
                        <View style={styles.footerContainer}>
                            <View style={styles.iconsContainer}>
                                <View style={styles.iconsLeftSide}>
                                    {
                                        data.detail.isLike ? <HeartIcon width="28" height="28" stroke="red" fill="red" style={styles.icons}></HeartIcon>
                                                        : <HeartIcon width="28" height="28" color="black"  style={styles.icons}></HeartIcon>
                                    }
                                    {
                                        data.detail.likeCount > 0 && <Text style={styles.iconCountText}>{data.detail.likeCount}</Text>
                                    }
                                    <MessageBubbleIcon width="28" height="28" color="black" style={styles.icons}></MessageBubbleIcon>
                                    {
                                        data.detail.commentCount > 0 && <Text style={styles.iconCountText}>{data.detail.commentCount}</Text>
                                    }
                                    <SendIcon width="28" height="28" color="black" style={styles.icons}></SendIcon>
                                    {
                                        data.detail.sendCount > 0 && <Text style={styles.iconCountText}>{data.detail.sendCount}</Text>
                                    }
                                </View>
                                <View style={styles.iconsRightSide}>
                                    <BookmarkIcon width="28" height="28" color="black" style={styles.icons}></BookmarkIcon>
                                </View>
                            </View>
                            <View style={styles.commentContainer}>
                                <View style={styles.postDescription}>
                                    <Text style={styles.partnerFullnameText}>{data.partner.fullname}</Text>
                                    <View style={{alignContent:'flex-start', flexShrink:1}}>
                                        <Text>
                                            {data.detail.description}
                                            {
                                                data.detail.showMore && <Text style={styles.postDescriptionMoreText}> ...more</Text>
                                            }
                                        </Text>
                                    </View>
                                </View>
                                <View style={{marginVertical:5}}>
                                    <Text style={styles.timeText}>{data.detail.time}</Text>
                                </View>
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
        justifyContent:'flex-start',
        paddingTop:5,
        marginBottom:5,
        backgroundColor:'white'
    },
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
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10
    },
    profileAvatar:{
        width: 36,
		height: 36,
		borderRadius: 36,
		resizeMode: "cover"
    },
    headerRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginHorizontal:10
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
    },
    postBody: {
        height:'75%',
        marginBottom: 8
    },
    postImage: {
        width:'100%',
        height:'100%',
        contentFit: "cover"
    },
    footerContainer: {
        width:'100%',
        marginTop:0
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
        marginHorizontal:10,
        marginVertical:5
    },
    postDescription: {
        flexDirection:'row',
        marginTop:5,
        marginBottom:0
    },
    partnerFullnameText: {
        fontWeight: "600",
        marginRight: 3
    },
    postDescriptionMoreText: {
        color:'#999999',
        fontSize:12
    },
    timeText: {
        color:'#999999',
        fontSize:12,
        fontWeight:500
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

export default InstagramPostPreview;