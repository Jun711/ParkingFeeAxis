const styles = {
  centerMarker: {
    height: 15,
    width: 15,
    borderRadius: 15/2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: '#515c6d',
    justifyContent: "center",
    position: "absolute",
    left: '50%',
    right: '50%',
    bottom: '50%',
    top: '50%',
    transform: [{translateX: -15/2}, {translateY: -15/2}],
    alignSelf: 'center',
  }
};

export default styles;