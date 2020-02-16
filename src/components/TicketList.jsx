import React from 'react'
import Ticket from './Ticket'
import PropTypes from 'prop-types'

const TicketList = props => {
  return (
    <div>
      <hr/>
      {props.ticketList.map((ticket, index) =>
        <Ticket
          location={ticket.location}
          names={ticket.names}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  )
}

TicketList.propTypes = {
  ticketList: PropTypes.array
}

export default TicketList