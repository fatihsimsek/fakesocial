import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ConversationMessageType, ConversationMessageStatus } from '../../views/ConversationTypes';
import { CheckIcon } from '../icons';

function InstagramMessageBubble({data, partner}) {
    const isMyMessage = data.messageType === ConversationMessageType.SEND;
    if(data.imageUrl?.length > 0){
      return (
        <View style={{
          ...styles.imageContainer,
          width: isMyMessage ? "66%" : '75%',
          marginLeft: isMyMessage ? 0 : 10,
          marginRight: isMyMessage ? 10 : 0,
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
          marginVertical: 3,
          marginHorizontal: 10
        }}>
          {
            !isMyMessage && (partner.profileImage ? <Image source={{uri: partner.profileImage}} style={styles.avatar} /> 
                                                  : <Image source={require('../../assets/images/user-icon.png')} style={styles.avatar} />)
          }
          <View style={{
            ...styles.messageContainer,     
            backgroundColor: isMyMessage ? "#f5f5f5" : "#ffffff"}}>
              <Text style={styles.messageText}>{data.content}</Text>
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
      marginRight:5,
      alignSelf:'flex-end'
    }
  });

export default InstagramMessageBubble;