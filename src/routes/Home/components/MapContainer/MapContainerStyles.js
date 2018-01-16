import { StyleSheet } from 'react-native'
import { CURRENT_MARKER_COLOR } from '../../../../util/constants'

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  radius: {
    height: 70,
    width: 70,
    borderRadius: 70 / 2,
    overflow: 'hidden',
    // backgroundColor: 'rgba(0, 122, 255, 0.1)',
    backgroundColor: 'rgba(81, 92, 109, 0.1)',
    borderWidth: 1,
    // borderColor: 'rgba(0, 112, 255, 0.3)',
    borderColor: 'rgba(81, 92, 109, 0.3)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  marker: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: CURRENT_MARKER_COLOR
  },
  centreMarker: {
    height: 15,
    width: 15,
    borderRadius: 15 / 2,
    borderWidth: 1,
    borderColor: 'white',
    overflow: 'hidden',
    backgroundColor: 'rgb(0, 122, 122)'
  },
  mapStyle: [
    {
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#242f3e'
        }
      ]
    },
    {
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#746855'
        }
      ]
    },
    {
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#242f3e'
        }
      ]
    },
    {
      'featureType': 'administrative.locality',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#d59563'
        }
      ]
    },
    {
      'featureType': 'poi',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#d59563'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#263c3f'
        }
      ]
    },
    {
      'featureType': 'poi.park',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#6b9a76'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#38414e'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#212a37'
        }
      ]
    },
    {
      'featureType': 'road',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#9ca5b3'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#746855'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'geometry.stroke',
      'stylers': [
        {
          'color': '#1f2835'
        }
      ]
    },
    {
      'featureType': 'road.highway',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#f3d19c'
        }
      ]
    },
    {
      'featureType': 'transit',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#2f3948'
        }
      ]
    },
    {
      'featureType': 'transit.station',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#d59563'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'geometry',
      'stylers': [
        {
          'color': '#17263c'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.fill',
      'stylers': [
        {
          'color': '#515c6d'
        }
      ]
    },
    {
      'featureType': 'water',
      'elementType': 'labels.text.stroke',
      'stylers': [
        {
          'color': '#17263c'
        }
      ]
    }
  ]
}

export default styles