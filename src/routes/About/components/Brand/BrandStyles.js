import { StyleSheet } from 'react-native'
import { APP_NAME_FONT_SIZE, APP_VERSION_FONT_SIZE, TEXT_COLOR } from '../../../../util/constants'

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    margin: 10,
    flex: 1,
    alignItems: 'center',
  },
  appName: {
    fontSize: APP_NAME_FONT_SIZE,
    color: TEXT_COLOR,
  },
  appVersion: {
    fontSize: APP_VERSION_FONT_SIZE,
    paddingBottom: 5,
  },
  logo: {
    height: 80,
    width: 80,
  }
})

export default styles