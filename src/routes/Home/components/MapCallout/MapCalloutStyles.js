import { StyleSheet } from 'react-native'
import { PRIMARY_FONT_SIZE, THEME_COLOR, TEXT_COLOR, WHITE_COLOR } from '../../../../util/constants'

const styles = StyleSheet.create({
  mapCalloutText: {
    borderColor: THEME_COLOR,
    borderWidth: 1,
    color: TEXT_COLOR,
    fontSize: PRIMARY_FONT_SIZE,
    padding: 5,
    position: 'relative',
    zIndex: 5,
    backgroundColor: WHITE_COLOR
  },
})

export default styles