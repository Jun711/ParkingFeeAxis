import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import styles from './LoaderStyles'
import { LOADER_COLOR } from "../../util/constants"

export const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loadingIndicator} size='large' color={LOADER_COLOR}/>
    </View>
  )
}

export default Loader
