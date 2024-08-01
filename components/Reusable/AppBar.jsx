import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../../components/Reusable/reusable.style';
import { AntDesign } from '@expo/vector-icons';
import ReusableText from './ReusableText';
import { COLORS, SIZES, TEXT } from '../../constance/theme';

const AppBar = ({color, title, color1, icon}) => {
  return (
    <View style={styles.overlay}>
      <View style={reusable.rowWithSpace('space-between')}>
        <TouchableOpacity style={styles.box(color)}>
            <AntDesign 
                name='left'
                size={20}
            />
        </TouchableOpacity>

        <ReusableText 
            text={title}
            size={TEXT.large}
            color={COLORS.black}
        />

        <TouchableOpacity style={styles.box1(color1)}>
            <AntDesign 
                name={icon}
                size={26}
            />
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default AppBar

const styles = StyleSheet.create({
    overlay: {
        position: "absolute",
        top: 10,
        left: 0,
        right: 0,
        justifyContent: "center"
    },
    box: (color)=> ({
        backgroundColor: color,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center"
    }),
    box1: (color1)=> ({
        backgroundColor: color1,
        width: 30,
        height: 30,
        borderRadius: 9,
        alignItems: "center",
        justifyContent: "center"
    })

})