import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppBar, DescriptionText, HotelMap, Hspace, NetworkImage, ReusableText, ReUseBtn, ReviewsList } from '../../components'
import { COLORS, SIZES, TEXT } from '../../constance/theme'
import styles from './hotelDetails.style'
import reusable from '../../components/Reusable/reusable.style';
import {Rating} from 'react-native-stock-star-rating';
import { Feather } from '@expo/vector-icons'

const HotelDetails = ({navigation}) => {

  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "coordinates": {
      // "latitude": 37.7749,
      // "longitude": -122.4194,
      "latitude": 40.7128,
      "longitude": 74.0060,
     
    },
    "_id": "64d34be5329Sa816648298d0",
    "country_id": "64d2fd32618522e2fb342eec",
    "title": "The Plaza Hotel",
    "description": "Located at Fifth Avenue and Central Park South, this luxury hotel was constructed in the most fashionable residential section of New York City. From its original 19th century construction to its magnificent $450 million dollar restoration in 2008, the world's most famous hotel has had a remarkable history.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://static.therealdeal.com/wp-content/uploads/2017/07/the-plaza.jpg",
    "rating": 4.7,
    "review": "253425 Reviews",
    "location": "New York City, USA",
    "price": 200,
    "__v": 0,
    "reviews": [
      {
        "_id": "64d38ff59af9119acfab0ece",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices scelerisque commodo. Quisque eu aliquet neque, non accumsan dui. Sed sed suscipit elit, ac cursus mi. Cras condimentum id nibh at egestas.",
        "rating": 4.6,
        "user": {
          "_id": "64c5d95adc7efac2a45ec376",
          "username": "John Done",
          "profile": "https://media.themusic.com.au/images/standard/Artists/J/john-williamson/2309-john-williamson-anna-warr.990x660.jpg",
        },
        "updatedAt": "2024-06-03"
      },
      {
        "_id": "64d797efa5628cedcfae2a45ec376",
        "review": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices scelerisque commodo. Quisque eu aliquet neque, non accumsan dui. Sed sed suscipit elit, ac cursus mi. Cras condimentum id nibh at egestas.",
        "rating": 4.6,
        "user": {
          "_id": "64c5d95adc7efac2a45ec376",
          "username": "Dasun Lakshan",
          "profile": "https://garagedusudsix.fr/wp-content/uploads/2014/10/speaker-3.jpg",
        },
        "updatedAt": "2024-08-09"
      },
    ]
};

let coordinates = {
  id: hotel._id,
  title: hotel.title,
  latitude: hotel.coordinates.latitude,
  longitude: hotel.coordinates.longitude,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}

  return (
    <ScrollView>
      <View style={{ height: 80 }}>
        <AppBar
            top={50}
            left={20}
            right={20}
            title={hotel.title} 
            color={COLORS.white} 
            icon={'search1'} 
            color1={COLORS.white}
            onPress={()=> navigation.goBack()}
            onPress1={()=> {}}
          />
      </View>

      <View>
      <View style={styles.container}>
        <NetworkImage 
          source={hotel.imageUrl}
          width={"100%"}
          height={220}
          radius={25}
        />

        <View style={styles.titleContainer}>
          <View style={styles.titleColumn}>
            <ReusableText 
              text={hotel.title}
              size={SIZES.xLarge}
              color={COLORS.black}
            />

            <Hspace height={10}/>

            <ReusableText 
              text={hotel.location}
              size={SIZES.medium}
              color={COLORS.black}
            />

            <Hspace height={5}/>

            <View style={reusable.rowWithSpace("space-between")}>
              <Rating 
                maxStars={5}
                stars={hotel.rating}
                bordered={false}
                color={'#FD9942'}
              />

              <ReusableText 
                text={`(${hotel.review})`}
                size={SIZES.medium}
                color={COLORS.gray}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={[styles.container, {paddingTop: 90 }]}>
        <ReusableText 
          text={"Description"}
          size={SIZES.large}
          color={COLORS.black}
        />

        <Hspace height={10} />

        <DescriptionText text={hotel.description} />

        <Hspace height={10} />

        <ReusableText 
          text={"Location"}
          size={SIZES.large}
          color={COLORS.black}
        />

        <Hspace height={15} />

        <ReusableText 
          text={hotel.location}
          size={SIZES.small+2}
          color={COLORS.gray}
        />

        <HotelMap coordinates={coordinates}/>

        <View style={reusable.rowWithSpace('space-between')}>
          <ReusableText 
            text={'Reviews'}
            size={SIZES.large}
            color={COLORS.black}
          />
          <TouchableOpacity>
            <Feather name='list' size={20} />
          </TouchableOpacity>

        </View>

        <Hspace height={10}/>

        <ReviewsList reviews={hotel.reviews}/>

        
      </View>

      <View style={[reusable.rowWithSpace('space-between'), styles.bottom]}>
          <View>
            <ReusableText
              text={`\$ ${hotel.price}`}
              size={SIZES.large}
              color={COLORS.black}
            />

            <Hspace height={5}/>

            <ReusableText
              text={"Jan 01 - Dec 25"}
              size={SIZES.medium}
              color={COLORS.gray}
            />
          </View>

          <ReUseBtn 
            onPress={() => navigation.navigate('SelectRoom')}
            btnText={"Select Room"}
            width={(SIZES.width - 50)/2.2}
            backgroundColor={COLORS.lightBlue}
            borderColor={COLORS.green}
            textColor={COLORS.white}
          />

      </View>

      </View>
    </ScrollView>
  )
}

export default HotelDetails
