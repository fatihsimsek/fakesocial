import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import InstagramDialogItem from './InstagramDialogItem';
import { ConversationMessageType , ConversationContentType, ConversationMessageStatus } from '../../views/ConversationTypes';

function InstagramDialog({data, dispatch, openModal}) {
    const onPressDialogItem = (item) => {
        let tempContent = {
            id: item.id,
            content: item.content,
            isSend: item.messageType == ConversationMessageType.SEND,
            isBreak: item.type == ConversationContentType.BREAK,
            status: item.messageStatus,
            time: item.time,
            imageUrl: item.imageUrl
        };

        dispatch({
            type: 'updateTempContent',
            data: tempContent
        });

        openModal();
    };

    let showStatus = function(contents, item) {
        return contents?.length > 0 && contents[contents.length-1].id === item.id
               && item.type === ConversationContentType.MESSAGE && item.messageType === ConversationMessageType.SEND
               && item.messageStatus === ConversationMessageStatus.SEEN;
    }

    return (
        <View style={styles.containerAlignTop}>
            <FlatList
                data={data.contents}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onPressDialogItem(item)}>
                        <InstagramDialogItem data={item} />
                        {
                            (showStatus(data.contents, item)) && 
                            <View style={styles.statusContainer}>
                                <Text style={styles.statusText}>Seen</Text>
                            </View>
                        }
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    containerAlignTop: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingVertical:10
    },
    listStyle: {
        flex: 1
    },
    statusContainer: {
        alignItems:'flex-end',
        marginRight:15,
        marginTop:3
    },
    statusText: {
        color: "#c8c8c8"
    }
});

export default InstagramDialog;