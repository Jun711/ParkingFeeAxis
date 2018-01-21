import { StyleSheet } from 'react-native'
import { TITLE_FONT_SIZE, PRIMARY_FONT_SIZE, THEME_COLOR, TEXT_COLOR } from '../../../../util/constants'

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 4,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    paddingLeft: 5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  infoIcon: {
    fontSize: PRIMARY_FONT_SIZE,
    color: THEME_COLOR,
  },
  infoItem: {
    flex: 8,
    textAlign: 'left',
    fontSize: PRIMARY_FONT_SIZE,
    color: TEXT_COLOR,
  },
  sectionTitle: {
    fontSize: TITLE_FONT_SIZE,
    color: TEXT_COLOR,
  }
})

export default styles