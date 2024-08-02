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
      "title": "Statue of Liberty",
      "description": "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor. This colossal statue was a gift from France to the United States and was dedicated in 1886. Standing at 305 feet tall, the statue represents Libertas, the Roman goddess of liberty, holding a torch and a tablet inscribed with the date of the American Declaration of Independence. The Statue of Liberty has welcomed countless immigrants to the USA, serving as a symbol of hope and opportunity.",
      "contact_id": "64c5d95adc7efae2a45ec376",
      "imageUrl": "https://www.statueoflibertytour.com/wp-content/uploads/2022/05/statue-of-liberty-gaffb1612d_1920.jpg",
      "rating": 4.8,
      "review": "1452 Reviews",
      "latitude": 40.689247,
      "longitude": -74.044502,
      "location": "Liberty Island, New York Harbor",
      "popular": [
          {
              "_id": "64c675be3cfa5e847bcd5439",
              "title": "Family-Friendly Resort",
              "imageUrl": "https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg",
              "rating": 4.6,
              "review": "12854 Reviews",
              "location": "Orlando, FL"
          },
          {
              "_id": "64c675793cfa5e847bcd5436",
              "title": "Urban Chic Boutique Hotel",
              "imageUrl": "https://www.avenuecalgary.com/wp-content/uploads/2022/10/BasecampLodgeGolden_Basecamp_Resorts_Golden_Jussi_Grznar-2.jpg",
              "rating": 4.8,
              "review": "2312 Reviews",
              "location": "San Francisco, CA"
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