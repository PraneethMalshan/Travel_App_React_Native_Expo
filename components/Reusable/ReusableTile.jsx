import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { COLORS, SIZES, TEXT } from '../../constance/theme'
import {NetworkImage, HightSpacer, Rating, ReusableText, WidthSpacer } from '../../components/index'

const ReusableTile = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={reusable.rowWithSpace("flex-start")}>
            <NetworkImage 
                source={item.imageUrl} 
                width={80} 
                height={80} 
                radius={12}
            />

            <WidthSpacer width={15}/>

            <View>
                <ReusableText 
                    // style={styles.textStyle1}
                    text={item.title}
                    size={SIZES.medium}
                    color={COLORS.black}
                />

                <HightSpacer height={8}/>

                <ReusableText 
                    // style={styles.textStyle1}
                    text={item.location}
                    size={14}
                    color={COLORS.gray}
                />

                <HightSpacer height={8}/>

                <View style={reusable.rowWithSpace("flex-start")}>

                    <Rating rating={item.rating}/>

                    <WidthSpacer width={5}/>

                    <ReusableText 
                        // style={styles.textStyle1}
                        text={` (${item.review}) `}
                        size={14}
                        color={COLORS.gray}
                    />
                </View>


            </View>

        </View>
    </TouchableOpacity>
  )
}

export default ReusableTile

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: COLORS.lightWhite,
        borderRadius: 12
    }
})