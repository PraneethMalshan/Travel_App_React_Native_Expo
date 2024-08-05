import { StyleSheet, Image, Text, View, FlatList } from 'react-native'
import React from 'react'
import { AppBar, Hspace, ReUseBtn } from '../../components';
import { COLORS, SIZES } from '../../constance/theme';
import ReusableTile from '../../components/Reusable/ReusableTile';

const SelectRoom = ({navigation}) => {

  const rooms =  [
    {
        "_id": "64c631650298a05640539adx",
        "country_id": "64c62bfc65af9f8c969a8d03",
        "title": "Single Room",
        "location": "Room No: 202",
        "imageUrl": "https://brend-imperial.co.uk/sites/default/files/styles/940x690/public/2023-07/room-100-single-room.jpg?h=c6980913&itok=opDVHlGP",
        "rating": 4.6,
        "review": "1200 Reviews"
    },
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Double Room",
        "location": "Room No: 502",
        "imageUrl": "https://cdn.traveltripper.io/site-assets/512_863_12597/media/2018-02-22-041437/large_DDBDB.jpg",
        "rating": 4.7,
        "review": "1204 Reviews"
    },
    {
        "_id": "64d062a3de20d7c932f1f70a",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Triple Room",
        "location": "Room No: 302",
        "imageUrl": "https://grandbayon.com/wp-content/uploads/2017/10/deluxe-triple-city-view-5.jpg",
        "rating": 4.8,
        "review": "1452 Reviews"
    },
    {
        "_id": "64d09e3f364e1c37c8b4b13c",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Quad Room",
        "location": "Room No: 102",
        "imageUrl": "https://d3avoj45mekucs.cloudfront.net/astrogempak/media/marcus-eic/6.jpg",
        "rating": 4.6,
        "review": "2145 Reviews"
    },
    {
        "_id": "64d09f90364e1c37c8b4b140",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Standard Room",
        "location": "Room No: 702",
        "imageUrl": "https://www.conservatoriumhotel.com/content/uploads/2022/09/Penthouse-Suite-900-3-1920x1080.jpg",
        "rating": 4.8,
        "review": "24455 Reviews"
    }
];

  return (
    <View>
      <View style={{height: 100}}>
        <AppBar 
            top={50}
            left={20}
            right={20}
            title={'Select Room'} 
            color={COLORS.white} 
            onPress={()=> navigation.goBack()}
          />
      </View>
      <FlatList 
        data={rooms}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        renderItem={({item})=> (
          <View style={styles.tileColumn}>
            <View style={styles.tile}>
            <ReusableTile item={item}/>
            <Hspace height={10} />

            <View style={styles.btnStyle}>
              <ReUseBtn 
                  onPress={() => navigation.navigate("SelectedRoom", {item})}
                  btnText={"Select Room"}
                  width={SIZES.width - 50}
                  backgroundColor={COLORS.lightBlue}
                  borderColor={COLORS.green}
                  borderWidth={0}
                  textColor={COLORS.white}
              />
            </View>
            
            </View>
            
          </View>
          
        )}
      />
      
    </View>
  )
}

export default SelectRoom

const styles = StyleSheet.create({
  tileColumn:{
    marginHorizontal: 20, 
    marginBottom: 10
  },
  tile:{backgroundColor: COLORS.lightWhite, borderRadius: 12},
  btnStyle: {margin: 10, alignItems: "center"},

})