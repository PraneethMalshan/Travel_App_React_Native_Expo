import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
// import ReusableText from '../../Reusable/ReusableText'
import { COLORS, TEXT } from '../../../constance/theme'
import { HightSpacer, NetworkImage, ReusableText } from '../../../components/index';
import { useNavigation } from '@react-navigation/native';

const Country = ({ item }) => {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={()=> navigation.navigate('CountryDetails', {item})}>
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
              // family={"medium"}
              size={TEXT.medium}
              color={COLORS.black}
              align={"center"}
            />
            <HightSpacer height={5} />
        </View>
    </TouchableOpacity>
  )
}

export default Country