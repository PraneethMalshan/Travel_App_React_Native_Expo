import { StyleSheet, Image, Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { AppBar, Counter, Hspace, NetworkImage, Rating, ReusableText, ReUseBtn, Wspace } from '../../components';
import { COLORS, SIZES } from '../../constance/theme';
import reusable from '../../components/Reusable/reusable.style';

const SelectedRoom = ({navigation}) => {

  const router = useRoute();
  const {item} =router.params;
  console.log(item);

  return (
    <View>
      <View style={{height: 100}}>
        <AppBar 
            top={50}
            left={20}
            right={20}
            title={item.title} 
            color={COLORS.white} 
            onPress={()=> navigation.goBack()}
          />
      </View>

      <View style={{marginHorizontal: 20}}>
        <View style={{backgroundColor: COLORS.lightWhite, borderRadius: 16}}>
          
          <NetworkImage 
            source={item.imageUrl}
            width={"100%"}
            height={200}
            radius={16}
          />

          <Hspace height={20}/>

          <View style={{marginHorizontal: 10}}>
            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText 
                  text={item.title}
                  size={SIZES.medium}
                  color={COLORS.black}
              />

              <View style={reusable.rowWithSpace('space-between')}>
                
                <Rating rating={item.rating}/>

                <Wspace width={10}/>

                <ReusableText 
                  text={`(${item.review})`}
                  size={SIZES.medium}
                  color={COLORS.gray}
                />
              </View>

            </View>

            <Hspace height={10}/>

            <ReusableText 
                text={item.location}
                size={SIZES.medium}
                color={COLORS.gray}
            />

            <View style={{borderWidth: 0.5, borderColor: COLORS.lightGray, marginVertical: 15}}>
            </View>

            <ReusableText 
                text={'Room Requirements'}
                size={SIZES.medium}
                color={COLORS.black}
            />

            <Hspace height={30}/>
            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText 
                text={"Price per night"}
                size={SIZES.medium}
                color={COLORS.black}
              />
              <ReusableText 
                text={"$ 400"}
                size={SIZES.medium}
                color={COLORS.black}
              />
            </View>

            <Hspace height={15}/>
            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText 
                text={"Payment Method"}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <View style={reusable.rowWithSpace('flex-start')}>
              <Image
                  source={require('../../assets/images/Visa.png')}
                  style={styles.image}
              />
                <ReusableText 
                  text={"Visa"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>

            </View>
            
            <Hspace height={15}/>

            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText 
                text={'$ Guest'}
                size={SIZES.medium}
                color={COLORS.black}
              />

              <Counter />

            </View>

            <Hspace height={30}/>

            <ReUseBtn 
                onPress={() => navigation.navigate("Success", {item})}
                btnText={"Book Now"}
                width={SIZES.width - 50}
                backgroundColor={COLORS.lightBlue}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
            />

<Hspace height={30}/>

          </View>
        </View>
      </View>
    </View>
  )
}

export default SelectedRoom

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 20,
  }
})