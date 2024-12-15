import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { ConversationMessageType, ConversationMessageStatus } from '../../views/ConversationTypes';
import { CheckIcon } from '../icons';

function InstagramMessageBubble({data}) {
    const isMyMessage = data.messageType === ConversationMessageType.SEND;
    return (
        <View style={{
                ...styles.messageContainer,
                alignSelf: isMyMessage ? "flex-end": "flex-start",
                backgroundColor: isMyMessage ? "#f5f5f5" : "#ffffff",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10}}>
            <View style={{flexDirection:'column'}}>
                {
                  (data.imageUrl?.length > 0) && 
                  <Image source={{uri: data.imageUrl}} style={{width:"98%", paddingTop:10, paddingLeft:10, height: 150}}></Image>
                }
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.messageText}>{data.content}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    messageText: {
      fontSize: 14,
      width: "76%",
      padding:10
    }
  });

export default InstagramMessageBubble;