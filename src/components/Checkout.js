import React, { useState } from 'react'
import '../styles/Checkout.css'
import Logo from '../assets/logo.svg'
import { Redirect } from 'react-router-dom'

export default function Checkout() {

    let [company, setCompany] = useState("")
    let [mail, setMail] = useState("")
    let [country, setCountry] = useState("")
    let [de, setDe] = useState(true)

    const handleToggle = () => {
        console.log(company, mail, country)
        if (mail == "something@oracle.com" || country == "aus" || country == "usa" || company == "oracle") {
            console.log("Invalid Input")
            // return <Redirect to="/error" />
        }
        else {
            console.log("right credentials")
        }
    }

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
            <div className="container">
                <div className="title">
                    Checkout
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <div className="form">
                            <div className="form-group">
                                <input type="text" className="name" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="company" onChange={(e) => {
                                    { setCompany(e.target.value) }
                                }} placeholder="Company Name" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="e" onChange={(e) => {
                                    { setMail(e.target.value) }
                                }} placeholder="Company Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="add" onChange={(e) => {
                                    { setCountry(e.target.value) }
                                }} placeholder="Country" />
                            </div>
                        </div>
                        <br /><br />
                        <button className="btn btn-success" onClick={handleToggle}> Next</button>
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>


            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="f">© 2020 Genesis Ray .All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
