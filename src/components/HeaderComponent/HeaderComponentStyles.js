import { StyleSheet } from 'react-native'
import { THEME_COLOR, TITLE_FONT_SIZE, PRIMARY_FONT_SIZE, WHITE_COLOR } from '../../util/constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38414e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchIcon: {
    color: '#fff',
    fontSize: TITLE_FONT_SIZE,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
  },
  icon: {
    color: '#fff',
    fontSize: TITLE_FONT_SIZE,
  },
  inputSearch: {
    backgroundColor: WHITE_COLOR,
    height: 40,
    fontSize: TITLE_FONT_SIZE,
    paddingTop: 1,
    paddingBottom: 1,
    color: THEME_COLOR,
    textAlignVertical: 'center',
    includeFontPadding: false,
    borderRadius: 5,
  },
  headerText: {
    fontSize: TITLE_FONT_SIZE,
    color: '#fff',
  }
})

export default styles;