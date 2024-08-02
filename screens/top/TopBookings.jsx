import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTile from '../../components/Reusable/ReusableTile'
import { COLORS } from '../../constance/theme'
import reusable from '../../components/Reusable/reusable.style'

const TopBookings = () => {

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
        
        
        
    ]

  return (
    <View style={{margin: 20}}>
       <FlatList 
            data={hotels}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item)=> item._id}
            renderItem={({item})=> (
                <View style={{backgroundColor: COLORS.lightWhite, marginBottom: 10, borderRadius: 16}}>
                    <ReusableTile item={item}/>

                    <View style={reusable.rowWithSpace('space-between')}>

                    </View>

                </View>
            )}
       />
    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({})