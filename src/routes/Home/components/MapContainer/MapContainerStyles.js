import { StyleSheet } from 'react-native'
import { CURRENT_MARKER_COLOR } from '../../../../util/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  radius: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    overflow: 'hidden',
    // backgroundColor: 'rgba(0, 122, 255, 0.1)',
    backgroundColor: 'rgba(81, 92, 109, 0.1)',
    borderWidth: 1,
    // borderColor: 'rgba(0, 112, 255, 0.3)',
    borderColor: 'rgba(81, 92, 109, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: CURRENT_MARKER_COLOR
  },
  centreMarker: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: 'rgb(0, 122, 122)'
  }
})

export default styles