import React from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import WhatsappDialogItem from './WhatsappDialogItem';
import { ConversationMessageType , ConversationContentType } from '../../views/ConversationTypes';

function WhatsappDialog({data, dispatch, openModal}) {
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

    return (
        <View style={styles.containerAlignTop}>
            <FlatList
                data={data.contents}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => onPressDialogItem(item)}>
                        <WhatsappDialogItem data={item} />
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
    }
});

export default WhatsappDialog;