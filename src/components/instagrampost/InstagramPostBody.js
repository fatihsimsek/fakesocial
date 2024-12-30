import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

function InstagramPostBody({data, dispatch}){
    return (
        <View style={styles.postBody}>
            {
                    data.imageUrl ? <Image source={{uri: data.imageUrl}} style={styles.postImage} /> 
                                  : <Image source={require('../../assets/images/beach_default.jpg')} style={styles.postImage} />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    postBody: {
        flex:2,
        marginBottom: 10
    },
    postImage: {
        flex:1,
        contentFit: "cover"
    }
});

export default InstagramPostBody;