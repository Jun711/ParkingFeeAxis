import { StyleSheet } from 'react-native'
import { THEME_COLOR } from '../../../../util/constants'

const styles =  StyleSheet.create({
  fabContainer: {
    borderColor: '#fff',
    height: 30,
    width: 30,
    borderRadius: 30 / 2,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 100,
    right: 20,
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  icon: {
    color: THEME_COLOR,
    fontSize: 20
  }
})

export default styles;