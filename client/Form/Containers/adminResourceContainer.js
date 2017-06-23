import React, {Component}  from 'react'
import {Form, Field} from 'simple-react-form'
import Text from 'simple-react-form-material-ui/lib/text'
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { browserHistory } from 'react-router';

export default class AdminResourceContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      phone: "",
      type: ""
    }
  }

  handleOnSubmit() {
    const data = this.state
    axios.defaults.headers.common['x-auth'] = sessionStorage.getItem('auth');
    axios.post('http://localhost:8080/api/services', data)
    .then((res) => {
      // show a success message to user
      console.log('Success', res)
    })
    .catch((error) => {
      // show error message to user
      console.log('something went wrong ', error)
    })
  }


  render(){
    return(
      <div>
        <h1>Add a Resource</h1>
        <Form state={this.state} onChange={changes => this.setState(changes)}>
          <Field fieldName='name' label='Name' type={Text} />
          <Field fieldName='streetAddress' label='Street Address' type={Text} />
          <Field fieldName='city' label='City' type={Text} />
          <Field fieldName='state' label='State' type={Text} />
          <Field fieldName='zipCode' label='Zip Code' type={Text} />
          <Field fieldName='phone' label='Phone' type={Text} />
          <Field fieldName='type' label='Type(Region)' type={Text} />
        </Form>
        <RaisedButton
          label="Submit"
          primary={false}
          onTouchTap={this.handleOnSubmit.bind(this)}
        />
      </div>
    )
  }
}
