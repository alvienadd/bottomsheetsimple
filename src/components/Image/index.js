import React from 'react'
import { Image, View } from 'react-native'

import styles from './styles'

const Gambar = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/react-native.png')} style={styles.image} resizeMode="contain" />
    </View>
  )
}

export default Gambar
