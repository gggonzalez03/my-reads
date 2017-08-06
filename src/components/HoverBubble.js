import React, { Component } from 'react'

class HoverBubble extends Component {

  state = {}

  constructor(props) {
    super(props);
    this.state = {
      width: this.props.width || 50,
      maxHeight: this.props.maxHeight || 40
    };
  }

  componentDidMount = () => {
    const { eventCurrentTarget } = this.props
    const { width, maxHeight } = this.state
    const { x, y } = this.getAbsoluteCoordinate( eventCurrentTarget.offsetLeft, eventCurrentTarget.offsetTop )
    const hoverBubbleDimensions = this.getRelativeDimensions(this.hoverBubbleNode.clientWidth, this.hoverBubbleNode.clientHeight)

    this.setBubblePosition({
      x: x,
      y: y,
      width: width,
      maxHeight: maxHeight,
      topOffset: hoverBubbleDimensions.height
    })
  }

  getAbsoluteCoordinate = ( x, y ) => {

    const points = {
      x: (x-window.pageXOffset)/window.innerWidth*100,
      y: (y-window.pageYOffset)/window.innerHeight*100
    }

    return points
  }

  getRelativeDimensions = ( width, height ) => {

    width = width/window.innerWidth*100
    height = height/window.innerHeight*100

    const dimensions = {
      width: width,
      height: height
    }

    return dimensions
  }

  // Takes coordinates of the parent component
  setBubblePosition = ({ x, y, width=50, maxHeight=40, topOffset=y }) => {
    var top = false;

    //console.log(topOffset, y)

    if (y > maxHeight) { // 40 the max-height of the bubble
      y = topOffset*-1 // Top off set based on Bubble's parent element
      top = true
    }
    else {
      y = 20
    }


    x /= (100/width)
    this.setState({ x: x, y: y, width: width, maxHeight: maxHeight, top: top })
  }

  render() {

    const { children } = this.props

    const { x, y, maxHeight, width, top } = this.state

    // http://leaverou.github.io/bubbly/
    const styles = {
      hoverBubble: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        background: 'white',
        color: 'white',
        opacity: .95,
        borderRadius: '.4em',
        boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
        maxHeight: `${maxHeight}vh`,
        width: `${width}vw`,
        left: `-${x}vw`,
        top: `${y}vh`,
        zIndex: 1
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
  <div className="hover-bubble" style={styles.hoverBubble} ref={(hoverBubbleNode) => { this.hoverBubbleNode = hoverBubbleNode }}>
    {children}
    <div className="hover-bubble-cursor" style={top ? styles.hoverBubbleCursorTop : styles.hoverBubbleCursorBottom}></div>
  </div>
)
  }
}

export default HoverBubble