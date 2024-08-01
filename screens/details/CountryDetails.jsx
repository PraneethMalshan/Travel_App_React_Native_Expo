import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { NetworkImage, AppBar, ReusableText, DescriptionText, ReusableBtn, PopularList, Hspace, ReUseBtn } from '../../components/index';
import { COLORS, TEXT, SIZES } from '../../constance/theme';
import reusable from '../../components/Reusable/reusable.style';
import { Feather } from '@expo/vector-icons';

const CountryDetails = ({ navigation }) => {
    const route = useRoute();
    const { item } = route.params;
    const country = {
      "_id": "64c62bfc65af9f8c969a8d04",
      "country": "USA",
      "description": "The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.The USA is a tourist magnet, known for its diverse landscapes, rich history, and vibrant culture. From the sun-kissed beaches of California to the bustling streets of New York City, there's something for every traveler.",
      "imageUrl": "https://i.natgeofe.com/k/57873055-5e16-4eac-add4-c08c8b5f3bd7/united-states-statue-of-liberty_square.jpg",
      "popular": [
          {
              "_id": "64c631650298a05640539adc",
              "title": "Walt Disney World",
              "imageUrl": "https://images.contentstack.io/v3/assets/bltba617d00249585dc/blt00ea1d7ad3d5c4ed/60aeafc2a450c25ac83d12a0/probstwdw-heromobile-1440x1440.jpg",
              "rating": 4.7,
              "review": "1204 Reviews",
              "location": "Orlando, USA"
          },
          {
              "_id": "64d062a3de20d7c932f1f70a",
              "title": "Statue of Liberty",
              "imageUrl": "https://cdn.mos.cms.futurecdn.net/XsbvTN6PRi6PZtgEGvRsiE.jpg",
              "rating": 4.8,
              "review": "1452 Reviews",
              "location": "Liberty Island, New York Harbor"
          }
      ],
      "region": "North America, USA"
  };

  return (
    // <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <NetworkImage 
            source={country.imageUrl}
            width={"100%"}
            height={350}
            radius={20}
          />

          <AppBar 
            top={40}
            left={20}
            right={20}
            title={country.country} 
            color={COLORS.white} 
            icon={'search1'} 
            color1={COLORS.white}
            onPress={()=> navigation.goBack()}
            onPress1={()=> {}}
          />

        </View>

        <View style={styles.description}>
          <ReusableText 
            text={country.region}
            size={TEXT.xLarge}
            color={COLORS.black}
          />

          <DescriptionText text={country.description}/>

          <View style={{ alignContent: 'center' }}>
          <Hspace height={20}/>
            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText 
                text={"Popular Description"}
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

            <PopularList data={country.popular}/>

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
    // </SafeAreaView>
  )
}

export default CountryDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3F4f8",
    // marginHorizontal: 20
  },
  description: {
    marginHorizontal: 20,
    paddingTop: 20
  },
})