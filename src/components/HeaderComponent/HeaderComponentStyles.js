import { StyleSheet } from 'react-native'
import { THEME_COLOR } from '../../util/constants'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#38414e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  searchIcon: {
    color: '#fff',
    fontSize: 20,
  },
  backIcon: {
    color: '#fff',
    fontSize: 24,
  },
  icon: {
    color: '#fff',
    fontSize: 20,
  },
  inputSearch: {
    height: 40,
    fontSize: 18,
    color: THEME_COLOR,
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  }
})

export default styles;