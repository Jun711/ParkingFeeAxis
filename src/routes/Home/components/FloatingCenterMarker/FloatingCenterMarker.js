import React from 'react'
import { View, Button } from 'native-base'

import styles from './FloatingCenterMarkerStyles'

export default FloatingCenterMarker = (displayCentreCoord) => {
  return (
    <Button style={styles.centerMarker} onPress={() => displayCentreCoord()}/>
  )
}
