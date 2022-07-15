import React from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity, Alert } from 'react-native'
import DetailsCard from '../../components/DetailsCard'
import RenderHtml from 'react-native-render-html'
import { useDispatch } from 'react-redux'
import styles from './Details.styles'

function Details({ route }) {
  
  const { item } = route.params //önceki sayfadan alınan itemi aldık
  const source = { // kaynak html formatında geldiği için renderhtml kütüphanesiyle jsx formatına çevirdik
    html: item.contents
  }

  const { width } = {
    width: Dimensions.get('screen').width
  }
  const dispatch = useDispatch();

  const addSubmit = () => {
    Alert.alert('CodeWork', 'Success! You have submit')
  }

  const addFavourite = favourite => {
    dispatch({ type: 'ADD_FAVOURIES', payload: { favourite } }) //Favorilere ekleme işlemi
  }
  return (
    <View style={styles.container}>
      <DetailsCard item={item} />

      <ScrollView style={styles.content} >
        <RenderHtml
          baseStyle={{ color: 'black', fontSize: 15 }}
          source={source}
          contentWidth={width}
        />
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={addSubmit} style={styles.button} >
          <Text style={styles.button_text}>Submit</Text>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => addFavourite(item)} style={styles.button}>
          <Text style={styles.button_text}>Add Favourite</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Details