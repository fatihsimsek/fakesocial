import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

function InstagramPostBody({data, dispatch}){
    const options = {
        title: 'Select Image',
        mediaType: 'photo',
        includeBase64: false
    };

    const onChangePhoto = () => {
        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('Image picker error: ', response.error);
            } else {
              let imageUri = response.uri || response.assets?.[0]?.uri;
              dispatch({
                type: 'updatePostImage',
                data: imageUri
              });
            }
        });
    };

    return (
        <View style={styles.postBody}>
            <Pressable flex={1} onPress={onChangePhoto}>
            {
                    data.imageUrl ? <Image source={{uri: data.imageUrl}} style={styles.postImage} /> 
                                  : <Image source={require('../../assets/images/instagrampost_default.jpg')} style={styles.postImage} />
            }
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    postBody: {
        flex:1,
        marginBottom: 10
    },
    postImage: {
        flex:1,
        contentFit: "cover"
    }
});

export default InstagramPostBody;