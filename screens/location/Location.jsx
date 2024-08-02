import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const Location = () => {

  const coordinates = {
    // latitude: 35.6855,
    // longitude: 139.68884,
    // latitudeDelta: 0.01,
    // longitudeDelta: 0.01,
    latitude: 7.8731,
    longitude: 80.7718,
    latitudeDelta: 2.5,
    longitudeDelta: 2.5,
    title: "Colombo"

  }

  return (
    <MapView provider={PROVIDER_GOOGLE} initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title={coordinates.title} description={"Capital of Sri Lanka"}/>
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject
  }
})