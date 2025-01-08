import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ConversationMessageType, ConversationMessageStatus } from '../../views/ConversationTypes';

function TikTokMessageBubble({data, partner}) {
    const isMyMessage = data.messageType === ConversationMessageType.SEND;
    if(data.imageUrl?.length > 0){
      return (
        <View style={{
          ...styles.imageContainer,
          width: isMyMessage ? "66%" : '75%',
          alignSelf: isMyMessage ? "flex-end": "flex-start"}}>
          {
            !isMyMessage && (partner.profileImage ? <Image source={{uri: partner.profileImage}} style={styles.avatar} /> 
                                                  : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />)
          }
          <Image source={{uri: data.imageUrl}} style={styles.imageSelf}></Image>
        </View>
      );
    }
    else {
      return (
        <View style={{
          width: isMyMessage ? "66%" : '75%',
          alignSelf: isMyMessage ? "flex-end": "flex-start",
          flexDirection: "row",
          margin: 3
        }}>
          {
            !isMyMessage && (partner.profileImage ? <Image source={{uri: partner.profileImage}} style={styles.avatar} /> 
                                                  : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />)
          }
          <View style={{
                ...styles.leftMessageArrow,
                backgroundColor: "#ffffff",
                display: isMyMessage ? "none" : "flex",
                }}>
          </View>
          <View style={{
            ...styles.messageContainer,     
            backgroundColor: isMyMessage ? "#00a2c8" : "#ffffff",
            borderBottomLeftRadius: isMyMessage ? 10 : 0,
            borderBottomRightRadius: isMyMessage ? 0 : 10}}>
             <Text style={{...styles.messageText, 
                           color: isMyMessage ? "#ffffff" : "#000000"}}>
                {data.content}
              </Text>
          </View>
          <View style={{
                    ...styles.rightMsgArrow,
                    backgroundColor: "#00a2c8" ,
                    display: isMyMessage ? "flex" : "none",
                }}>
          </View>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    messageContainer: {
      paddingVertical: 5,
      borderRadius: 10,
      borderColor: '#e9e9e9',
      borderWidth:1,
      flex:1
    },
    imageContainer: {
      paddingVertical: 5,
      flexDirection: "row",
      margin: 3
    },
    imageSelf: {
      flex:1, 
      height: 150, 
      borderRadius:10
    },
    messageText: {
      fontSize: 14,
      padding:10
    },
    avatar:{
      width: 30,
      height: 30,
      borderRadius: 30,
      resizeMode: "cover",
      alignSelf:'flex-end'
    },
    leftMessageArrow: {
      height: 0,
      width: 0,
      borderLeftWidth: 10,
      borderLeftColor: "transparent",
      borderBottomColor: "#e9e9e9",
      borderBottomWidth: 10,
      alignSelf: "flex-end",
      right: 0,
      bottom: 0,
    },
    rightMsgArrow: {
      height: 0,
      width: 0,
      borderRightWidth: 12,
      borderRightColor: "#e7ffdb",
      borderBottomColor: "transparent",
      borderBottomWidth: 12,
      alignSelf: "flex-end",
      left:-1,
      bottom: 1,
    }
  });

export default TikTokMessageBubble;