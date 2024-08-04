import { StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../../Reusable/reusable.style'
import { COLORS, TEXT } from '../../../constance/theme'
import ReusableText from '../../Reusable/ReusableText'
import Wspace from '../../Reusable/Wspace'
import { AntDesign } from '@expo/vector-icons'

const SettingTile = ({title, title1, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[reusable.rowWithSpace('space-between'), styles.container]}>
        <ReusableText 
            text={title}
            // family={"medium"}
            size={TEXT.large}
            color={COLORS.dark}
        />

        {title === "Language" ? (
            <View style={reusable.rowWithSpace('flex-start')}>
                <Image source={require("../../../assets/images/USA.png")}
                    style={styles.image}
                />
                <Wspace width={5}/>
                <ReusableText 
                    text={"English"}
                    // family={"medium"}
                    size={TEXT.large}
                    color={COLORS.gray}
                />
                <Wspace width={5}/>
                <AntDesign name='right' size={20} color={COLORS.dark}/>
            </View>
        ): (
            <View style={reusable.rowWithSpace('flex-start')}>
                <ReusableText 
                    text={title}
                    // family={"medium"}
                    size={TEXT.large}
                    color={COLORS.gray}
                />
                <Wspace width={5}/>
                <AntDesign name='right' size={20} color={COLORS.dark}/>
            </View>
        )

        }

    </TouchableOpacity>
  )
}

export default SettingTile

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray,
        paddingVertical: 15
    },
    image: {
        width: 40, 
        height: 30, 
        resizeMode: "contain"
    }
})