import React, { Component } from 'react'
import FirstName from '../components/FirstName'
import LastName from '../components/LastName'
import Address from '../components/Address'
import City from '../components/City'
import State from '../components/State'
import ZipCode from '../components/ZipCode'
import PhoneNumber from '../components/PhoneNumber'
import Email from '../components/Email'

class FormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errors: {},
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: '',
      phoneNumber: '',
      email: ''
    }
    this.handleFirstName = this.handleFirstName.bind(this)
    this.handleLastName = this.handleLastName.bind(this)
    this.handleAddress = this.handleAddress.bind(this)
    this.handleCity = this.handleCity.bind(this)
    this.handleState = this.handleState.bind(this)
    this.handleZipCode = this.handleZipCode.bind(this)
    this.handlePhoneNumber = this.handlePhoneNumber.bind(this)
    this.handleEmail = this.handleEmail.bind(this)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleFirstName(event) {
    let input = event.target.value
    this.setState({
      firstName: input
    })
    if (input.match(/^[a-zA-Z]+$/)) {
      let errorState = this.state.errors
      delete errorState.firstNameError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { firstNameError: 'Error in first name input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handleLastName(event) {
    let input = event.target.value
    this.setState({
      lastName: input
    })
    if (input.match(/^[a-zA-Z]+$/)) {
      let errorState = this.state.errors
      delete errorState.lastNameError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { lastNameError: 'Error in last name input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handleAddress(event) {
    let input = event.target.value
    this.setState({
      address: input
    })
    if (input.match(/^[0-9a-zA-Z\s]+$/)) {
      let errorState = this.state.errors
      delete errorState.addressError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { addressError: 'Error in address input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handleCity(event) {
    let input = event.target.value
    this.setState({
      city: input
    })
    if (input.match(/^[a-zA-Z]+$/)) {
      let errorState = this.state.errors
      delete errorState.cityError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { cityError: 'Error in city input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handleState(event) {
    this.setState({
      state: event.target.value
    })
  }

  handleZipCode(event) {
    let input = event.target.value
    this.setState({
      zipCode: input
    })
    if (input.match(/^[0-9]+$/) && input.length === 5) {
      // Check Here: refactor to be unacceptable when LEAVING the input field
      let errorState = this.state.errors
      delete errorState.zipCodeError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { zipCodeError: 'Error in ZIP code input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handlePhoneNumber(event) {
    let input = event.target.value
    this.setState({
      phoneNumber: input
    })
    if (input.match(/^[0-9]+$/) && input.length === 10) {
      // Check Here: refactor to be unacceptable when LEAVING the input field
      let errorState = this.state.errors
      delete errorState.phoneNumberError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { phoneNumberError: 'Error in phone number input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handleEmail(event) {
    let input = event.target.value
    this.setState({
      email: input
    })

    function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }

    if (validateEmail(input)) {
      // Check Here: refactor to be unacceptable when LEAVING the input field
      let errorState = this.state.errors
      delete errorState.emailError
      this.setState({
        errors: errorState
      })
    } else {
      let newError = { emailError: 'Error in email input field' }
      this.setState({
        errors: Object.assign(this.state.errors, newError)
      })
    }
  }

  handleSubmit() {
    console.log(this.state)
  }

  render() {
    let errorDiv;
    let errorItems;
    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map(error => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }
    return (
      <form className="callout" id="shipping-address-form">
        {errorDiv}
        <h1>Shipping Address</h1>
        <FirstName
          content={this.state.firstName}
          handleChange={this.handleFirstName}
        />

        <LastName
          content={this.state.lastName}
          handleChange={this.handleLastName}
        />

        <Address
          content={this.state.address}
          handleChange={this.handleAddress}
        />

        <City
          content={this.state.city}
          handleChange={this.handleCity}
        />

        <State
          content={this.state.state}
          handleChange={this.handleState}
        />

        <ZipCode
          content={this.state.zipCode}
          handleChange={this.handleZipCode}
        />

        <PhoneNumber
          content={this.state.phoneNumber}
          handleChange={this.handlePhoneNumber}
        />

        <Email
          content={this.state.email}
          handleChange={this.handleEmail}
        />

      <input type="button" className="button" value="Submit" onClick={this.handleSubmit}/>
      </form>
    )
  }
}

export default FormContainer
