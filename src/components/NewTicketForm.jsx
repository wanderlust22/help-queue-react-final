import React from 'react'

const NewTicketForm = () => {
    return (
        <div className="form-container">
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
                <button type='submit'>Help!</button>
            </form>
            <style jsx>{`
                .form-container {
                    margin: 30px;
                }

                form, input, textarea, button {
                    border-radius: 4px;
                }

                form {
                    width: 80%;
                    padding: 30px;
                    border: 1px solid #efefef;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                }

                input, textarea, button {
                    width: 50%;
                    font-size: 18px;
                    margin: 0 auto;
                    margin-bottom: 30px;
                }

                textarea {
                    height: 5em;
                }

                button {
                    width: 20%;
                    height: 40px;
                }
            `}</style>
        </div>
    )
}

export default NewTicketForm