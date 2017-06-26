import React, {Component}  from 'react'
import PropTypes from 'prop-types'
// import WebFont from 'webfontloader'

import Footer from '../../footer'
import Header from '../../header'
import ResourcesContainer from './resourcesContainer'

// WebFont.load({
//   google: {
//     families: ['Open Sans:300,400,700', 'sans-serif']
//   }
// });

export default class ViewReportsLanding extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <Header />
        <div className="body-content">
          <ResourcesContainer />
        </div>
        <Footer />
      </div>
    )
  }
}
