import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NetworkImage, AppBar, ReusableText, DescriptionText, ReusableBtn, PopularList, Hspace, ReUseBtn } from '../../components/index';
import { COLORS, TEXT, SIZES } from '../../constance/theme';
import reusable from '../../components/Reusable/reusable.style';
import { Feather } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'

const PlaceDetails = ({navigation}) => {
    const route = useRoute();
    const id = route.params
    console.log(id);

    const place = {
      "_id": "64d062a3de20d7c932f1f70a",
      "country_id": "64c62bfc65af9f8c969a8d04",
      "title": "New York City",
      "description": "New York City, often called 'The Big Apple' is a vibrant and diverse metropolis known for its iconic landmarks, world-class museums, and bustling cultural scene. Visitors can explore famous attractions like the Statue of Liberty, Central Park, and Times Square, catch a Broadway show, and enjoy the city's diverse culinary offerings. With its blend of history, art, and modernity, NYC offers an unforgettable urban experience.",
      "contact_id": "64c5d95adc7efae2a45ec376",
      "imageUrl": "https://media.istockphoto.com/id/533998713/photo/empire-state-building-at-night.jpg?s=612x612&w=0&k=20&c=2fZCcZq3186F9R2WHZ2hEBh4dVsOX7pqgcVRXXn195I=",
      // "imageUrl": "https://www.statueoflibertytour.com/wp-content/uploads/2022/05/statue-of-liberty-gaffb1612d_1920.jpg",
      "rating": 4.8,
      "review": "1452 Reviews",
      "latitude": 40.689247,
      "longitude": -74.044502,
      "location": "New York City, New York",
      "popular": [
          {
              "_id": "64c675be3cfa5e847bcd5439",
              "title": "The Plaza Hotel",
              "imageUrl": "https://static.therealdeal.com/wp-content/uploads/2017/07/the-plaza.jpg",
              "rating": 4.6,
              "review": "12854 Reviews",
              "location": "New York City, USA"
          },
          {
              "_id": "64c675793cfa5e847bcd5436",
              "title": "The Waldorf Astoria",
              "imageUrl": "https://assets.hiltonstatic.com/hilton-asset-cache/image/upload/c_fill,w_1920,h_1080,q_70,f_auto,g_auto/Imagery/Property%20Photography/Waldorf%20Astoria/D/DOHQTWA/WALD_1762__2_.jpg",
              "rating": 4.8,
              "review": "2312 Reviews",
              "location": "Park Avenue, USA"
          }
      ]
  }

    return (
      <ScrollView>
      <View>
        <NetworkImage 
          source={place.imageUrl}
          width={"100%"}
          height={350}
          radius={20}
        />

        <AppBar 
          top={40}
          left={20}
          right={20}
          title={place.title} 
          color={COLORS.white} 
          icon={'search1'} 
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> {}}
        />

      </View>

      <View style={styles.description}>
        <Hspace height={15}/>
        <ReusableText 
          text={place.location}
          size={TEXT.large}
          color={COLORS.black}
        />

        <DescriptionText text={place.description} />

        <View style={{ alignContent: 'center' }}>
        <Hspace height={20}/>
          <View style={reusable.rowWithSpace("space-between")}>
            <ReusableText 
              text={"Popular Hotels"}
              size={TEXT.large}
              color={COLORS.black}
            />

            <TouchableOpacity onPress={()=> {}}>
              <Feather 
                name='list'
                size={20}
              />
            </TouchableOpacity>

          </View>

          <Hspace height={10}/>

          <PopularList data={place.popular}/>

          <ReUseBtn 
            onPress={() => navigation.navigate('HotelSearch')}
            btnText={"Find Best Hotels"}
            width={SIZES.width - 40}
            backgroundColor={COLORS.lightBlue}
            borderColor={COLORS.green}
            textColor={COLORS.white}
          />
          <Hspace height={50}/>

        </View>
      </View>

    </ScrollView>
  )
}

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})