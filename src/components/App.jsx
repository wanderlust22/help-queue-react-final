import React from 'react'
import TicketList from './TicketList'
import Header from './Header'
import NewTicketControl from './NewTicketControl'
import NotFound from './NotFound'
import { Switch, Route } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      masterTicketList: []
    }
    this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this)
  }

  handleAddingNewTicketToList(newTicket) {
    let newMasterTicketList = this.state.masterTicketList.slice()
    newMasterTicketList.push(newTicket)
    this.setState({ masterTicketList: newMasterTicketList })
  }
  render(){
    return (
      <div>
        <Header/>
        <Switch>
        <Route exact path='/' render={() => <TicketList ticketList={this.state.masterTicketList}/> } />
          <Route path='/newticket' render={() => <NewTicketControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route component={NotFound} />
        </Switch>
        <style global jsx>{`
          div {
            font-family:  Arial, Helvetica, sans-serif;
            font-size: 18px;
          }
        `}</style>
      </div>
    )
  }
}

export default App