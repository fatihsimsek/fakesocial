import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import {LeftIcon} from '../icons';

function WhatsappHeader() {
    const navigation = useNavigation();

    const onNavigateHome = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <View>
                    <TouchableOpacity onPress={onNavigateHome}>
                        <LeftIcon></LeftIcon>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text>Home</Text>
                </View>
            </View>
            <View style={styles.headerCenter}>
            </View>
            <View style={styles.headerRight}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
      flexDirection:'row',
      height:40,
      backgroundColor:'#eee4dc'
    },
    headerLeft:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    headerCenter:{
        flex:1,
        justifyContent:'center'
    },
    headerRight:{
        flex:1
    }
});

export default WhatsappHeader;