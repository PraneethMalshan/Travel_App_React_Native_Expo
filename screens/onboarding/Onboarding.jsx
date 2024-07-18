import { StyleSheet, FlatList } from 'react-native'
import React from 'react';
// import { Slides } from '../../components/Onboard/Slides';
import { Slides } from '../../components';


const Onboarding = () => {

    const slides = [
        {
            id: 1,
            image: require('../../assets/images/T1.png'),
            title: "Find the perfect place to stay."
        },
        {
            id: 2,
            image: require('../../assets/images/T2.png'),
            title: "Discover the world."
        },
        {
            id: 3,
            image: require('../../assets/images/T3.png'),
            title: "Find the best Hotels in the world."
        },
    ]

  return (
    <FlatList 
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({item})=> <Slides item={item} />}
    />
  )
}

export default Onboarding

