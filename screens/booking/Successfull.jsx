import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import {  Hspace, ReusableText, ReUseBtn } from '../../components'
import { COLORS, SIZES } from '../../constance/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Successfull = ({navigation}) => {

    const hotel = {
        
            "_id": "64c67442776ed29f19727fd7",
            "country_id": "64c62bfc65af9f8c969a8d04",
            "title": "The Plaza Hotel",
            "imageUrl": "https://static.therealdeal.com/wp-content/uploads/2017/07/the-plaza.jpg",
            "rating": 4.7,
            "review": "1204 Reviews",
            "location": "New York City, USA"
        
    }

  return (
    <View>
      <View style={{marginTop: "20%"}}>
        {/* <AssetImage 
        // data={require('../../assets/images/checked.png')}
            source={require('../../assets/images/checked.png')}
            width={'100%'}
            height={200}
            mode={'contain'}
        /> */}

      <View style={styles.imgContainer}>
        <Image
            source={require('../../assets/images/checked.png')}
            style={styles.image}
        />
      </View>

        <Hspace height={40}/>
        <View style={{alignItems: "center"}}>
            <ReusableText 
                text={'Booking Successfully'}
                size={SIZES.xLarge}
                color={COLORS.black}
            />

            <Hspace height={20}/>

            <ReusableText 
                text={'You can find your booking details below'}
                size={SIZES.medium}
                color={COLORS.gray}
            />
            <Hspace height={20}/>
        </View>

        <View style={{margin:20}}>
            <ReusableText 
                text={'Room Details'}
                size={SIZES.medium}
                color={COLORS.dark}
            />
            <Hspace height={20}/>

            <ReusableTile item={hotel}/>

            <Hspace height={40}/>

            <ReUseBtn 
                onPress={() => navigation.navigate('Bottom')}
                btnText={"Done"}
                width={SIZES.width - 50}
                backgroundColor={COLORS.lightBlue}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
            />
        </View>

      </View>
    </View>
  )
}

export default Successfull

const styles = StyleSheet.create({

    imgContainer: {
        // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },

    image: {
        width: 200,
        height: 200,
    }
})