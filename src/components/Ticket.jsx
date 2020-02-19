import React from 'react';
import PropTypes from 'prop-types';

const Ticket = props => {
  return (
    <div>
      <h3 className="location" >{props.location} - {props.names}</h3>
      <h4>{props.formattedWaitTime} ago</h4>
      <p className="issue"><em>{props.issue}</em></p>
      <hr/>
      <style jsx>{`
        div {
          background-color: rgba(193, 193, 193, 0.5);
        }
      `}</style>
    </div>
  );
};

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired
};

export default Ticket;