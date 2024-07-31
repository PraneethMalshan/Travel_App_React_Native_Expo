import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, TEXT } from '../../../constance/theme'
import { NetworkImage, HightSpacer, ReusableText, Rating, Hspace } from '../../../components/index'

const HotelCard = ({item, margin, onPress}) => {
  return (
    <TouchableOpacity style={styles.card(margin)} onPress={onPress}>
        <View>
            <View style={styles.imageContainer}>
                <NetworkImage 
                    source={item.imageUrl}
                    width={'90%'}
                    height={'100%'}
                    radius={16}
                />
            </View>

            <Hspace height={5}/>

            <View style={{paddingLeft: 15}}>
                <ReusableText  
                    text={item.title}
                    size={SIZES.medium}
                    color={COLORS.black}
                />
            </View>

            <Hspace height={2}/>

            <View style={{paddingLeft: 15}}>
                <ReusableText  
                    text={item.location}
                    size={SIZES.medium}
                    color={COLORS.gray}
                />
            </View>

            <Hspace height={4}/>

            <View style={{paddingLeft: 13, width:100}}>
            <Rating rating={item.rating}/>
            </View>
            

        </View>
    </TouchableOpacity>
  )
}

export default HotelCard

const styles = StyleSheet.create({
    card: (margin)=> ({
        width: SIZES.width/2.2,
        height: 250,
        borderRadius: 16,
        backgroundColor: COLORS.lightWhite,
        margin: margin
    }),
    imageContainer: {
        alignItems: "center",
        marginTop: 10,
        height: 150
    }

})