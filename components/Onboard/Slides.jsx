import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
// import ReusableText from '../../components/index';
import ReusableText from '../Reusable/ReusableText'
import ReusableBtn from '../Reusable/ReusableBtn'
import HightSpacer from '../Reusable/HeightSpacer'
// import { COLORS, SIZES } from "../../constance/theme"
// import styles from './slides.style.js'

const Slides = ({item}) => {
  return (
    <View>
      {/* <Image source={item.image} style={styles.image}/> */}

       <ImageBackground source={item.image} style={styles.image}/>
       <View style={styles.stack}>

        <ReusableText 
          text={item.title}
        />

        <HightSpacer />

        <ReusableBtn 
          onPress={()=> {}}
          btnText={"Let's Go"}
          // width={40}
        />
       </View>

    </View>
  )
}

const styles = StyleSheet.create({

    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: 411.5,
      height: 868
    },
    stack: {
      position: "absolute",
      bottom: 0,
      marginBottom: 60,
      marginHorizontal: 20

    },
    // textStyle: {
    //   fontSize: 20,
    //   color: 'blue',
    //   fontWeight: 'bold',
    // }
    
  });



export default Slides