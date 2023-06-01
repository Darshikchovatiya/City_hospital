import React from 'react'
import Socialicon from '../Socialicon/Socialicon'
import { BsEnvelope, BsPhone } from 'react-icons/bs'

function Topbar() {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <BsEnvelope/><a href="mailto:contact@example.com">cityhospital@example.com</a>
                    <BsPhone /> +91 9988776655
                </div>
                <Socialicon />
        </div>
    </div>
  )
}

export default Topbar