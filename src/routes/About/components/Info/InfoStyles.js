import { StyleSheet } from 'react-native';

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
    color: '#38414e',
  },
  infoItem: {
    flex: 8,
    textAlign: 'left',
    fontSize: 18,
    color: '#000',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#000',
  }
});

export default styles;