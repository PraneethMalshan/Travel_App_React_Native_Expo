import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import reusable from './reusable.style'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import WidthSpacer from './WidthSpacer'
import ReusableText from './ReusableText'
import { COLORS } from '../../constance/theme'

const Rating = ({rating}) => {
  return (
    <View style={reusable.rowWithSpace("flex-start")}>
      <MaterialCommunityIcons 
        name='star'
        size={20}
        color={'#fD9942'}
      />

      <WidthSpacer width={5}/>

      <ReusableText
        // style={styles.textStyle1}
        text={rating}
        size={15}
        color={'#fD9942'}
      />

    </View>
  )
}

export default Rating

const styles = StyleSheet.create({})