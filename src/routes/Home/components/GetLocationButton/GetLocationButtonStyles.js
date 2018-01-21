import { StyleSheet } from 'react-native'
import { THEME_COLOR, WHITE_COLOR, TITLE_FONT_SIZE } from '../../../../util/constants'

const styles =  StyleSheet.create({
  container: {
    borderColor: WHITE_COLOR,
    height: 40,
    width: 40,
    borderRadius: 40 / 2,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 50,
    right: 30,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
  },
  icon: {
    color: THEME_COLOR,
    fontSize: TITLE_FONT_SIZE
  }
})

export default styles;