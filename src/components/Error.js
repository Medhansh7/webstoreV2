import React from 'react'
import Logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export default function Error() {
    return (
        <div>
            < div className="row" >
                <div className="col-md-2">
                    <img className="logoImg" src={Logo} alt="" />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-4 text-center"><button type="button" className="btn headButton ">Contact Us</button></div>
            </ div >
            <div className="row">
                <div className="container">
                    <div className="col text-center">
                        <h3>We have received your purchase request. Our team will shortly contact you with the purchase details. <br /><br />
                            <Link to='/'><button type="button" className="btn btn-success">Go to home page</button></Link>
                        </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}
