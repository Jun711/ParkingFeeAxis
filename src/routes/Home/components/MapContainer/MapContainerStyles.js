import { StyleSheet } from 'react-native'
import { CURRENT_MARKER_COLOR, MARKER_RADIUS, MARKER_SIZE } from '../../../../util/constants'

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
    height: MARKER_RADIUS,
    width: MARKER_RADIUS,
    borderRadius: MARKER_RADIUS / 2,
    overflow: 'hidden',
    backgroundColor: 'rgba(81, 92, 109, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(81, 92, 109, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: MARKER_SIZE,
    width: MARKER_SIZE,
    borderRadius: MARKER_SIZE / 2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: CURRENT_MARKER_COLOR
  },
  centreMarker: {
    height: MARKER_SIZE,
    width: MARKER_SIZE,
    borderRadius: MARKER_SIZE / 2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: 'rgb(0, 122, 122)'
  }
})

export default styles