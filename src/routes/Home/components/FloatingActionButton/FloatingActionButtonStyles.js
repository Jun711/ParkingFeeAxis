const styles = {
  fabContainer: {
    borderColor: '#fff',
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 10,
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
    backgroundColor:'#FF5E3A'
  },
  disabledState:{
    backgroundColor: '#D7D7D7',
  },
  activeState: {
    backgroundColor:'#FF5E3A',
  },
  amount:{
    fontWeight:'bold',
    fontSize: 12
  }
};

export default styles;