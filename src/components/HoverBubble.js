import React, { Component } from 'react'

class HoverBubble extends Component {

  state = {}

  componentWillMount = () => {
    const { x, y } = this.props

    this.setBubblePosition(x, y)
  }

  // Takes mouse coordinates
  setBubblePosition = (x, y) => {
    //x = x/200*100
    x = x/2
    this.setState({ x: x })
  }

  render(){

    const { children } = this.props
    const { x, y } = this.state

    const styles = {
      hoverBubble: {
        left: `-${x}vw`
      },
      hoverBubbleCursor: {
        left: `calc(${x}vw + 35px)`
      }
    }

    return (
      <div className="hover-bubble" style={styles.hoverBubble}>
        {children}
        <div className="hover-bubble-cursor" style={styles.hoverBubbleCursor}></div>
      </div>
    )
  }
}

export default HoverBubble