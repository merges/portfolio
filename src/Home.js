import React, { Component } from 'react'

// Assets for home page
import logo from './assets/logo.svg'
import skully from './assets/skully.png'

class Home extends Component {
  render () {
    return (
      <div className='home'>
        <div className='home-header'> 
          <div className='column1'>
            <h1>j</h1>
          </div>
          
          <div className='column2'>
            <div className='contact-item'>
              <div>email:</div>
              <div>mr.munar@jeffmunar.com</div>
            </div>
          
            <div className='contact-item'>
              <div>mobile:</div>
              <div>909.569.3401</div>
            </div>
           
            <div className='contact-item'>
              <div>linkedin:</div>
              <div>linkedin.com/jeffmunar</div>
            </div>
          </div>
        </div>

        <p className='home-intro'>
          Future portfolio. Open and make changes to <code>src/Home.js</code> and save to reload.
        </p>
        <img src={skully}  alt='logo' />
      </div>
    )
  }
}

export default Home
