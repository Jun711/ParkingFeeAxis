import { StyleSheet } from 'react-native';

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
    fontSize: 18,
    color: '#38414e',
  },
  faqItem: {
    flex: 10,
    textAlign: 'left',
    fontSize: 18,
    color: '#38414e',
  },
});

export default styles;