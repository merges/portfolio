import React, { Component } from 'react'
import isMobile from 'is-mobile';

import LogInBox from './LogInBox'
import Newtongue from '@haiku/thev1sual-newtongue/react'
import { canUserViewPastClients } from './utilities'

function AccurateInterval (duration, callback) {
  this.baseline = undefined
  
  this.run = () => {
    if (this.baseline === undefined) {
      this.baseline = new Date().getTime()
    }
    callback()

    var end = new Date().getTime()
    this.baseline += duration
 
    var nextTick = duration - (end - this.baseline)
    if (nextTick < 0) {
      nextTick = 0
    }
    ((i) => {
        i.timer = setTimeout(() => {
        i.run(end)
      }, nextTick)
    })(this)
  }

  this.stop = () => {
    clearTimeout(this.timer)
  }
}

class PastClientsPage extends Component {
  constructor (props) {
    super (props)

    this.state = {
      allTriggerAssets: this.getTriggerAssets(props.clients),
      pastWorkVisible: true,
      triggerIndex: 0,
      startTriggerOn: 'adobe',
      timerRunning: false,
      readyToRenderTrigger: false,
      width: null,
      height: null,
    }
  }

  componentWillMount () {
    if (isMobile()) {
      this.setState({
        isMobile: true,
        triggerVisible: true,
      })
    }
  }

  componentDidMount () {
    if (!this.state.isMobile) {
      this.getWindowSize()
      this.getTriggerAssetDimensions()
      window.addEventListener('resize', this.getWindowSize.bind(this))
    }
  }

  componentWillUnmount () {
    if (!this.state.isMobile) {
      window.removeEventListener('resize', this.getWindowSize.bind(this))
      this.timer = null
    }
  }

  restartTimer = () => {
    const timerSpeed = 190

    // Restart timer
    if (this.timer) {
      this.timer.stop()
    }

    // Hook up & run timer
    var index = 0
    this.timer = new AccurateInterval(timerSpeed, () => {
      this.setState({
        triggerIndex: index % this.state.allTriggerAssets.length
      })
      index++
    })
    this.timer.run()
  }

  showPastWork = () => {
    //showPastWork changes pastWorkVisible to be true.
    this.setState({
      pastWorkVisible: true
    })
  }

  hideLogInBox = () => {
    this.setState({
      logInPrompt: false,
    })
  }

  activateTrigger = (clientName) => {
    this.setState({
      triggerVisible: true,
      startTriggerOn: clientName,
    })
    this.restartTimer()
  }

  deactivateTrigger = () => {
    if (this.timer) {
      this.timer.stop()
    }

    this.setState({
      triggerVisible: false,
      startTriggerOn: 'adobe',
      triggerIndex: 0,
    })
  }

  navigateToHome = () => {
    this.props.history.push('/')
  }

  navigateToClient = (clientName) => {
    this.deactivateTrigger()
    this.props.history.push('/client/' + clientName)
  }

  handlePastClientClick = (clientName) => {
    this.setState({
      whichClient: clientName
    })

    // IF the user is logged in already, just go to the client page
    if (canUserViewPastClients()) {
      this.navigateToClient(clientName)
    }
    else {
      this.showLogInPrompt()
    }
  }

  showLogInPrompt = () => {
    this.setState({
      logInPrompt: true,
    })
  }

  getWindowSize = () => {
    this.setState({
      width: window.innerWidth,
      height: window.innerHeight,
    }, this.getTriggerAssetDimensions())
  }

  setImageSize = (imageWidth, imageHeight) => {
    const windowWidth = this.state.width 
    const windowHeight = this.state.height

    const windowRatio = windowWidth / windowHeight
    const imageRatio = imageWidth / imageHeight

    if (imageRatio >= windowRatio) {
      return {
        height: windowHeight,
        width: windowHeight * imageRatio,
      }
    }
    if (imageRatio <= windowRatio) {
      return {
        width: windowWidth,
        height: windowWidth / imageRatio,
      }
    }
  }

  getTriggerAssets = (clients) => {
    // Set up a list of assets which we'll eventually cycle through
    const allTriggerAssets = []

    // Put all client's assets in the list
    Object.keys(clients).forEach(clientName => {
      // If the current client is a recent client, don't bother getting its trigger assets
      if (clients[clientName].recent === true) {
        return
      }
      // Otherwise, we want the client's trigger assets
      else {
        // Go through the current client's trigger assets,
        // and add them into the allTriggerAssets list
        const currentClientTriggerAssets = clients[clientName].trigger
        currentClientTriggerAssets.forEach(asset => {
          allTriggerAssets.push(asset)
        })
      }
    })

    return allTriggerAssets
  }

  getTriggerAssetDimensions = () => {
    const assetDimensions = {}
    this.state.allTriggerAssets.forEach(assetName => {
      assetDimensions[assetName] = {}
      var asset
      if (assetName.includes('png') || assetName.includes('gif') || assetName.includes('jpg')) {
        asset = new Image()
      }
      if (assetName.includes('mp4') || assetName.includes('mov')) {
        asset = document.createElement('video')
      }
      asset.src = '../assets/' + assetName
      asset.onload = () => {
        const size = this.setImageSize(asset.naturalWidth, asset.naturalHeight)
        assetDimensions[assetName] = {
          width: size.width,
          height: size.height,
        }
      }
    })

    this.setState({
      assetDimensions: assetDimensions,
      readyToRenderTrigger: true
    })
  }

