import React, { Component } from 'react'

class HomePage extends Component {
  constructor () {
    super ()

    console.log('constructor')

    this.state = {
      pastWorkVisible: false,
      triggerIndex: 0,
      width: null,
      height: null,
    }

    console.log('initial state:', this.state)
  }

  componentDidMount () {
    // HomePage component has been loaded, showing up on screen.
    // Now we can check things like how big the window is
    console.log('componentDidMount')
    this.getWindowSize()
    this.getTriggerAssetDimensions()
    window.addEventListener('resize', this.getWindowSize.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.getWindowSize.bind(this))
  }

  showPastWork () {
    //showPastWork changes pastWorkVisible to be true.
    this.setState({
      pastWorkVisible: true
    })
  }

  hidePastWork () {
    //homepageBackButton brings you back to the homepage.
    this.setState({
      pastWorkVisible: false
    })
  }

  getWindowSize () {
    console.log('getWindowSize()')
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }

  setImageSize (imageWidth, imageHeight) {
    // The purpose of this function is to decide
    // whether to make an image stretch to the full height of the window
    // or the full width of the window, depending on the situation

    // WE NEED
    // A. Window width
    // B. Window height
    // C. Image width
    // D. Image height

    // TO DO
    // 1. Calculate aspect ratio of window
    // 2. Calculate aspect ratio of image

    // If the aspect ratio of the image is greater than
    // the aspect ratio of the window, it would normally be letterboxed
    // (e.g. 16:9 image on regular computer screen)
    // in that case, we want to set the height of the image
    // to be the height of the window—that way the sides get cropped off

    // In the other case, where the aspect ratio of the image
    // is less than the aspect ratio of the window, it would normally
    // have bars on the left and right
    // (e.g. portrait image on widescreen computer screen)
    // in that case, we want to set the width of the image
    // to be the width of the window—that way the top and bottom
    // get cropped off
    
    
    // When this function is called, it gets 2 arguments:
    // imageWidth, imageHeight
    // These come from the actual dimensions of the image
    // and are required for us to run this function
    // e.g. setImageSize(1600, 850)
    // so...
    //      imageWidth === 1600
    //      imageHeight === 850
    
    const windowWidth = this.state.width 
    const windowHeight = this.state.height

    const windowRatio = windowWidth / windowHeight
    const imageRatio = imageWidth / imageHeight

    console.log('---------SIZES-----------')
    console.log('window', windowWidth, windowHeight, windowRatio)
    console.log('image', imageWidth, imageHeight, imageRatio)
    console.log('-------------------------')

    // This function now needs to return the correct style
    // for the image (e.g. width, height) based on the calculations
    //
    // In React, we can spit out a mini-CSS style that looks like this:
    // {
    //   width: 1600
    // }
    //
    // or
    //
    // {
    //   height: 850
    // }
    //
    // This is what the image "asks for" when it calls this function
    // for its "style" prop
    // e.g. <img style={this.setImageSize(1600, 850)}
    //
    // In other words, the image is asking for a style object from this
    // function, based on its size.
    //
    // When the image asks, this function returns the actual style
    // so...
    // <img style={this.setImageSize(1600, 850)}
    //   is replaced by
    // <img style={{width: 2500}} (or whatever the correct style is)

    if (imageRatio >= windowRatio) {
      console.log('expand height to browser')
      return {
        height: windowHeight,
        width: windowHeight * imageRatio,
      }
    }
    if (imageRatio <= windowRatio) {
      console.log('expand img width to edge')
      return {
        width: windowWidth,
        height: windowWidth / imageRatio,
      }
    }
  }

  getTriggerAssetDimensions () {
    const assets = this.props.triggerAssets
    
    // Loop through all the assets,
    // load them,
    // and record their height and width
    //
    // Ths uses the asset list to build an object which looks roughly like this:
    // assetDimensions = {
    //   'trig.1.crisis3.jpg': {
    //     width: 1977,
    //     height: 1310,
    //   },
    //   'trig.1.bp1.jpg' : {
    //     width: 1811,
    //     height: 1100,
    //   }
    // }

    const assetDimensions = {}
    assets.forEach(assetName => {
      assetDimensions[assetName] = {}
      
      let asset = new Image()
      asset.src = '../assets/' + assetName
      asset.onload = () => {
        assetDimensions[assetName] = {
          width: asset.naturalWidth,
          height: asset.naturalHeight,
        }
      }
    })

    this.setState({
      assetDimensions: assetDimensions,
      readyToRenderTrigger: true,
    })
  }

