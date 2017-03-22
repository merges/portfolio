import React, { Component } from 'react'



class HomePage extends Component {
  render () {
    return (
      <div className='home'>
        <section className='home-header'> 
          <div className='column1'>
            <h1>J</h1>
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
        </section>

        <section className='introsection'>
          <h2 className='hello'> Hello</h2>
          <h3 className='intro'>intro</h3>


          <p className='home-intro'>
            Future portfolio. Pellentesque eleifend congue nibh at gravida. 
            Sed sit amet bibendum purus. Praesent dignissim felis sed 
            imperdiet semper. Mauris quis dui varius, congue metus id, 
            lobortis arcu. Mauris auctor mi justo. Nullam eros ante, 
            mollis non rutrum eget, fermentum nec tellus. Aenean porttitor 
            quis mi ut pretium. Aliquam erat volutpat. Open and make changes 
            to <code>src/Home.js</code> and save to reload.
          </p>
        </section>
 
      </div>
    )
  }
}

export default HomePage
