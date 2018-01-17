import { StyleSheet } from 'react-native'
import { SECONDARY_FONT_SIZE, TEXT_COLOR } from '../../../../util/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailText: {
    fontSize: SECONDARY_FONT_SIZE,
    paddingLeft: 5,
    color: TEXT_COLOR,
  }
})

export default styles