import React, {useEffect} from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function HomeView({route}) {
    const navigation = useNavigation();

    const onInstagramPress = () => {
      navigation.navigate('Instagram', {itemId:-1});
    }

    const onWhatsappPress = () => {
      navigation.navigate('Whatsapp', {itemId:-1});
    }

    const onTicTocPress = () => {
      navigation.navigate('TicToc', {itemId:-1});
    }

    useEffect(() => {
      console.log('Route-Home:');
      console.log(route);
    });

    return (
      <ImageBackground
          style={styles.image_background}
          resizeMode="cover"
          source={require('../assets/images/background.jpeg')}>
            <View style={styles.item_list}>
              <TouchableOpacity onPress={onTicTocPress}>
                <View style={styles.item_template}>
                  <View style={styles.item_inside}>
                    <Text style={styles.item_text}>New TicToc Post</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onInstagramPress}>
                <View style={styles.item_template}>
                  <View style={styles.item_inside}>
                    <Text style={styles.item_text}>New Instagram Post</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={onWhatsappPress}>
                <View style={styles.item_template}>
                  <View style={styles.item_inside}>
                    <Text style={styles.item_text}>New WhatsApp Message</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
      </ImageBackground>
    );
  }

  const styles = StyleSheet.create({
    image_background: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    item_list:{
      flex:1,
      flexDirection:'column-reverse'
    },
    item_template:{
      alignItems: 'flex-end',
      marginBottom:10
    },
    item_inside:{
      height:50,
      width:200,
      textAlign:'center',
      justifyContent:'center',
      backgroundColor: 'rgba(255,255,255,0.5)',
      borderRadius:6
    },
    item_text:{
      textAlign:'center'
    }
  });

  export default HomeView;