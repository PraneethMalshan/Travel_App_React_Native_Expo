import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hspace = ({height}) => {
  return (
    <View style={styles.styleHeight(height)}>
        
    </View>
  )
}
export default Hspace
const styles = StyleSheet.create({
    styleHeight: (height)=>({
        height: height
      })
})

