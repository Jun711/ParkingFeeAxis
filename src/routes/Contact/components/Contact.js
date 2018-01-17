import React, { Component } from 'react'
import { AppRegistry, View, StyleSheet } from 'react-native'
import { Container } from 'native-base'
import Loader from '../../../components/Loader/Loader'
import ContactInfoList from './ContactInfoList/ContactInfoList'
import Error from '../../../components/Error/Error'
import { CONTACT_INFO_LOADING_ERROR } from '../../../util/constants'

class Contact extends Component {

  componentWillMount() {
    this.props.loadContactInfo()
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.props.loadingError && !this.props.contactInfoLoaded && <Loader/>}
        {this.props.contactInfoLoaded && <ContactInfoList contactInfo={this.props.contactInfo}/>}
        {this.props.loadingError && <Error errorMsg={CONTACT_INFO_LOADING_ERROR}/>}
      </View>
    )
  }
}

export default Contact

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
})

AppRegistry.registerComponent('Contact', () => Contact)