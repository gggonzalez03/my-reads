import React, { Component } from 'react'

class HoverBubble extends Component {

  state = {}

  componentWillMount = () => {
    const { x, y } = this.props

    this.setBubblePosition(x, y)
  }

  // Takes mouse coordinates
  setBubblePosition = (x, y) => {
    var top = false;
    if (y > 40) { // 40 the max-height of the bubble
      y = -190 // Top off set based on Bubble's parent element
      top = true
    }
    else {
      y = 102.5
    }


    x /= 2
    this.setState({ x: x, y: y, top: top })
  }

  render() {

    const { children } = this.props

    const { x, y, top } = this.state

    const styles = {
      hoverBubble: {
        left: `-${x}vw`,
        top: `${y}%`
      },
      hoverBubbleCursorBottom: {
        position: 'absolute',
        top: 0,
        left: `calc(${x}vw + 35px)`,
        width: 0,
        height: 0,
        border: '10px solid transparent',
        borderBottomColor: '#56d39f',
        borderTop: 0,
        marginLeft: '-10px',
        marginTop: '-10px'
      },
      hoverBubbleCursorTop: {
        position: 'absolute',
        bottom: 0,
        left: `calc(${x}vw + 35px)`,
        width: 0,
        height: 0,
        border: '10px solid transparent',
        borderTopColor: '#36404c',
        borderBottom: 0,
        marginLeft: '-10px',
        marginBottom: '-10px'
  }
}

return (
  <div className="hover-bubble" style={styles.hoverBubble}>
    {children}
    <div className="hover-bubble-cursor" style={top ? styles.hoverBubbleCursorTop : styles.hoverBubbleCursorBottom}></div>
  </div>
)
  }
}

export default HoverBubble