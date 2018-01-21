import { StyleSheet } from 'react-native'
import { PRIMARY_FONT_SIZE, THEME_COLOR, TEXT_COLOR } from '../../../../util/constants'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 5,
    paddingLeft: 5,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  faqNumber: {
    flex: 1,
    fontSize: PRIMARY_FONT_SIZE,
    color: THEME_COLOR,
  },
  faqItem: {
    flex: 10,
    textAlign: 'left',
    fontSize: PRIMARY_FONT_SIZE,
    color: TEXT_COLOR,
  },
})

export default styles