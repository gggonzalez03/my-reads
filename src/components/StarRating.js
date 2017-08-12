import React, { Component } from 'react'
import MdStarOutline from 'react-icons/lib/md/star-outline'
import MdStar from 'react-icons/lib/md/star'

class StarRating extends Component {

  state = {}

  constructor(props) {
    super()
    this.state = {
      hoveredRating: props.initialSelectedRating || 0,
      selectedRating: props.initialSelectedRating || 0
    }
  }

  hoverRating = (rating) => {
    this.setState({
      hoveredRating: rating
    })
  }

  exitRating = () => {
    this.hoverRating(this.state.selectedRating)
  }

  selectRating = (rating) => {
    this.setState({
      selectedRating: rating
    })

    this.props.onSelectRating(rating) != null && this.props.onSelectRating(rating)
  }

  clearRating = () => {
    this.setState({
      selectedRating: 0,
      hoveredRating: 0
    })

    this.props.onClearRating() != null && this.props.onClearRating()
  }

  render() {

    let starState = Array(5).fill().map((_, index) => {
      
      let hovered = false;

      if (index+1 <= this.state.hoveredRating)
        hovered = true
      else
        hovered = false

      return {
        starRate: index+1,
        hovered: hovered
      }
    })

    const styles = {
      clearRating: {
        display: 'block',
        fontSize: '12px',
        cursor: 'pointer'
      }
    }

    return (
      <div>
        <div onMouseLeave={this.exitRating}>
          {starState.map((star) => (
            <span
              key={star.starRate}
              onMouseEnter={() => { this.hoverRating(star.starRate) }}
              onClick={() => { this.selectRating(star.starRate)}}>

              {star.hovered ? <MdStar /> : <MdStarOutline />}

            </span>
          ))}
        </div>
        <a style={styles.clearRating} onClick={() => {this.clearRating()}}>clear rating</a>
      </div>
    )
  }
}

export default StarRating