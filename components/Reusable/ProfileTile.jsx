import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constance/theme'
import reusable from './reusable.style'
import { AntDesign } from '@expo/vector-icons'
import Wspace from './Wspace'
import ReusableText from './ReusableText'

const ProfileTile = ({onPress, title, icon}) => {
  return (
    <TouchableOpacity style={[reusable.rowWithSpace('space-between'), styles.tile]} onPress={onPress}>
{/* onPress={onPress} style={[reusable.rowWithSpace('space-between'), styles.container]}     */}
        <View style={reusable.rowWithSpace("space-between")}>
            <View style={reusable.rowWithSpace("flex-start")}>
                <AntDesign name={icon} size={20}/>
                <Wspace width={25} />
                <ReusableText 
                    text={title}
                    // family={"regular"}
                    size={SIZES.medium}
                    color={COLORS.gray}
                />
                <Wspace width={20}/>
                <View>
                <AntDesign name='right' size={20} color={COLORS.dark}/>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default ProfileTile

const styles = StyleSheet.create({
  tile: {
    borderBottomWidth: 1,
    borderColor: COLORS.lightGray,
    paddingVertical: 15
  }
})