import React, {useState, useEffect} from 'react';
import { Text, View, FlatList, TouchableOpacity, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Constant } from './Types';
import { RightIcon, TrashIcon, WhatsappIcon } from '../components/icons';
import { useNavigation } from '@react-navigation/native';

function FavouriteView() {
  const [items, setItems] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchData() {
      let favouriteString = await AsyncStorage.getItem(Constant.FAVOURITE);
      setItems(JSON.parse(favouriteString));
    }
    fetchData();  
  });

  const onPressItem = (item) => {
    navigation.navigate('HomePage', {itemId: item.id})
  };

  const onDeleteItem = async (item) => {
    let favouriteString = await AsyncStorage.getItem(Constant.FAVOURITE);
    let favourites = JSON.parse(favouriteString);
    favourites = favourites.filter((t) => t.id !== item.id);
    await AsyncStorage.setItem(Constant.FAVOURITE, JSON.stringify(favourites));
    setItems(favourites);
  };

  return (
    <View style={{marginTop:4}}>
        <FlatList
            data={items}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => onPressItem(item)}>
                    <View style={{flexDirection:'row', alignItems:'center', margin:2, paddingVertical:5, backgroundColor:'#E5E5E5'}}>
                      <View style={{width:56, height:56, justifyContent:'center', alignItems:'center'}}>
                        <WhatsappIcon size={28} color="white"></WhatsappIcon>
                      </View>
                      <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <Text style={{fontWeight:'500', fontSize:14}}>
                          {item.title}
                        </Text>
                      </View>
                      <View style={{width:56, height:56, flexDirection:'row', marginRight:10, alignItems:'center', justifyContent:'flex-end'}}>
                        <Pressable onPress={() => onDeleteItem(item)}>
                          <TrashIcon size={28} color="red"></TrashIcon>
                        </Pressable>
                      </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    </View>
  );
}

export default FavouriteView;