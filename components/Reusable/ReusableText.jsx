import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ReusableText = ({text}) => {
  return (
      <Text style={styles.textStyle}>{text}</Text>
  )
}

export default ReusableText

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: 'white',
        fontWeight: 'bold',
    }
})
