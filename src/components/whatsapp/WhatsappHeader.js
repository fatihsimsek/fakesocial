import React, {useState} from 'react';
import { Text, TextInput, View, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation, CommonActions } from '@react-navigation/native';
import { LeftIcon, SaveIcon, SearchIcon, EditIcon } from '../icons';

function WhatsappHeader({data, dispatch}) {
    const navigation = useNavigation();
    const [textEditing, setTextEditing] = useState(false);
    const [fullname, setFullname] = useState(data.partner.fullname);

    const onNavigateHome = () => {
        navigation.dispatch(CommonActions.goBack());
    }

    const onSave = () => {
        if(textEditing) {
            setTextEditing(false);
            dispatch({
                type: 'updatePartnerFullname',
                data: {
                    ...data.partner,
                    fullname: fullname
                }
            });
        }
        else {
            setTextEditing(true);
        }
    };

    return (
        <View style={styles.headerContainer}>
            <View style={styles.headerLeft}>
                <View>
                    <Pressable onPress={onNavigateHome}>
                        <LeftIcon></LeftIcon>
                    </Pressable>
                </View>
                <View>
                    <Text>Home</Text>
                </View>
            </View>
            <View style={styles.headerCenter}>
                <Image source={require('../../assets/images/user-icon.png')}
                       style={styles.avatar} />
                { textEditing ?
                    <TextInput style={styles.headerCenterText} value={fullname} autoFocus onChangeText={setFullname} /> :
                    <Text style={styles.headerCenterText}>{fullname}</Text> 
                }
                <Pressable onPress={onSave}>
                    <EditIcon width={20} height={20} style={{color:'#075E54', marginLeft:5}} />
                </Pressable>
            </View>
            <View style={styles.headerRight}>
                <Pressable onPress={onNavigateHome}>
                    <SearchIcon width={20} height={20} style={{color:'#075E54'}} />
                </Pressable>
                <Pressable onPress={onNavigateHome}>
                    <SaveIcon width={20} height={20} style={{marginLeft:10, color:'#075E54'}} />
                </Pressable>
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
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerRight:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginHorizontal:10
    },
    avatar:{
        width: 30,
		height: 30,
		borderWidth: 0.5,
        borderColor:'#075E54',
		borderRadius: 30,
		resizeMode: "cover"
    },
    headerCenterText:{
        marginLeft: 5,
        fontWeight:'600',
        fontSize:14
    }
});

export default WhatsappHeader;