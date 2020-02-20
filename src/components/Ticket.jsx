import React from 'react';
import PropTypes from 'prop-types';

const Ticket = (props) => {
  const ticketInformation = 
    <div>
      <h3 className="location" >{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <hr/>
      <style jsx>{`
        div {
          background-color: rgba(193, 193, 193, 0.5);
        }
      `}</style>
    </div>;
    if (props.currentRouterPath === '/admin'){
      return (
        <div onClick={() => {props.onTicketSelection(props.ticketId);}}>
          {ticketInformation}
        </div>
      );
    } else {
      return(
        <div>
          {ticketInformation}
        </div>
      );
    }
};

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  onTicketSelection: PropTypes.func,
  ticketId: PropTypes.string.isRequired
};

export default Ticket;