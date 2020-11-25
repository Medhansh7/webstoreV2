import React, { useState } from 'react'
import '../styles/Checkout.css'
import Logo from '../assets/logo.svg'
import { useLocation, useHistory, Redirect } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';


export default function Checkout() {


    let location = useLocation();
    let history = useHistory();
    let price = location.state.value;


    let [company, setCompany] = useState("")
    let [name, setName] = useState("")
    let [mail, setMail] = useState("")
    let [country, setCountry] = useState("")
    let [de, setDe] = useState(false)

    let [payment, setPayment] = useState(false)

    const cli = () => {
        document.getElementById("test").click()
    }



    const handleToggle = () => {
        console.log(company, mail, country)
        if (mail == "something@oracle.com" || country == "aus" || country == "usa" || company == "oracle") {
            history.push('/error')
        }
        if (mail == "") {
            alert("Input a valid email")

        }
        if (country == "") {
            alert("Input a valid country")

        }

        if (company == "") {
            alert("Input a valid company name")

        }
        else {
            setPayment(true)
        }
    }


    const onToken = (token) => {
        if (payment) {

            fetch('/save-stripe-token', {
                method: 'POST',
                body: JSON.stringify(token),
            }).then(response => {
                response.json().then(data => {
                    alert(`We are in business, ${data.email}`);
                });
            });
        }

    }



    return (
        <div>
            {console.log(location)}

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
                                <input type="text" onChange={(e) => {
                                    { setName(e.target.value) }
                                }} className="name" placeholder="Name" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="company" onChange={(e) => {
                                    { setCompany(e.target.value) }
                                }} placeholder="Company Name" required />
                            </div>
                            <div className="form-group">
                                <input type="email" className="e" onChange={(e) => {
                                    { setMail(e.target.value) }
                                }} placeholder="Company Email" required />
                            </div>
                            <div className="form-group">
                                <input type="text" className="add" onChange={(e) => {
                                    { setCountry(e.target.value) }
                                }} placeholder="Country" required />
                            </div>
                        </div>
                        <br /><br />


                        <StripeCheckout

                            amount={price * 100}
                            currency="USD"
                            email={mail}
                            id="stripee"
                            token={onToken}
                            stripeKey="pk_live_lYuLQiMujE3M52na5lbVSeUL00763VynEH"

                        >
                            <button className="btn btn-success" onClick={handleToggle}> Next</button></StripeCheckout>
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
