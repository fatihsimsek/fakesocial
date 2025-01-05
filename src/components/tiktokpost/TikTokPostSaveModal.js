import React from 'react';
import { Text, TextInput, View, StyleSheet, Modal, Pressable, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Constant } from '../../views/Types';
import { generateUUID } from "../../navigators/Functions";

function TikTokPostSaveModal({data, dispatch, isVisible, close}){
    const savePost = async () => {

        if(data.title?.length == 0)
            return;

        try {
            let favouriteString = await AsyncStorage.getItem(Constant.FAVOURITE);
            let favourites = JSON.parse(favouriteString);

            if(favourites == null){
                favourites = [];
            }

            if(data.id) {
                dispatch({
                    type: 'updatePost',
                    data: {
                        id:data.id,
                        title:data.title
                    }
                });
                favourites = favourites.map((c) => {
                    if (c.id === data.id) {
                        return {...data};
                    } else {
                        return c;
                    }
                });
            }
            else {
                if(favourites.length >= Constant.MAX_FAVOURITE_ITEM_COUNT){
                    Alert.alert("Error", "Max Favourite Item Count:" + Constant.MAX_FAVOURITE_ITEM_COUNT);
                    return;
                }

                let id = generateUUID();
                dispatch({
                    type: 'updatePost',
                    data: {
                        id:id,
                        title:data.title
                    }
                });
                favourites.push({...data, id:id, title:data.title});
            }
            
            await AsyncStorage.setItem(Constant.FAVOURITE, JSON.stringify(favourites));
            Alert.alert("Success", "Save on favourite list");
        } 
        catch (error) {
            console.error('Save error:', error);
        }
        close();
    };

    const onTextChange = (text) => {
        dispatch({
            type: 'updatePostTitle',
            data: text
        });
    };

    return (
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.centerContainer}>
                    <View style={styles.modalChoiceContainer}>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Title:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type a title"} 
                                        value={data.title}
                                        onChangeText={onTextChange} />
                        </View>
                    </View>
                    <View style={styles.modalButtonContainer}>
                        <Pressable onPress={close}>
                            <Text style={styles.modalButtonTextStyle}>Cancel</Text>
                        </Pressable>
                        <Pressable onPress={savePost}>
                            <Text style={styles.modalButtonTextStyle}>Save</Text>
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
        paddingTop:40,
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

export default TikTokPostSaveModal;