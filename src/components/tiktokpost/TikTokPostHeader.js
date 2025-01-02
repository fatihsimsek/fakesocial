import React from 'react';
import { Text, TextInput, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { LeftIcon, RightIcon, SaveIcon, DownloadIcon, EditIcon, BlueCheckIcon } from '../icons';

function TikTokPostHeader(){
    const navigation = useNavigation();

    const onNavigateHome = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <View style={{marginRight:10}}>
                    <Pressable onPress={onNavigateHome}>
                        <LeftIcon style={{color:'#075E54'}}></LeftIcon>
                    </Pressable>
                </View>
            </View>
        </View>)
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection:'row',
        height:45
      },
      headerLeft:{
          flex:2,
          flexDirection:'row',
          alignItems:'center'
      }
});

export default TikTokPostHeader;