import { StyleSheet } from 'react-native'
import { THEME_COLOR, TEXT_COLOR } from '../../util/constants'

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
    fontSize: 18,
    color: THEME_COLOR,
  },
  infoItem: {
    flex: 8,
    textAlign: 'left',
    fontSize: 18,
    color: TEXT_COLOR,
  },
})

export default styles