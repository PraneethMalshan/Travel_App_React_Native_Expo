import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constance/theme'

const Recommended = () => {
  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View>
        <AppBar title={'Recommendations'} color={COLORS.white} icon={'search1'} color1={COLORS.white}/>
      </View>
    </SafeAreaView>
  )
}

export default Recommended