  renderTrigger () {
    const assets = this.props.triggerAssets
    const assetDimensions = this.state.assetDimensions
    const index = this.state.triggerIndex
    
    // Asset details (name, dimensions)
    const name = assets[index]
    const width = assetDimensions[assets[index]].width
    const height = assetDimensions[assets[index]].height

    // Timer that updates the triggerIndex (position in trigger asset list)
    // (i.e. which image to display)
    // This goes up by 1 every XXX milliseconds,
    // Look up % (modulo)
    if (!this.state.timerRunning) {
      this.setState({
        timerRunning: true
      })
    }

    const timerSpeed = 300 // in milliseconds
    setTimeout(() => {
      this.setState({
        triggerIndex: (this.state.triggerIndex + 1) % this.props.triggerAssets.length
      })
    }, timerSpeed)

    // Render out the image at triggerAssets[index]
    return (
      <div className='backgroundPosition'>
        <img
          src={'../assets/' + name}
          style={this.setImageSize(width, height)}
        />
      </div>
    )
  }

  // This home page component knows about this.props.clients
  //
  // Tip from Adam:
  // Arrays (i.e. assets = ['item', 'item', 'item'] can be mapped over like we do for assets on the DisplayZone)
  // Objects (i.e. clients = {skully: {}, adobe: {}, microsoft: {}} cannot be)
  // so look on Google for questions like "how do I map over an object in JavaScript"
  render () {
    console.log('render', this.state)

    return (
      <div className='home'>
        <section className='home-header'> 
          <div className='column1'>
            <h1>J</h1>
          </div>
          
          <div className='column2'>
            <div className='contact-items'>
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
        </section>

        {
          this.state.pastWorkVisible === false &&
            <section className='introsection'>
              <h2 className='hello'> Hello</h2>
              <h3 className='intro'>Intro</h3>


              <p className='home-intro'>
                Future portfolio. Pellentesque eleifend congue nibh at gravida. 
                Sed sit amet bibendum purus. Praesent dignissim felis sed 
                imperdiet semper. Mauris quis dui varius, congue metus id, 
                lobortis arcu. Mauris auctor mi justo. Nullam eros ante, 
                mollis non rutrum eget, fermentum nec tellus. Aenean porttitor 
                quis mi ut pretium. Aliquam erat volutpat. Open and make changes 
                to <code>src/Home.js</code> and save to reload.
              </p>

              <div className='recent'>
                <h3>Recent Work</h3>
                {
                  Object.keys(this.props.clients).map((clientName, i) => {
                    const currentClient = this.props.clients[clientName]
                    // console.log('current client is:')
                    // console.log(currentClient)

                    if (currentClient.recent === true) {
                      return (
                        <a key={i} href={'/client/' + clientName}>{currentClient.name}</a>
                      )
                    }
                    // If it’s not recent, we still need to return something (.map requires that)
                    // so we return <noscript /> which is a special way of saying,
                    // return NOTHING
                    return <noscript key={i} />
                  })
                }
              </div>
              
              <div className='past'>
                <h3 onClick={() => this.showPastWork()}>
                  Past Clients
                </h3>
              </div>
             
            </section>
        }

        {
          this.state.pastWorkVisible === true &&
            <section className='pastworkgrid'>
              {this.state.readyToRenderTrigger && this.renderTrigger()}
              <div className='gridcontainer'>
                {
                  Object.keys(this.props.clients).map((clientName, i) => {
                    const currentClient = this.props.clients[clientName]
                    // console.log('current client is:')
                    // console.log(currentClient)

                    // currentClient = {
                    //   name: 'Google Maps',
                    //   description: 'Google Maps client description',
                    //   recent: false,
                    //   logo: 'wta.logo.svg',
                    //   assets: [],
                    // },

                    // read about variables, loops, maps in javascript

                    if (currentClient.recent === false) {
                      return (
                        <a className={'gridlogo ' + clientName} key={i} href={'/client/' + clientName}>
                          <div>
                            <img src={'../assets/' + currentClient.logo} role='presentation' />
                          </div>
                        </a>
                      )
                    }
                    // If it’s not recent, we still need to return something (.map requires that)
                    // so we return <noscript /> which is a special way of saying,
                    // return NOTHING
                    return <noscript />
                  })
                }
              </div>
              
              <a href='#' onClick={() => this.hidePastWork()}>back</a>
            </section>
        }


      </div>
    )
  }
}

export default HomePage
