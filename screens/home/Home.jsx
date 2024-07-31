import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import { HightSpacer, Recommendations, ReusableText } from '../../components'
import Places from "../../components/Home/Places"
import { AntDesign } from '@expo/vector-icons'
import { COLORS, SIZES, TEXT } from '../../constance/theme'
import BestHotels from "../../components/Home/BestHotels"
// import Recommendations from '../../components/Home/Recommendations'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace('space-between')}>
          
          <Text style={styles.textStyle}>
            Hey User!
          </Text>

          <TouchableOpacity style={styles.box}
            onPress={()=> navigation.navigate('Search')}
          >
            <AntDesign 
              name='search1'
              size={26}
            />
          </TouchableOpacity>
        </View>

        <HightSpacer height={SIZES.xLarge}/>

       
        <ReusableText  style={styles.textStyle1}
          text={"Places"}
          // family={'bold'}
          size={TEXT.large}
          color={COLORS.black}
        />

        <Places />

        {/* <HightSpacer height={15}/> */}

        <Recommendations />

        <HightSpacer height={15}/>

        <BestHotels />

      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
 
  textStyle:{
    fontSize: 21,
    color: "black"
  },
  box: {
    backgroundColor: COLORS.white,
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
},
  textStyle1:{
    // fontSize: 21,
    // color: "black",
    fontWeight: 'bold'
},
})
