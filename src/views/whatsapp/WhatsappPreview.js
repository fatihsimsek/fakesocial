import React, {useRef, useState} from 'react';
import { Text, Modal, View, StyleSheet, ImageBackground, Image, Pressable, FlatList } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import { CheckIcon } from '../../components/icons';
import { WhatsappContentType, WhatsappMessageStatus, WhatsappMessageType } from "./WhatsappTypes";

function WhatsappPreview({data, dispatch, isVisible, close}) {
    const previewRef = useRef();

    const cancelModal = () => {
        close();
    };

    const takeScreenShot = () => {
        previewRef.current.capture().then(uri => {
            CameraRoll.saveAsset(uri, { type: 'photo' });
            close();
        });
    };

    let getMessageStatusColor = (messageStatus) => {
        switch(messageStatus){
            case WhatsappMessageStatus.SEEN:
                return "#34B7F1";
            case WhatsappMessageStatus.READ:
                return "#075E54";
            default:
                return "#128C7E";
        }
    }

    return(
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <ViewShot ref={previewRef} style={styles.centerContainer} 
                      options={{fileName: 'Fake Social',  format: 'jpg', quality: 0.9 }}>
                    <ImageBackground style={styles.backgroundImg} source={require('../../assets/images/whatsapp.png')}>
                      <View style={styles.mainContainer}>
                        <View style={styles.headerContainer}>
                            <View style={styles.headerCenter}>
                                {
                                    data.partner.profileImage ? <Image source={{uri: data.partner.profileImage}} style={styles.avatar} /> 
                                                              : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />
                                }
                                <Text style={styles.headerCenterText}>{data.partner.fullname}</Text> 
                            </View>
                        </View>
                        <View style={styles.containerAlignTop}>
                            <FlatList
                                style={{ flexGrow: 0, height:"95%" }}
                                data={data.contents}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    let isMyMessage = item.messageType === WhatsappMessageType.SEND;
                                    let showReachIcon = isMyMessage && (item.messageStatus === WhatsappMessageStatus.RECEIVED || item.messageStatus === WhatsappMessageStatus.SEEN);
                                    let messageStatusColor = getMessageStatusColor(item.messageStatus);
                                    
                                    if(item.type == WhatsappContentType.BREAK) {
                                        return (
                                            <View style={styles.dateBreakContainer}>
                                                <Text style={styles.dateBreakText}>{item.content}</Text>
                                            </View>)
                                    }
                                    else {
                                       return (
                                            <View style={{
                                                ...styles.messageContainer,
                                                alignSelf: isMyMessage ? "flex-end": "flex-start",
                                                backgroundColor: isMyMessage ? "#dfffc7" : "#fcfcfc",
                                                borderBottomLeftRadius: isMyMessage ? 10 : 0,
                                                borderBottomRightRadius: isMyMessage ? 0 : 10,
                                            }}>
                                                <View style={{
                                                    ...styles.leftMessageArrow,
                                                    display: isMyMessage ? "none" : "flex",
                                                    }}>
                                                </View>
                                                {
                                                  (item.imageUrl?.length > 0) 
                                                                ? <Image source={{uri: item.imageUrl}} style={{width:"75%", paddingVertical:10, paddingLeft:10, height: 150}}></Image>
                                                                : <Text style={{...styles.messageText, left: isMyMessage ? 10 : 0}}>{item.content}</Text>
                                                }
                                                <View style={styles.timeAndReadContainer}>
                                                    <Text style={styles.timeText}>{item.time}</Text>
                                                    <View style={styles.checkContainer}>
                                                        {isMyMessage && <CheckIcon flex={1} width={12} height={12} strokeWidth={showReachIcon ? 3 : 2} color={messageStatusColor} />}
                                                        {showReachIcon && <CheckIcon flex={1} left={-8} width={12} strokeWidth={3} height={12} color={messageStatusColor} />}
                                                    </View>
                                                    <View style={{...styles.rightMsgArrow, display: isMyMessage ? "flex" : "none"}}></View>
                                                </View>
                                            </View>
                                        )
                                    }
                                }}
                            />
                        </View>
                      </View>              
                    </ImageBackground>
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
        padding: 20,
        paddingBottom:10,
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
    screenshotContainer:{
        width:"90%"
    },
    mainContainer: {
      justifyContent:'flex-start',
      paddingTop:10
    },
    backgroundImg:{
        flex:1,
        width:"100%"
    },
    headerContainer: {
        height:40,
        backgroundColor:'#eee4dc',
        justifyContent:"center"
    },
    headerCenter:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerCenterText:{
        marginLeft: 5,
        fontWeight:'600',
        fontSize:14
    },
    avatar:{
        width: 30,
		height: 30,
		borderWidth: 0.5,
        borderColor:'#075E54',
		borderRadius: 30,
		resizeMode: "cover"
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
        fontSize: 14,
        color: "#075E54",
        fontWeight:600
    },
    messageContainer: {
        width: "66%",
        marginVertical: 3,
        marginHorizontal: 16,
        paddingVertical: 0,
        flexDirection: "row",
        borderRadius: 10,
      },
      leftMessageArrow: {
        height: 0,
        width: 0,
        borderLeftWidth: 10,
        borderLeftColor: "transparent",
        borderBottomColor: "#fff",
        borderBottomWidth: 10,
        alignSelf: "flex-end",
        borderRightColor: "black",
        right: 10,
        bottom: 0,
      },
      messageText: {
        fontSize: 14,
        width: "75%",
        paddingVertical:10
      },
      timeAndReadContainer: {
        flexDirection: "row",
      },
      timeText: {
        fontSize: 10,
        color: "#7e8689",
        alignSelf:'flex-end',
        justifyContent:'flex-end',
        flexDirection:'column',
        paddingVertical:3
      },
      rightMsgArrow: {
        height: 0,
        width: 0,
        borderRightWidth: 12,
        borderRightColor: "transparent",
        borderBottomColor: "#e7ffdb",
        borderBottomWidth: 12,
        alignSelf: "flex-end",
        left: -2,
        bottom: 0,
      },
      checkContainer:{
          alignSelf:'flex-end',
          flexDirection:'row',
          paddingVertical:2,
          paddingLeft:3,
          width:25
      }
  });

export default WhatsappPreview;