import React, {useRef} from 'react';
import { Text, Alert, Modal, View, StyleSheet, ImageBackground, Image, Pressable, FlatList } from 'react-native';
import ViewShot from 'react-native-view-shot';
import { CameraRoll } from "@react-native-camera-roll/camera-roll"
import { ConversationContentType, ConversationMessageType } from "../ConversationTypes";

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
                                <Text style={styles.headerCenterText}>{data.partner.fullname}</Text> 
                            </View>
                        </View>
                        <View style={styles.containerAlignTop}>
                            <FlatList
                                style={{ flexGrow: 0, height:"95%" }}
                                data={data.contents}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    let isMyMessage = item.messageType === ConversationMessageType.SEND;
                                    if(item.type == ConversationContentType.BREAK) {
                                        return (
                                            <View style={styles.dateBreakContainer}>
                                                <Text style={styles.dateBreakText}>{item.content}</Text>
                                            </View>
                                        )
                                    }
                                    else {
                                        if(data.imageUrl?.length > 0){
                                            return (
                                                <View style={{...styles.imageContainer,
                                                              alignSelf: isMyMessage ? "flex-end": "flex-start"}}>
                                                    <Image source={{uri: item.imageUrl}} style={{width:"98%", paddingTop:10, paddingLeft:10, height: 150}}></Image>
                                                </View>
                                            )
                                        }
                                        else {
                                            return (
                                                <View style={{
                                                                ...styles.messageContainer,
                                                                alignSelf: isMyMessage ? "flex-end": "flex-start",
                                                                backgroundColor: isMyMessage ? "#f5f5f5" : "#ffffff",
                                                                borderBottomLeftRadius: 10,
                                                                borderBottomRightRadius: 10}}>
                                                    <View style={{flexDirection:'column'}}>
                                                        <View style={{flexDirection:'row'}}>
                                                            <Text style={styles.messageText}>{item.content}</Text>
                                                        </View>
                                                    </View>
                                                </View>
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
      paddingTop:10,
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
    headerCenterText:{
        marginLeft: 10,
        fontWeight:'600',
        fontSize:14,
        width: 100
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
        fontSize: 12,
        color: "#c8c8c8",
        fontWeight:600
    },
    messageContainer: {
        width: "66%",
        marginVertical: 3,
        marginHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row",
        borderRadius: 10,
        borderColor: '#e9e9e9',
        borderWidth:1
      },
      imageContainer: {
        width: "66%",
        marginVertical: 3,
        marginHorizontal: 10,
        paddingVertical: 5,
        flexDirection: "row"
      },
      messageText: {
        fontSize: 14,
        padding:10
      }
  });

export default InstagramPreview;