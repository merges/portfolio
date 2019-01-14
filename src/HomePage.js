import _ from 'lodash'
import React, { Component } from 'react'
import Newtongue from '@haiku/thev1sual-newtongue/react'

class HomePage extends Component {
  constructor (props) {
    super (props)

    const textTimeline = [
      'H',
      'He',
      'Hel',
      'Hell',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello.',
      'Hello',
      'Hell',
      'Hel',
      'He',
      'H',
      'H',
      'A',
      'Ah',
      'Aho',
      'Ahoy',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy!',
      'Ahoy',
      'Aho',
      'Ah',
      'A',
      'A',
      'H',
      'Hi',
      'Hi',
      'Hi.',
      'Hi.',
      'Hi.',
      'Hi.',
      'Hi.',
      'Hi.',
      'Hi',
      'H',
      'H',
      'S',
      'Sa',
      'Sal',
      'Salu',
      'Salut',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut.',
      'Salut',
      'Salu',
      'Sal',
      'Sa',
      'S',
      'S',
      'O',
      'Oi',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi.',
      'Oi',
      'O',
      'O',
    ]
    let activeIndex = 0
    this.state = {
      currentGreeting: textTimeline[0]
    }
    setInterval(() => {
      activeIndex = activeIndex + 1
      if(activeIndex >= textTimeline.length){
        //loop it
        activeIndex = 0
      }
      // console.log(textTimeline[activeIndex])
      this.mounted && this.setState({ currentGreeting: textTimeline[activeIndex] })
      //instead of console.log, use React's setState — then in your function welcomeGreeeting, return this state instead of its current "choose a random language" logic
    }, 100)
  }

  componentDidMount () {
    this.mounted = true
  }

  componentWillUnmount () {
    this.mounted = false
  }

  navigateToPastClients = () => {
    this.props.history.push('/pastclients')
  }

  navigateToHome = () => {
    this.props.history.push('/')
  }

  // This home page component knows about this.props.clients
  //
  // Tip from Adam:
  // Arrays (i.e. assets = ['item', 'item', 'item'] can be mapped over like we do for assets on the DisplayZone)
  // Objects (i.e. clients = {skully: {}, adobe: {}, microsoft: {}} cannot be)
  // so look on Google for questions like "how do I map over an object in JavaScript"
  render () {
    const { clients } = this.props
    const homeClassName = 'home'
    const gridClassName = 'pastworkgrid'
    const gridLogoClassName = 'gridlogo'

    const welcomeGreeting = () => {
      const greetingsList = ['Welcome', 'Yello', 'Ahoy!', 'Salut.']
      const greetingChoice = Math.floor(Math.random()*4)
      return greetingsList[greetingChoice]
    }

    return (
      <div className={homeClassName}>
        <section className='home-header'> 
          <div onClick={this.navigateToHome} className='column1'>
            <h1>
              <div style={{width: "49px", height: "49px"}}>
                <Newtongue haikuOptions={{loop: false, sizing: 'cover'}} />
              </div>
            </h1>
          </div>

          
          <div className='column2'>
            <div className='contact-items'>
              <div className='contact-item'>
                <div>email:</div>
                <div className="email-link"><a href="mailto:jeff@thevisual.work">jeff@thevisual.work</a></div>
              </div>
            
              <div className='contact-item'>
                <div>linkedin:</div>
                <div className="linkedin-link"><a href="https://www.linkedin.com/in/jeff-munar-65836419/?locale=en_US">linkedin.com/jeff-munar</a></div>
              </div>
            </div>
          </div>
        </section>

        <section className='introsection'>
        
          <span className='greeting'>{this.state.currentGreeting}</span><span className='blinkingcursor'>_</span>
          
          
          <h3 className='intro animated fadeInDown'>Intro</h3>


          <p className='home-intro'>
            I’m Jeff Munar, an independent creative specializing in brand
            identity, art direction and design. I reside in San Francisco
            where I’m currently making sense of pixels, garment pod systems
            and digitizing the dandy.
          </p>

          <div className='recent'>
            <h3 className='animated fadeInDown' >Recent Work</h3>
            {
              _.keys(clients).map((clientName, i) => {
                const client = clients[clientName]
                if (client.recent === true && client.protected === false) {
                  return <a key={i} href={'/client/' + clientName} className='currentClientLink clientLink'>{client.name}</a>
                }
                else if (client.recent === true && client.protected === true) {
                  return <a key={i} href={'/client/' + clientName} className='currentClientLink clientLink clientProtected'>{client.name}</a>
                }
                return null
              })
            }
          </div>
          
          <div className='past animated fadeInDown'>
            <h3>
              Past Clients
            </h3>
            <a onClick={this.navigateToPastClients} className='clientLink'>View Client List</a>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage
