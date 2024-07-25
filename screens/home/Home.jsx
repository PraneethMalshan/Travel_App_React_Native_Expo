import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import { HightSpacer, ReusableText } from '../../components'
import { AntDesign } from '@expo/vector-icons'
import { COLORS, SIZES } from '../../constance/theme'

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

        <Text style={styles.textStyle1}>
            Places
        </Text>

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
    fontSize: 21,
    color: "black",
    fontWeight: 'bold'
},
})
