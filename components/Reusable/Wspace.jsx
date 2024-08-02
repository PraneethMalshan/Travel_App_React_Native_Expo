import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Wspace = ({width}) => {
  return (
    <View style={styles.styleWidth(width)}>
      
    </View>
  )
}

export default Wspace

const styles = StyleSheet.create({
  styleWidth: (width)=>({
    width: width
  })
})


