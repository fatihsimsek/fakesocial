import React from 'react';
import { Platform, Alert, Linking, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { GithubIcon, LinkedinIcon } from '../components/icons';

function SettingsView() {
  const onVote = () => {
    const url = Platform.OS === 'android' ? 'https://play.google.com/store/apps/details?id=YOUR_APP_ID'   
                                          : 'https://apps.apple.com/us/app/fakesocialapp/id6739534150';
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      }
      else {
        Alert.alert("Error", "Url cant be opened");
      }
    });
  };
    return (
      <View style={{marginTop:4}}>
        <View style={{margin:2, paddingVertical:5, backgroundColor:'#E5E5E5'}}>
          <View>
            <Text style={{fontWeight:'600', fontSize:18, padding:10}}>Fatih Şimşek</Text>
            <View style={{flexDirection:'row', alignContent:'center', padding:5 }}>
                <LinkedinIcon size={28} color="black"></LinkedinIcon>
                <Text style={{marginLeft:5, alignSelf:'center', fontWeight:'500'}}>https://www.linkedin.com/in/fatih-simsek-dev</Text>
            </View>
            <View style={{flexDirection:'row', alignContent:'center', padding:5 }}>
                <GithubIcon size={28} color="black"></GithubIcon>
                <Text style={{marginLeft:5, alignSelf:'center', fontWeight:'500'}}>https://www.github.com/fatihsimsek</Text>
            </View>
          </View>
        </View>
        <View style={{flexDirection:'row', alignSelf:'center', alignItems:'center', marginTop:10 }}>
            <TouchableOpacity onPress={onVote}>
              <Text style={styles.buttonTextStyle}>Review App</Text>
            </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
    buttonTextStyle: {
      borderRadius: 5,
      padding: 15,
      elevation: 2,
      backgroundColor: '#25d366'
    }
});

export default SettingsView;