import React from 'react';
import { Text, TextInput, View, StyleSheet, Modal, Pressable, Switch } from 'react-native';

function InstagramPostFooterModal({data, dispatch, isVisible, close}){
    const toggleIsLike = (value) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                isLike:value
            }
        });
    };

    const onLikeCountChange = (text) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                likeCount:text
            }
        });
    };

    const onCommentCountChange = (text) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                commentCount:text
            }
        });
    };

    const onSharedCountChange = (text) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                sharedCount:text
            }
        });
    };

    const toggleShowMore = (value) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                showMore:value
            }
        });
    };

    const onTimeChange = (text) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                time:text
            }
        });
    };

    const onDescriptionChange = (text) => {
        dispatch({
            type: 'updatePostDetail',
            data: {
                ...data.detail,
                description:text
            }
        });
    };

    return (
        <Modal animationType="slide" visible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.centerContainer}>
                    <View style={styles.modalChoiceContainer}>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Like:</Text>
                            <Switch style={styles.switchValue} value={data.detail.isLike}
                                    onValueChange={toggleIsLike} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Like Count:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type LikeCount"} 
                                        value={data.detail.likeCount}
                                        onChangeText={onLikeCountChange} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Comment Count:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type Comment Count"} 
                                        value={data.detail.commentCount}
                                        onChangeText={onCommentCountChange} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Shared Count:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type Shared Count"} 
                                        value={data.detail.sharedCount}
                                        onChangeText={onSharedCountChange} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Show More:</Text>
                            <Switch style={styles.switchValue} value={data.detail.showMore}
                                    onValueChange={toggleShowMore} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Time:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type Time"} 
                                        value={data.detail.time}
                                        onChangeText={onTimeChange} />
                        </View>
                        <View style={styles.modalRowContainer}>
                            <Text style={styles.modalText}>Description:</Text>
                            <TextInput style={styles.modalValue} 
                                        placeholder={"Type Description"} 
                                        value={data.detail.description}
                                        onChangeText={onDescriptionChange}
                                        multiline={true}
                                        underlineColorAndroid={"transparent"} />
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
        width: "90%",
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

export default InstagramPostFooterModal;