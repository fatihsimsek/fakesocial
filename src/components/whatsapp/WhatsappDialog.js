import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import WhatsappDialogItem from './WhatsappDialogItem';

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

function WhatsappDialog({data}) {
    return (
        <View style={styles.containerAlignTop}>
            <FlatList
                data={data.contents}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <WhatsappDialogItem data={item} />
                )}
            />
        </View>
    );
}

export default WhatsappDialog;