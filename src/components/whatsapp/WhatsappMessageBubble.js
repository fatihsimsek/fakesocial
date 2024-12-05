import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { WhatsappMessageType, WhatsappMessageStatus } from '../../views/whatsapp/WhatsappTypes';
import { CheckIcon } from '../icons';

function WhatsappMessageBubble({data}) {
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

    const isMyMessage = data.messageType === WhatsappMessageType.SEND;
    const showReachIcon = isMyMessage && (data.messageStatus === WhatsappMessageStatus.RECEIVED || data.messageStatus === WhatsappMessageStatus.SEEN);
    const messageStatusColor = getMessageStatusColor(data.messageStatus);

    return (
        <View style={{
                ...styles.messageContainer,
                alignSelf: isMyMessage ? "flex-end": "flex-start",
                backgroundColor: isMyMessage ? "#dfffc7" : "#fcfcfc",
                borderBottomLeftRadius: isMyMessage ? 10 : 0,
                borderBottomRightRadius: isMyMessage ? 0 : 10}}>
            <View style={{
                ...styles.leftMessageArrow,
                display: isMyMessage ? "none" : "flex",
                }}>
            </View>
            <View style={{flexDirection:'column'}}>
                {
                  (data.imageUrl?.length > 0) && 
                  <Image source={{uri: data.imageUrl}} style={{width:"98%", paddingTop:10, paddingLeft:10, height: 150}}></Image>
                }
                <View style={{flexDirection:'row'}}>
                  <Text style={{...styles.messageText, left: isMyMessage ? 10 : 0}}>{data.content}</Text>
                  <View style={{
                      ...styles.timeAndReadContainer,
                      left: isMyMessage ? 10 : 0 }}>
                      <Text style={styles.timeText}>{data.time}</Text>
                      <View style={styles.checkContainer}>
                          {isMyMessage && <CheckIcon flex={1} width={12} height={12} strokeWidth={showReachIcon ? 3 : 2} color={messageStatusColor} />}
                          {showReachIcon && <CheckIcon flex={1} left={-8} width={12} strokeWidth={3} height={12} color={messageStatusColor} />}
                      </View>
                  </View>
                </View>
            </View>
            <View style={{
                    ...styles.rightMsgArrow,
                    display: isMyMessage ? "flex" : "none",
                }}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
      width: "76%",
      paddingVertical:10
    },
    timeAndReadContainer: {
      flexDirection: "row"
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
      left:3,
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

export default WhatsappMessageBubble;