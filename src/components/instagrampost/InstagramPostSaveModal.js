import React from 'react';
import { Text, TextInput, View, StyleSheet, Modal, Pressable } from 'react-native';

function InstagramPostSaveModal({data, dispatch, isVisible, close}){
    return (
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.centerContainer}>
                    <View style={styles.modalButtonContainer}>
                        <Pressable onPress={close}>
                            <Text style={styles.modalButtonTextStyle}>Close</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    centerContainer: {
        width: "80%",
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 20,
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
    modalButtonContainer: {
        flexDirection:'row',
    }
});

export default InstagramPostSaveModal;