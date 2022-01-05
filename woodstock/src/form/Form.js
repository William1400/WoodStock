import React from 'react'
import './Form.css'

export default function Form() {

    const title = 'Contact Us'

    return (

        <div className="form">
            <div className='title'>
                <h2>{title}</h2>
            </div>
            <form>
                <div className='name-style'>
                    <div>
                        <input className="form-control" name="firstname" type="text" placeholder="first name" required />
                    </div>
                    <div>
                        <input className="form-control" name="firstname" type="text" placeholder="last name" required />
                    </div>
                </div>
                <div className='email'>
                    <input className="form-control" name="email" type="email" placeholder="mail adress" required /><br />
                </div>
                <div className='message'>
                    <textarea className="form-control-message" name="message" type="text" placeholder="message" rows={4} maxLength={500} required /><br />
                </div>
            </form>
        </div>
    )
}
