import React, {useState} from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SendIcon } from '../icons';

function WhatsappFooter() {
    const [message, setMessage] = useState('');

    const onPress = () => {

    };

    return (
        <View style={styles.footerContainer}>
            <View style={styles.textInputContainer}>
                <TextInput
                    placeholder={"Type a message"}
                    style={styles.textInput}
                    multiline
                    value={message}
                    onChangeText={setMessage} />
            </View>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.buttonContainer}>
                    <SendIcon size={28} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    footerContainer: {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'flex-end',
    },
    textInputContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 13,
        borderRadius: 25,
        marginRight: 5,
        flex: 1,
        alignItems: 'flex-end',
    },
    textInput: {
        flex: 1,
        marginHorizontal: 10
    },
    buttonContainer: {
        backgroundColor: '#0C6157',
        borderRadius: 25,
        width: 45,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default WhatsappFooter;