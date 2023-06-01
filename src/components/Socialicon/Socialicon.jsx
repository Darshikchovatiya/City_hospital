import React from 'react'
import {BsFacebook, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'

function Socialicon() {
    return (
        <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter"><BsTwitter /></a>
            <a href="#" className="facebook"><BsFacebook /></a>
            <a href="#" className="instagram"><BsInstagram /></a>
            <a href="#" className="linkedin"><BsLinkedin /></a>
        </div>
    )
}

export default Socialicon