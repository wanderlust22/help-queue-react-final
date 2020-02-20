import React from 'react';
import TicketList from './TicketList';
import Header from './Header';
import NewTicketControl from './NewTicketControl';
import NotFound from './NotFound';
import { Switch, Route } from 'react-router-dom';
import Admin from './Admin';
import { v4 } from 'uuid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTicketList: {},
      selectedTicket: null
    };
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
    this.handleChangingSelectedTicket = this.handleChangingSelectedTicket.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTicketElapsedWaitTime(), 60000
    );
  }

  updateTicketElapsedWaitTime() {
    let newMasterTicketList = this.state.masterTicketList.slice();
    newMasterTicketList.forEach(ticket =>
      ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    );
    this.setState({
      masterTicketList: newMasterTicketList
    });
  }
  
  handleAddingNewTicketToList(newTicket) {
    let newTicketId = v4();
    let newMasterTicketList = Object.assign({}, this.state.masterTicketList,{
      [newTicketId]: newTicket
    });
    newMasterTicketList[newTicket.id].formattedWaitTime = newMasterTicketList[newTicket.id].timeOpen.fromNow(true);
    this.setState({ masterTicketList: newMasterTicketList });
  }

  handleChangingSelectedTicket(ticket){
    this.setState({selectedTicket: ticketId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={() => <TicketList ticketList={this.state.masterTicketList}/> } />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/admin' render={(props) => <Admin ticketList={this.state.masterTicketList} currentRouterPath={props.location.pathname} 
          onTicketSelection={this.handleChangingSelectedTicket} selectedTicket={this.state.selectedTicket} />}
          />
          <Route component={NotFound} />
        </Switch>
        <style global jsx>{`
          div {
            font-family:  Arial, Helvetica, sans-serif;
            font-size: 18px;
          }
        `}</style>
      </div>
    );
  }
}

export default App;