import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import ReusableText from '../../Reusable/ReusableText'
import { COLORS, TEXT } from '../../../constance/theme'
import { HightSpacer, NetworkImage, ReusableText } from '../../../components/index';


const Country = ({ item }) => {
  return (
    <TouchableOpacity >
        <View>

            <NetworkImage 
              source={item.imageUrl} 
              width={85} 
              height={85} 
              radius={12}
            />

            
            {/* <HightSpacer height={5} */}

            <ReusableText  
              text={item.country}
              family={"medium"}
              size={TEXT.medium}
              color={COLORS.black}
              align={"center"}
            />

        </View>
    </TouchableOpacity>
  )
}

export default Country