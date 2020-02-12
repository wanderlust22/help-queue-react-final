import React from 'react'

const NewTicketForm = () => {
    return (
        <div>
            <form>
                <input
                    type='text'
                    id='names'
                    placeholder='Pair Names' />
                <input
                    type='text'
                    id='location'
                    placeholder='Loaction' />
                <textarea
                    id='issude'
                    placeholder='Describe your issue.' />
                <button type='submit'>Help!!!!</button>
            </form>
        </div>
    )
}

export default NewTicketForm