const styles = {
  centerMarker: {
    height: 15,
    width: 15,
    borderRadius: 15/2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: 'rgb(0, 122, 122)',
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