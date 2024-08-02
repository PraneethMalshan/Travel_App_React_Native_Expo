import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../constance/theme'
import { Hspace } from '../../components'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Search = ({navigation}) => {
  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const search =  [
    {
        "_id": "64c631650298a05640539adx",
        "country_id": "64c62bfc65af9f8c969a8d03",
        "title": "Dalada Maligawa",
        "location": "Sri Lanka",
        "imageUrl": "https://live.staticflickr.com/6156/6132317112_1fa36d6fbf_b.jpg",
        "rating": 4.6,
        "review": "1200 Reviews"
    },
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Walt Disney World",
        "location": "U.S.A. New York",
        "imageUrl": "https://img.freepik.com/premium-photo/statue-liberty-new-york-city-skyline-usa_741910-5910.jpg",
        "rating": 4.7,
        "review": "1204 Reviews"
    },
    {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Islamabad",
        "location": "Pakisthan",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5_yq7tniLXqJcKIGaZXXvH-fUyrQC_lUurg&s",
        "rating": 4.8,
        "review": "1452 Reviews"
    },
    {
        "_id": "64d09e3f364e1c37c8b4b13c",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Mumbai",
        "location": "India",
        "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtNbXLi8BL9f7cGjSpJS9IsiYa9_95H1fXzewAAiGAbN0aKJU4t2rHMwb-E8trzyaWXUs&usqp=CAU",
        "rating": 4.6,
        "review": "2145 Reviews"
    },
    {
        "_id": "64d09f90364e1c37c8b4b140",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "London",
        "location": "England",
        "imageUrl": "https://i.natgeofe.com/n/4def1048-f5e5-4973-ad3a-e188a97d363f/regents-street-london-england.jpg",
        "rating": 4.8,
        "review": "24455 Reviews"
    },
    {
        "_id": "64d30f789d008909fa8b7ce5",
        "country_id": "64d2fd32618522e2fb342eec",
        "imageUrl": "https://cdn.britannica.com/20/20120-050-89764C76/Tiananmen-entryway-Imperial-City-China-Beijing.jpg",
        "title": "Beijing",
        "location": "China",
        "rating": 4.8,
        "review": "24455 Reviews"
    }
];


  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='Where do you want to visit?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name='search' size={24} color={COLORS.white}/>
        </TouchableOpacity>

      </View>

      {search.length === 0 ? (
        <View>
          <Hspace height={'20%'}/>
          <Image 
          source={require('../../assets/images/search.png')}
          style={styles.searchImage}
        />
        </View>
      ):(
        <FlatList 
          data={search}
          keyExtractor={(item)=> item._id}
          renderItem={({item})=> (
            <View style={styles.tile}>
              <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
            </View>
          )}
        />
      )}

    </SafeAreaView>
  )
}

export default Search