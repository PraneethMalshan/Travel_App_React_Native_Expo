import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const ReusableBtn = ({onPress, btnText}) => {
  return (
    <TouchableOpacity
        onPress={onPress} style={styles.btnStyles}
    >
        <Text style={styles.btnText}>{btnText}</Text>
    </TouchableOpacity>
  )
}

export default ReusableBtn

const styles = StyleSheet.create({
    btnText: {
        fontSize: 20,
        color: 'white'
    },
    btnStyles: {
        width: 170,
        backgroundColor: 'red',
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: 12,
        borderColor: 'gray',
        borderWidth: 2
    }
})