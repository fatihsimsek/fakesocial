import React, {useRef} from 'react';
import { Text, Alert, Modal, View, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import { ConversationContentType, ConversationMessageType, ConversationMessageStatus } from "../ConversationTypes";
import { BlueCheckIcon, RightIcon, VideoIcon, PhoneIcon } from '../../components/icons';

function InstagramPreview({data, dispatch, isVisible, close}) {
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

    return(
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <ViewShot ref={previewRef} style={styles.centerContainer} 
                      options={{fileName: 'Fake Social',  format: 'jpg', quality: 0.9 }}>
                    <View style={styles.mainContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerLeft}>
                                {
                                    data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.avatar} /> 
                                                              : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />
                                }
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
                            </View>
                            <View style={styles.headerRight}>
                                <PhoneIcon width={24} height={24} style={{color:'#075E54', marginRight:15}} />
                                <VideoIcon width={24} height={24} style={{color:'#075E54'}} />
                            </View>
                        </View>
                        <View style={styles.containerAlignTop}>
                            <FlatList
                                style={{ flexGrow: 0, height:"95%" }}
                                data={data.contents}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    let isMyMessage = item.messageType === ConversationMessageType.SEND;
                                    let showStatus = data.contents?.length > 0 && data.contents[data.contents.length-1].id === item.id
                                                     && item.type === ConversationContentType.MESSAGE && item.messageType === ConversationMessageType.SEND
                                                    && item.messageStatus === ConversationMessageStatus.SEEN;
                                    if(item.type == ConversationContentType.BREAK) {
                                        return (
                                            <View style={styles.dateBreakContainer}>
                                                <Text style={styles.dateBreakText}>{item.content}</Text>
                                            </View> 
                                        )
                                    }
                                    else {
                                        if(item.imageUrl?.length > 0){
                                            return (
                                                <>
                                                <View style={{
                                                ...styles.imageContainer,
                                                width: isMyMessage ? "66%" : '75%',
                                                marginLeft: isMyMessage ? 0 : 10,
                                                marginRight: isMyMessage ? 10 : 0,
                                                alignSelf: isMyMessage ? "flex-end": "flex-start"}}>
                                                    {
                                                        !isMyMessage && (data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.messageAvatar} /> 
                                                                                                   : <Image source={require('../../assets/images/user-icon.png')} style={styles.messageAvatar} />)
                                                    }
                                                    <Image source={{uri: item.imageUrl}} style={styles.imageSelf}></Image>
                                                </View>
                                                { showStatus && (
                                                        <View style={styles.statusContainer}>
                                                            <Text style={styles.statusText}>Seen</Text>
                                                        </View>
                                                    )
                                                }
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <>
                                                <View style={{
                                                      width: isMyMessage ? "66%" : '75%',
                                                      alignSelf: isMyMessage ? "flex-end": "flex-start",
                                                      flexDirection: "row",
                                                      marginVertical: 3,
                                                      marginHorizontal: 10}}>
                                                    {
                                                        !isMyMessage && (data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.messageAvatar} /> 
                                                                                                   : <Image source={require('../../assets/images/user-icon.png')} style={styles.messageAvatar} />)
                                                    }
                                                    <View style={{
                                                        ...styles.messageContainer,   
                                                        backgroundColor: isMyMessage ? "#f5f5f5" : "#ffffff"}}>
                                                        <Text style={styles.messageText}>{item.content}</Text>
                                                    </View>
                                                </View>
                                                { showStatus && (
                                                        <View style={styles.statusContainer}>
                                                            <Text style={styles.statusText}>Seen</Text>
                                                        </View>
                                                    )
                                                }
                                                </>
                                            )
                                        }
                                    }
                                }}
                            />
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
    );
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
      paddingTop:20,
      marginBottom:15,
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
    headerRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginHorizontal:10
    },
    headerCenterText:{
        marginLeft: 10,
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
    modalButtonContainer: {
        flexDirection:'row',
    },
    modalButtonTextStyle: {
        borderRadius: 5,
        padding: 10,
        marginBottom:10,
        marginHorizontal:10,
        elevation: 2,
        backgroundColor: '#25d366'
    },
    containerAlignTop:{
        paddingVertical:10
    },
    listContent: {
        flex:1,
        flexGrow:0
    },
    dateBreakContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        padding:10
    },
    dateBreakText:{
        fontSize: 12,
        color: "#c8c8c8",
        fontWeight:600
    },
    messageContainer: {
        paddingVertical: 5,
        borderRadius: 10,
        borderColor: '#e9e9e9',
        borderWidth:1,
        flex:1
    },
    imageContainer: {
        paddingVertical: 5, 
        flexDirection: "row"
    },
    imageSelf: {
        flex:1, 
        height: 150, 
        borderRadius:10
    },
    messageAvatar:{
        width: 30,
        height: 30,
        borderRadius: 30,
        resizeMode: "cover",
        marginRight:5,
        alignSelf:'flex-end'
    },
    messageText: {
        fontSize: 14,
        padding:10
    },
    statusContainer: {
        alignItems:'flex-end',
        marginRight:15,
        marginTop:3
    },
    statusText: {
        color: "#c8c8c8"
    }
  });

export default InstagramPreview;