import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import ReusableText from '../Reusable/ReusableText';
import ReusableBtn from '../Reusable/ReusableBtn';
import HightSpacer from '../Reusable/HeightSpacer';
import { useNavigation } from '@react-navigation/native';
import { TEXT, COLORS } from '../../constance/theme';

const Slides = ({item}) => {

  const navigation = useNavigation();
  
  return (
    <View>
      {/* <Image source={item.image} style={styles.image}/> */}

       <ImageBackground source={item.image} style={styles.image}/>
       <View style={styles.stack}>

        
        <ReusableText 
          text={item.title}
          // family={'bold'}
          size={TEXT.xxxLarge}
          color={COLORS.white}
        />

        <HightSpacer />
        

        <ReusableBtn 
          onPress={()=> navigation.navigate('Bottom')}
          btnText={"Let's Go"}
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