import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { AssetImage, Hspace, ReusableText, ReUseBtn } from '../../components'
import { COLORS, SIZES } from '../../constance/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Faild = ({navigation}) => {
    const hotel = {
        
        "_id": "64c67442776ed29f19727fd7",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Luxury Hotel 1",
        "imageUrl": "https://www.hotel.de/de/media/image/79/13/cd/Alpha_Genesis_Hotel-Kuala_Lumpur-Aussenansicht-537758.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "New York City, NY"
    
}

return (
    <View>
    <View style={{marginTop: "40%"}}>
        {/* <AssetImage data={require('../../assets/images/checked.png')}
            width={'100%'}
            height={200}
            mode={'contain'}
        /> */}
        <View style={styles.imgContainer}>
            <Image
                source={require('../../assets/images/Falied.png')}
                style={styles.image}
            />
        </View>

        <Hspace height={40}/>
        <View style={{alignItems: "center"}}>
            <ReusableText 
                text={'Booking Faild'}
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
                onPress={() => navigation.goBack()}
                btnText={"Try Again"}
                width={SIZES.width - 50}
                backgroundColor={COLORS.red}
                borderColor={COLORS.red}
                borderWidth={0}
                textColor={COLORS.white}
            />
        </View>

    </View>
    </View>
)
}

export default Faild

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