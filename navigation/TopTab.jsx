import { View, Text, Image } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopBookings, TopInfo, TopTrips } from '../screens';
import { COLORS, SIZES } from '../constance/theme';
import { AppBar, Hspace, NetworkImage, ReusableText } from '../components';
import styles from '../screens/top/topTab.style';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <View style={{flex: 1}}>

        <View style={{backgroundColor: COLORS.lightWhite}}>
            <View>

                <NetworkImage 
                    source={"https://aebc975c.rocketcdn.me/wp-content/uploads/2020/12/plage.jpg"}
                    width={'100%'}
                    height={300}
                    radius={0}
                />

                <AppBar 
                    top={40}
                    left={20}
                    right={20}
                    color={COLORS.white}
                    icon={'logout'}
                    color1={COLORS.white}
                    onPress={()=> {}}
                />

                <View style={styles.profile}>

                    <Image source={{uri: "https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg"}}
                        style={styles.image}
                    />

                    <Hspace height={5}/>

                        <View style={{alignItems: "center"}}>
                            <ReusableText 
                                text={'Praneeth Malshan'}
                                size={SIZES.medium}
                                color={COLORS.black}
                            />
                        </View>

                    <Hspace height={5}/>

                    <View style={styles.name}>
                        <View style={{alignItems: "center"}}>
                            <ReusableText 
                                text={'praneeth@gmail.com'}
                                size={SIZES.medium}
                                color={COLORS.white}
                            />
                        </View>
                    </View>
                        
                    

                </View>
            </View>
        </View>

      <Tab.Navigator>
        <Tab.Screen name='Bookings' component={TopBookings}/>
        <Tab.Screen name='Trips' component={TopTrips}/>
        <Tab.Screen name='Info' component={TopInfo}/>
      </Tab.Navigator>
    </View>
  )
}

export default TopTab