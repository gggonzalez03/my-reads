import React, { Component } from 'react'
import MdStarOutline from 'react-icons/lib/md/star-outline'
import MdStar from 'react-icons/lib/md/star'

class StarRating extends Component {

  state = {}

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

    return (
      <div className="starRating" onMouseLeave={this.exitRating}>
        {starState.map((star) => (
          <span
            key={star.starRate}
            onMouseEnter={() => { this.hoverRating(star.starRate) }}
            onClick={() => { this.selectRating(star.starRate)}}>

            {star.hovered ? <MdStar /> : <MdStarOutline />}
            
          </span>
        ))}
      </div>
    )
  }
}

export default StarRating