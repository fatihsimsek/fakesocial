import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function InstagramDateBreak({data}) {
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
        fontSize: 12,
        color: "#c8c8c8",
        fontWeight:600
    }
});  

export default InstagramDateBreak;