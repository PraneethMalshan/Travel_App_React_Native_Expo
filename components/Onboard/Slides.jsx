import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
// import styles from './slides.style.js'

const Slides = ({item}) => {
  return (
    <View>
      {/* <Image source={item.image} style={styles.image}/> */}

       <ImageBackground source={item.image} style={styles.image}/>

    </View>
  )
}

const styles = StyleSheet.create({

    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: 411.5,
      height: 844.5
    },
    
  });



export default Slides