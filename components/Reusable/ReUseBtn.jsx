import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SIZES } from '../../constance/theme'

const ReUseBtn = ({ onPress, btnText, textColor, width, backgroundColor, borderWidth, borderColor }) => {
  return (
    <TouchableOpacity
        onPress={onPress} style={styles.btnStyles(width, backgroundColor, borderWidth, borderColor)}
    >
        <Text style={styles.btnText(textColor)}>{btnText}</Text>
    </TouchableOpacity>
  )
}
export default ReUseBtn
const styles = StyleSheet.create({
    btnText: (textColor) => ({
        fontFamily: "medium",
        fontSize: SIZES.medium,
        color: textColor
    }),
    btnStyles: (width, backgroundColor, borderWidth, borderColor)=> ({
        width: width,
        backgroundColor: backgroundColor,
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: SIZES.small,
        borderColor: borderColor,
        borderWidth: borderWidth
    })
})
