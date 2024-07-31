import { StyleSheet, View } from 'react-native'
import React from 'react'

const WidthSpacer = () => {
  // const WidthSpacer = ({width}) => {
  return (
    <View style={styles.styleWidth}>
      
    </View>
    // <View style={styles.styleWidth(width)}>
      
    // </View>

  )
}

export default WidthSpacer

const styles = StyleSheet.create({
    styleWidth: {
        width:30
    }
    // styleWidth: (width)=>({
    //   width: width
    // })
})