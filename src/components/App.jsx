import React from 'react'
import TicketList from './TicketList'
import Header from './Header'
import NewTicketForm from './NewTicketForm'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/newticket' component={NewTicketForm} />
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

export default App