import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constance/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const HotelList = ({navigation}) => {

  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5429",
        "country_id": "64c62bfc65af9f8c969a8d03",
        "title": "Queens Hotel",
        "imageUrl": "https://t3.ftcdn.net/jpg/03/68/27/32/360_F_368273296_PvxFFlEsHhiHr2DuLwpA4LTSvIMZ9EIP.jpg",
        "rating": 4.3,
        "review": "1104 Reviews",
        "location": "Kandy, SL"
    },
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Seaside Resort",
        "imageUrl": "https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Miami Beach, FL"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Mountain Lodge",
        "imageUrl": "https://www.avenuecalgary.com/wp-content/uploads/2022/10/BasecampLodgeGolden_Basecamp_Resorts_Golden_Jussi_Grznar-2.jpg",
        "rating": 4.5,
        "review": "12024 Reviews",
        "location": "Aspen, CO"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Hotel Alpha",
        "imageUrl": "https://lh3.googleusercontent.com/proxy/dTDXl9GzN0Nj5wnKrjvXEOva5Da84L3REC79Z47Fk2gYMy3Q7K6jLAHOILcEwlz05V9423JIIYuqOz86QVIkBcfXBka7wmU3Eo0",
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
        "location": "Orlando, FL"
    },
    {
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel 1",
        "imageUrl": "https://www.hotel.de/de/media/image/79/13/cd/Alpha_Genesis_Hotel-Kuala_Lumpur-Aussenansicht-537758.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    }
]

  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View style={{height: 50}}>
        <AppBar 
          title={'Nearby Hotels'} 
          color={COLORS.white} 
          icon={'search1'} 
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('Search')}
        />
      </View>

      <View style={{padding: 6}}>
        <FlatList 
          data={hotels}
          keyExtractor={(item)=> item._id}
          renderItem={({item}) => (
            <View style={{marginBottom: 10}}>
              <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id)}/>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default HotelList