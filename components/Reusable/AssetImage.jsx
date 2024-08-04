import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AssetImage = ({ source, height, width }) => {
  return (
    <Image 
        // source={{url: source}}
        // style={styles.image(width, height)}
        source={source}
        style={styles.image(height, width)}
    />
  )
}

export default AssetImage

const styles = StyleSheet.create({
    image: (height, width)=>({
        
        height: height,
        width: width,
        
    })
})
