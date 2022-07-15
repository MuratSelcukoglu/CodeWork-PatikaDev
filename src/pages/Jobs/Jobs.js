import React, { useState } from 'react';
import { FlatList, View, TouchableOpacity, SafeAreaView, Text, StatusBar } from 'react-native';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import styles from './Jobs.styles';
import JobCard from '../../components/JobCard';
import { API_URL } from '../../API';

import {LogBox} from "react-native";

LogBox.ignoreLogs(['Warning: ...']);
  LogBox.ignoreAllLogs();

const Jobs = ({ navigation }) => {
  const [page, setPage] = useState(1)
  const { loading, error, data } = useFetch(`${API_URL}?page=${page}`) //Sonraki iş sayfalarına gidebilmek için ${page} yazdık
  const handleGoDetail = (item) => {
    navigation.navigate('DetailsScreen', { item })
  }
  const goPrevious = () => {
    if (page == 1) {
      setPage(1)
    } else {
      setPage(page - 1)
    }
  }
  const goNext = () => {
    if (page == 50) {
      setPage(1)
    } else {
      setPage(page + 1)
    }
  }
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
  const renderJobItem = ({ item }) => (
    <JobCard job={item} onPress={() => handleGoDetail(item)} />)
  return (
    <View style={styles.container} >
      <StatusBar backgroundColor='tomato' />
      <FlatList
        data={data.results}
        renderItem={renderJobItem}
      />
      <View style={styles.buttoncontainer} >
        <TouchableOpacity
          onPress={goPrevious}
          style={styles.button} >
          <Text style={styles.buttontext}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={goNext}
          style={styles.button} >
          <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default Jobs