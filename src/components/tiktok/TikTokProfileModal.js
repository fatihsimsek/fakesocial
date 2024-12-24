import React from 'react';
import { Platform, TextInput, Text, View, StyleSheet, Modal, Pressable, Switch, Image } from 'react-native';

function TikTokProfileModal({data, dispatch, isVisible, close}) {

    const toggleMessageIsOnline= (value) => {
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                isOnline: value
            }
        });
    };

    const toggleMessageIsVerified = (value) => {
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                isVerified:value
            }
        });
    };

    const onFullnameChange = (text) => {
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                fullname:text
            }
        });
    };

    const onOnlineTextChange = (text) => {
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                onlineText:text
            }
        });
    };

    return(
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.centerContainer}>
                    <View style={styles.modalChoiceContainer}>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Fullname:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type Fullname"} 
                                        value={data.partner.fullname}
                                        onChangeText={onFullnameChange} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>IsOnline:</Text>
                            <Switch style={styles.switchValue} value={data.partner.isOnline}
                                    onValueChange={toggleMessageIsOnline} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>IsVerified:</Text>
                            <Switch style={styles.switchValue} value={data.partner.isVerified}
                                    onValueChange={toggleMessageIsVerified} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Online Text:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type Online Text"} 
                                        value={data.partner.onlineText}
                                        onChangeText={onOnlineTextChange} />
                        </View>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Pressable onPress={close}>
                            <Text style={styles.modalButtonTextStyle}>Close</Text>
                        </Pressable>
                    </View>
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
    modalChoiceContainer :{
    },
    modalRowContainer:{
        flexDirection:'row',
        paddingVertical:10,
        paddingHorizontal:10
    },
    modalText:{
        width:"33%",
        justifyContent:'center',
        alignSelf:'center',
        fontWeight:'500'
    },
    modalValue:{
        width:"66%",
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    switchValue:{
        flexDirection:'row',
        justifyContent:'flex-start',
        ...Platform.select({
            ios: {
              width: "66%",
            },
        })
    },
    modalButtonContainer: {
        flexDirection:'row',
    },
    modalButtonTextStyle: {
        borderRadius: 5,
        padding: 10,
        marginBottom:10,
        marginTop:20,
        marginHorizontal:10,
        elevation: 2,
        backgroundColor: '#25d366'
    }

});

export default TikTokProfileModal;