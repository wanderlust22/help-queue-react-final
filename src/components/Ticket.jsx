import React from 'react'
import PropTypes from 'prop-types'

function Ticket(props){
  return (
    <div>
      <h3 className="location" >{props.location} - {props.names}</h3>
      <p className="issue"><em>{props.issue}</em></p>
      <hr/>
      <style global jsx>{`
        div {
          background-color: gray
        }
      `}</style>
    </div>
  )
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
}

export default Ticket