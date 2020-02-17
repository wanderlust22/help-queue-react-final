import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const NotFound = props => {
    return(
        <div>
            <h1>404 Not Found</h1>
            <p>The page "{props.location.pathname}"" does not exist.</p>
            <Link to='/'>Home</Link>
        </div>
    )
}

NotFound.propTypes = {
    location: PropTypes.object
}

export default NotFound