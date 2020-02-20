import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';

const TicketList = props => {
  return (
    <div>
      <hr/>
      {Object.keys(props.ticketList).map(function(ticketId) {
        var ticket = props.ticketList[ticketId];
        return <Ticket names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        formattedWaitTime={ticket.formattedWaitTime}
        currentRouterPath={props.currentRouterPath}
        key={ticketId}
        ticketId={ticketId}
        onTicketSelection={props.onTicketSelection}
        />;
      })}
    </div>
  );
};

TicketList.propTypes = {
  ticketList: PropTypes.object
};

export default TicketList;