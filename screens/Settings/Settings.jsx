import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constance/theme'
import { AppBar, Hspace, ReusableText, SettingTile } from '../../components'

const Settings = ({navigation}) => {
  return (
    <View style={{backgroundColor: COLORS.lightWhite, flex: 1}}>
      <View style={{height: 120}}>
      <AppBar 
          top={50}
          left={20}
          right={20}
          color={COLORS.white} 
          onPress={()=> navigation.goBack()}
        />
      </View>

      <View style={{marginHorizontal: 20}}>

        <ReusableText 
            text={"Account Setting"}
            // family={"medium"}
            size={SIZES.xLarge}
            color={COLORS.black}
        />
        <Hspace height={10}/>

        <SettingTile title={'Language'}/>

        <Hspace height={3}/>

        <SettingTile title={'Country'} title1={'USA'}/>

        <Hspace height={3}/>

        <SettingTile title={'Currency'} title1={'USD'}/>

        <Hspace height={40}/>        

        <ReusableText 
            text={"Support"}
            // family={"medium"}
            size={SIZES.xLarge}
            color={COLORS.black}
        />
            <Hspace height={10}/>

            <SettingTile title={'Get Help'} title1={''}/>

            <Hspace height={3}/>

            <SettingTile title={'Give a feedback'} title1={''}/>

            <Hspace height={40}/>


        <ReusableText 
            text={"Legal"}
            // family={"medium"}
            size={SIZES.xLarge}
            color={COLORS.black}
        />
        <Hspace height={10}/>

            <SettingTile title={'Term of Service'} title1={''}/>

            <Hspace height={3}/>

            <SettingTile title={'Privacy Policy'} title1={''}/>


      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({})