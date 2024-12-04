import React from 'react';
import { Text, View } from 'react-native';
import { GithubIcon, LinkedinIcon } from '../components/icons';

function SettingsView() {
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
      </View>
    );
  }

  export default SettingsView;