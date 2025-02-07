import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function WhatsappDateBreak({data}) {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{data.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        padding:10
    },
    messageText:{
        fontSize: 14,
        color: "#075E54",
        fontWeight:600
    }
});  

export default WhatsappDateBreak;