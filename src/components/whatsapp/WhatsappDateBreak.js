import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function WhatsappDateBreak({data}) {
    return (
        <View style={styles.messageContainer}>
            <Text>{data.content}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer: {
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        padding:10,
        fontSize: 16,
        color: "#7e8689",
        fontWeight:'bold'
    }
});  

export default WhatsappDateBreak;