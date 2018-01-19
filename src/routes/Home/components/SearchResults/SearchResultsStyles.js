import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  searchResultsWrapper: {
    ...StyleSheet.absoluteFillObject,
    top: 55,
    position: 'absolute',
    height: 1000,
    backgroundColor: '#fff',
  },
  primaryText: {
    fontWeight: 'bold',
    color: '#373737'
  },
  secondaryText: {
    fontStyle: 'italic',
    color: '#7D7D7D',
  },
  leftContainer: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    borderLeftColor: '#7D7D7D',
  },
  leftIcon: {
    fontSize: 20,
    color: '#7D7D7D',
  },
  distance: {
    fontSize: 12,
  },
  container: {
    flex: 1,
  }
})

export default styles