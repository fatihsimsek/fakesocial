import React, {useState} from 'react';
import { Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TextInput, Text, View, StyleSheet, Modal, Pressable, Switch } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { FollowType } from '../../views/PostTypes';

function InstagramPostProfileModal({data, dispatch, isVisible, close}){
    const [followTypeOpen, setFollowTypeOpen] = useState(false);

    const [followTypes, setFollowTypes] = useState([
        {label: FollowType.HIDE, value: FollowType.HIDE},
        {label: FollowType.FOLLOW, value: FollowType.FOLLOW},
        {label: FollowType.FOLLOWING, value: FollowType.FOLLOWING}
    ]);

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

    const onGeoLocationChange = (text) => {
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                geoLocation:text
            }
        });
    };

    const onFollowTypeChange = (callback) => {
        let selectedValue = callback(data.partner.followType);
        dispatch({
            type: 'updatePartner',
            data: {
                ...data.partner,
                followType:selectedValue
            }
        });
    };
    
    return (
        <Modal animationType="slide" visible={isVisible}>
            <KeyboardAvoidingView flex={1} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback flex={1} onPress={Keyboard.dismiss}>
                <View style={styles.modalContainer}>
                    <View style={styles.centerContainer}>
                    <View style={styles.modalChoiceContainer}>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Fullname:</Text>
                                <TextInput style={styles.modalValue} 
                                            placeholder={"Type Fullname"} 
                                            value={data.partner.fullname}
                                            onChangeText={onFullnameChange}
                                            autoCorrect={false} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>IsVerified:</Text>
                                <Switch style={styles.switchValue} value={data.partner.isVerified}
                                        onValueChange={toggleMessageIsVerified} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Geo Location:</Text>
                                <TextInput style={styles.modalValue} 
                                            placeholder={"Type Geo Location"} 
                                            value={data.partner.geoLocation}
                                            onChangeText={onGeoLocationChange}
                                            autoCorrect={false} />
                            </View>
                            <View style={styles.modalRowContainer}>
                                <Text style={styles.modalText}>Follow Type:</Text>
                                <View style={styles.modalValue} >
                                    <DropDownPicker
                                        open={followTypeOpen}
                                        value={data.partner.followType}
                                        items={followTypes}
                                        setOpen={setFollowTypeOpen}
                                        setValue={onFollowTypeChange}
                                        setItems={setFollowTypes} />
                                </View>            
                            </View>
                        </View>
                        <View style={styles.modalButtonContainer}>
                            <Pressable onPress={close}>
                                <Text style={styles.modalButtonTextStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
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

export default InstagramPostProfileModal;