import React from 'react'
import { AppRegistry, Dimensions } from 'react-native'
import { Container } from 'native-base'
import MapContainer from './MapContainer/MapContainer'
import HeaderComponent from '../../../components/HeaderComponent/HeaderComponent'
import FloatingActionButton from './FloatingActionButton/FloatingActionButton'
import FloatingCenterMarker from './FloatingCenterMarker/FloatingCenterMarker'
import SearchResults from './SearchResults/SearchResults'
import BottomBannerAd from '../../../components/BottomBannerAd/BottomBannerAd'

const {width, height} = Dimensions.get('window')

const SCREEN_HEIGHT = height
const SCREEN_WIDTH = width
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.020
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Home extends React.Component {

  componentDidMount() {
    this.props.checkLocationPermission()
  }

  render() {
    return (
      <Container>
        <HeaderComponent
          handleSearchInput={this.props.getInputData}
          displaySearchBar={this.props.displaySearchBar}
          getLocationPredictions={this.props.getLocationPredictions}
          onHeaderPressed={this.props.onHeaderPressed}
          onHeaderBackPressed={this.props.onHeaderBackPressed}
        />
        {this.props.region.latitude &&
        <MapContainer
          userCoord={this.props.userCoord}
          region={this.props.region}
          getInputData={this.props.getInputData}
          toggleSearchResultModal={this.props.toggleSearchResultModal}
          getLocationPredictions={this.props.getLocationPredictions}
          resultTypes={this.props.resultTypes}
          predictions={this.props.predictions}
          selectedAddress={this.props.selectedAddress}
          handleRegionChangeComplete={this.props.handleRegionChangeComplete}
          nearbyParkingSpots={this.props.nearbyParkingSpots}
          displayCentreMarker={this.props.displayCentreMarker}
          onMarkerPressed={this.props.onMarkerPressed}
          onCalloutPressed={this.props.onCalloutPressed}
          onMapPressed={this.props.onMapPressed}
          lowestRate={this.props.lowestRate}
          highestRate={this.props.highestRate}
        />
        }

        {!this.props.displaySearchBar && this.props.displayCentreMarker &&
        <FloatingCenterMarker displayCentreCoord={this.props.displayCentreCoord}/>
        }
        {!this.props.displaySearchBar &&
        <FloatingActionButton getCurrentLocation={this.props.getCurrentLocation}/>
        }
        {this.props.displaySearchBar &&
        <SearchResults
          displayLoader={this.props.displayLoader}
          locationPredictions={this.props.locationPredictions}
          selectLocation={this.props.selectLocation}
        />
        }
        <BottomBannerAd/>
      </Container>
    )
  }
}

export default Home

AppRegistry.registerComponent('Home', () => Home)