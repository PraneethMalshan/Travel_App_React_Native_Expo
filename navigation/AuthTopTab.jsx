import { View, Text, ScrollView, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {Registration, Signin} from '../screens'
import { COLORS } from '../constance/theme'
import { Hspace } from '../components'

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView style={{flex: 1, backgroundColor: COLORS.lightWhite }}>
        <Hspace height={80}/>
        {/* <View style={styles.imgContainer}> */}
        <Image
            source={require('../assets/images/bg2.png')}
            style={styles.image}
        />
        {/* </View> */}

        <View style={{height: 600}}>
            <Tab.Navigator>
                <Tab.Screen name='Signin' component={Signin}/>
                <Tab.Screen name='Registration' component={Registration} />
            </Tab.Navigator>
        </View>
      </ScrollView>
    </View>
  )
}

export default AuthTopTab

const styles = StyleSheet.create({

    imgContainer: {
        // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },

    image: {
        width: '100%',
        height: 250,
    }
})