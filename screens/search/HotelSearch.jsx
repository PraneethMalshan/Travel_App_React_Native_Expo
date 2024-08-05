import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.style'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../constance/theme'
import { AppBar, Hspace } from '../../components'
import HotelCard from '../../components/Tiles/Hotels/HotelCard'

const HotelSearch = ({navigation}) => {

  const [searchKey, setSearchKey] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5429",
        "country_id": "64c62bfc65af9f8c969a8d03",
        "title": "The Plaza Hotel",
        "imageUrl": "https://static.therealdeal.com/wp-content/uploads/2017/07/the-plaza.jpg",
        "rating": 4.3,
        "review": "1104 Reviews",
        "location": "Central Park, USA",
    },
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Park Avenue, USA"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Mountain Lodge",
        "imageUrl": "https://www.avenuecalgary.com/wp-content/uploads/2022/10/BasecampLodgeGolden_Basecamp_Resorts_Golden_Jussi_Grznar-2.jpg",
        "rating": 4.5,
        "review": "12024 Reviews",
        "location": "Madison Avenue, USA"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Alpha",
        "imageUrl": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/518332246.jpg?k=852d9e83009ac082a7bb8366d5e27fb1f21801ea9cb6dde9c14e1aa99c49ea63&o=&hp=1",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "City Center, USA"
    },
    {
        "_id": "64c675be3cfa5e847bcd5439",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Family-Friendly Resort",
        "imageUrl": "https://pix10.agoda.net/hotelImages/35962090/-1/7f19af9347ca1e06215de00ae32f21aa.jpg?ce=0&s=702x392",
        "rating": 4.6,
        "review": "12854 Reviews",
        "location": "Meatpacking District, USA"
    },
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "The Carlyle Resort",
        "imageUrl": "https://www.hotel.de/de/media/image/79/13/cd/Alpha_Genesis_Hotel-Kuala_Lumpur-Aussenansicht-537758.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
]


  return (
    <SafeAreaView >

      <View style={{height: 50}}>
        <AppBar 
          top={20}
          left={20}
          right={20}
          title={'Looking for hotels'} 
          color={COLORS.white} 
          icon={'filter'} 
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> {}}
        />
      </View>

    <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput 
          style={styles.input}
          value={searchKey}
          onChangeText={setSearchKey}
          placeholder='Where do you want to stay?'
        />
      </View>

      <TouchableOpacity style={styles.searchBtn}>
        <Feather name='search' size={24} color={COLORS.white}/>
      </TouchableOpacity>

    </View>

    {hotels.length === 0 ? (
      <View>
        <Hspace height={'20%'}/>
        <Image 
        source={require('../../assets/images/search.png')}
        style={styles.searchImage}
      />
      </View>
    ):(
      <View style={{paddingLeft: 12}}>
        <FlatList 
        data={hotels}
        keyExtractor={(item)=> item._id}
        numColumns={2}
        ItemSeparatorComponent={()=> (<View style={{height: 16}}/>)}
        renderItem={({item})=> (
            <HotelCard item={item} 
              margin={10}
              onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
        )}
      />
      </View>
    )}

  </SafeAreaView>
  )
}

export default HotelSearch