  renderTrigger = () => {
    // Set up a list of assets which we'll eventually cycle through
    const allTriggerAssets = []

    // Get the starting client's trigger assets
    const startingClientName = this.state.startTriggerOn || this.props.clients[0][Object.keys(this.props.clients)[0]]
    const startingClientTriggerAssets = this.props.clients[startingClientName].trigger

    // Go through the starting client's trigger assets,
    // and put them into the allTriggerAssets list (at the beginning of that list)
    startingClientTriggerAssets.forEach(asset => {
      allTriggerAssets.push(asset)
    })

    // Put all the other client's assets in the list
    Object.keys(this.props.clients).forEach(clientName => {
      // If the current client (in the forEach loop) is the starting client
      // -or-
      // if the current client is a recent client, don't bother getting its trigger assets
      if (clientName === startingClientName || this.props.clients[clientName].recent === true) {
        return
      }
      // Otherwise, we want the client's trigger assets
      else {
        // Go through the current client's trigger assets,
        // and add them into the allTriggerAssets list
        const currentClientTriggerAssets = this.props.clients[clientName].trigger
        currentClientTriggerAssets.forEach(assetName => {
          allTriggerAssets.push(assetName)
        })
      }
    })

    let triggerStyle = {
      visibility: 'hidden',
    }
    if (this.state.triggerVisible === true) {
      triggerStyle = {
        visibility: 'visible',
      }
    }

    return (
      <div key={name} style={triggerStyle} className='trigger-background'>
        {allTriggerAssets.map((assetName, i) => {
          const width = this.state.assetDimensions[assetName].width
          const height = this.state.assetDimensions[assetName].height
          
          // Normally, we style the asset as hidden
          let assetStyle = {
            visibility: 'hidden',
          }
          // If it's the "current" one in the triggerIndex, it’s briefly made visible
          if (this.state.triggerVisible && i === this.state.triggerIndex) {
            assetStyle = {
              visibility: 'visible',
            }
          }

          if (assetName.includes('png') || assetName.includes('gif') || assetName.includes('jpg')) {
            return (
              <img
                key={assetName}
                style={assetStyle}
                src={'../assets/' + assetName}
                width={width}
                height={height}
                role='presentation'
              />
            )
          }
          if (assetName.includes('mp4') || assetName.includes('mov')) {
            return (
              <div
                key={assetName}
                style={assetStyle}>
                <video autoPlay='autoplay' muted loop='loop' preload='auto' width={width} height={height}>
                  <source src={'../../assets/' + assetName} />
                </video>
              </div>
            )
          }
          else {
            return null
          }
        })}
        <div className='trigger-overlay'></div>
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
    var homeClassName = 'home'
    var gridClassName = 'grid'
    var gridLogoClassName = 'gridlogo'
    
    if (this.state.triggerVisible === true) {
      homeClassName = 'home trigger-visible'
      gridClassName = 'grid trigger-visible'
      gridLogoClassName = 'gridlogo trigger-visible'
    }

    const { clients } = this.props
    const { whichClient } = this.state

    return (
      <div className={homeClassName}>
        <section className='home-header'> 
          <div className='column1'>
            <h1><a onClick={this.navigateToHome}>
            <div style={{width: "49px", height: "49px"}}>
                <Newtongue haikuOptions={{loop: false, sizing: 'cover'}} />
              </div></a></h1>
          </div> 
          
          <div className='column2'>
            <div className='contact-items'>
              <div className='contact-item'>
                <div>email:</div>
                <div>jeff@thevisual.work</div>
              </div>      
              <div className='contact-item'>
                <div>linkedin:</div>
                <div>linkedin.com/jeffmunar</div>
              </div>
            </div>
          </div>
        </section>

        {this.state.logInPrompt === true &&
          <LogInBox
            client={clients[whichClient]}
            onCorrectPassword={() => this.navigateToClient(whichClient)}
            onHideLogInBox={this.hideLogInBox}
          />
        }

        {this.state.pastWorkVisible === true &&
          <div className='center-vertical'>
            <section className={gridClassName}>
              <div className='gridcontainer'>
                {
                  Object.keys(this.props.clients).map((clientName, i) => {
                    const currentClient = this.props.clients[clientName]

                    const max = 1500
                    const min = 820
                    const randomDelay = Math.floor(Math.random() * (max - min)) + min
                    const randomFadeStyle = {
                      transitionDelay: (this.state.triggerVisible === true ? randomDelay.toString() : '0') + 'ms'
                    }
                    
                    if (currentClient.recent === false) {
                      return (
                        <a
                          className={gridLogoClassName + ' ' + clientName}
                          key={i}
                          onClick={() => this.handlePastClientClick(clientName)}
                          style={{ cursor: 'pointer' }}
                        > 
                          <div>
                            <img
                              style={clientName !== this.state.startTriggerOn ? randomFadeStyle : null}
                              onMouseEnter={() => !this.state.isMobile && this.activateTrigger(clientName)}
                              onMouseLeave={() => !this.state.isMobile && this.deactivateTrigger()}
                              src={'../assets/' + currentClient.logo}
                              role='presentation'
                            />
                          </div>
                        </a>
                      )
                    }
                    // If it’s not recent, we still need to return something (.map requires that)
                    // so we return <noscript /> which is a special way of saying,
                    // return NOTHING
                    return null
                  })
                }
              </div>
            </section>
          </div>
        }

        {this.state.isMobile &&
          <div className='trigger-mobile'>
            <div className='darkoverlay'></div>
          </div>
        }
        
        {this.state.readyToRenderTrigger && this.renderTrigger()}
      </div>
    )
  }
}

export default PastClientsPage
