import React from "react";
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import JobCard from "../../components/JobCard";

const Favourites = ({navigation}) => {
  const favouriteList = useSelector(s => s.favouriteList) // Listeyi çektik
  const dispatch = useDispatch(); 
  const RemoveItem = item => {
    dispatch({ type: 'REMOVE_ITEM', payload: { favourite: item } }) // Item silmek için
  }

  const handleGoDetail = (item) => {
    navigation.navigate('DetailsScreen', { item }) // Favori iteme basınca ilgili detay sayfasına yönlendirecek
  }

  const renderItem = ({ item }) => (
    <View>
      <JobCard job={item} onPress={() => handleGoDetail(item)}/> 
      <TouchableOpacity
        style={{ backgroundColor: '#EF5350', alignItems: 'center', width: 150, alignSelf: 'center', borderRadius: 10 }}
        onPress={() => RemoveItem(item)} //Silme işlemi için
      >
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} >Remove</Text>
      </TouchableOpacity>
    </View>

  )
  return (
    <View>
      <FlatList
        data={favouriteList}
        renderItem={renderItem}
      />
    </View>
  )
}
export default Favourites