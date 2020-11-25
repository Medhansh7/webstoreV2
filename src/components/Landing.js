import React, { useState } from 'react'
import "../styles/Landing.css"
import Logo from '../assets/logo.svg'
import ReactTooltip from "react-tooltip";
import check from "../assets/check.svg"
import Select from 'react-select';
import { Link } from "react-router-dom";
import product from '../assets/product.svg';



export default function Landing() {

    const [newPrice, setPrice] = useState("Select a subscription type")


    const [basicPrice, setBasicPrice] = useState({ value: 0 })
    const [monthPriceList, setMonthPriceList] = useState({ value: "Select a subscription type", label: 'Select a subscription type' })

    const [standardPrice, setStandardPrice] = useState({ value: 0 })
    const [monthSPriceList, setMonthSPriceList] = useState({ value: "Select a subscription type", label: 'Select a subscription type' })

    const [premiumPrice, setPremiumPrice] = useState({ value: 0 })
    const [monthPPriceList, setMonthPPriceList] = useState({ value: "Select a subscription type", label: 'Select a subscription type' })

    let price = {
        basicMonthly: [
            { value: 0, label: 'Select Country', isDisabled: true },
            { value: 100, label: 'India' },
            { value: 300, label: 'South East Asia' },
            { value: 600, label: 'Singapore' }],

        basicYearly: [
            { value: 0, label: 'Select Country', isDisabled: true },
            { value: 80, label: 'India' },
            { value: 700, label: 'South East Asia' },
            { value: 500, label: 'Singapore' }],

        standardMonthly: [
            { value: 0, label: 'Select Country', isDisabled: true },
            { value: 120, label: 'India' },
            { value: 350, label: 'South East Asia' },
            { value: 680, label: 'Singapore' }],
        standardYearly: [
            { value: 0, label: 'Select Country', isDisabled: true },
            { value: 110, label: 'India' },
            { value: 330, label: 'South East Asia' },
            { value: 660, label: 'Singapore' }],

        premiumMonthly: [
            { value: 0, label: 'Select Country', isDisabled: true },
            { value: 150, label: 'India' },
            { value: 400, label: 'South East Asia' },
            { value: 720, label: 'Singapore' }],
        premiumYearly: [
            { value: 0, label: 'Select Country', isDisabled: true },
            { value: 140, label: 'India' },
            { value: 380, label: 'South East Asia' },
            { value: 700, label: 'Singapore' }],

        basic: {

            featureList: [
                { f: "feature1" },
                { f: "feature2" },
                { f: "feature3" },
                { f: "feature4" },
                { f: "feature5" },
                { f: "feature6" },
                { f: "feature7" }
            ]
            ,
            feature: [
                { basic: "feature1" },
                { basic: "feature2" },
                { basic: "feature3" },

                { standard: "feature1" },
                { standard: "feature2" },
                { standard: "feature3" },
                { standard: "feature4" },

                { premium: "feature1" },
                { premium: "feature2" },
                { premium: "feature3" },
                { premium: "feature4" },
                { premium: "feature5" },
                { premium: "feature6" },
                { premium: "feature7" }
            ]
        }
    }


    const setMonthPrice = () => {
        // let p = price.monthly.map(e => e.general)

        if (basicPrice.value !== 0) {
            const newValue = basicPrice.label;
            price.basicMonthly.map(e => {
                if (e.label === newValue) {
                    setBasicPrice(e)
                }
            })
        }

        if (standardPrice.value !== 0) {
            const newValue = standardPrice.label;
            price.standardMonthly.map(e => {
                if (e.label === newValue) {
                    setStandardPrice(e)
                }
            })
        }

        if (premiumPrice.value !== 0) {
            const newValue = premiumPrice.label;
            price.premiumMonthly.map(e => {
                if (e.label === newValue) {
                    setPremiumPrice(e)
                }
            })
        }

        let p = price.premiumMonthly;
        let base = price.basicMonthly;
        let stan = price.standardMonthly;
        setMonthSPriceList(stan)
        setMonthPriceList(base)
        setMonthPPriceList(p)

        // setPrice(p)
    }


    const setYearPrice = () => {
        // let p = price.yearly.map(e => e.general)
        if (basicPrice.value !== 0) {
            const newValue = basicPrice.label;
            price.basicYearly.map(e => {
                if (e.label === newValue) {
                    setBasicPrice(e)
                }
            })
        }

        if (standardPrice.value !== 0) {
            const newValue = standardPrice.label;
            price.standardYearly.map(e => {
                if (e.label === newValue) {
                    setStandardPrice(e)
                }
            })
        }

        if (premiumPrice.value !== 0) {
            const newValue = premiumPrice.label;
            price.premiumYearly.map(e => {
                if (e.label === newValue) {
                    setPremiumPrice(e)
                }
            })
        }


        let base = price.basicYearly;
        let stan = price.standardYearly;
        let p = price.premiumYearly;
        setMonthSPriceList(stan)
        setMonthPriceList(base)
        setMonthPPriceList(p)
        // console.log(p)
        // setPrice(p)
    }
    const handleMonthChange = (e) => {
        setBasicPrice(e)

    }
    const handleSMonthChange = (e) => {
        setStandardPrice(e);
    }

    const handlePMonthChange = (e) => {
        setPremiumPrice(e)
    }

    return (
        <div>
            {/* header */}

            < div className="row" >
                <div className="col-md-2">
                    <img className="logoImg" src={Logo} alt="" />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-3"></div>
                <div className="col-md-4 text-center"><button type="button" className="btn headButton ">Contact Us</button></div>
            </ div >



            {/* product description */}

            {/* <div className="row">
                <div className="container">
                    <div className="col-md-6">
                        <img src={product} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h4>GEN Ray Explorer <br /></h4>
                    </div>
                </div>
            </div> */}

            <div className="container">
                <div className="row " >
                    <div className="col-md-4"></div>
                    <div className="col-md-4 "><h3>GenRay Explorer Pricing</h3></div>
                    <div className="col-md-4"></div>
                </div>
            </div>

            < div className="row subs" >
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center ">Subscription Type</div>
                <div className="col-md-4"></div>
            </ div>

            <div className="row subs">
                <div className="col-md-4"></div>
                <div className="col-md-4 text-center "><div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-success " onClick={setMonthPrice}>
                        <input type="radio" /> Monthly
                                    </label>
                    <label class="btn btn-success" onClick={setYearPrice}>
                        <input type="radio" /> Annually
                                    </label>
                </div></div>
                <div className="col-md-4"></div>
            </div>

            <div className="row">
                <div className="container">

                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center">Features</th>
                                <th className="text-center"><h3>GEN Ray Explorer</h3><br /> <h5>Basic</h5> <div> <h6>{basicPrice.label}</h6></div>
                                    <div> <h5> ${basicPrice.value}/month</h5></div>
                                    <Select
                                        value={monthPriceList}
                                        onChange={handleMonthChange}
                                        options={monthPriceList}
                                    />
                                </th>
                                <th className="text-center"><h3>GEN Ray Explorer</h3><br /> <h5>Standard</h5> <div> <h6>{standardPrice.label}</h6></div>
                                    <div> <h5>${standardPrice.value}/month</h5></div>
                                    <Select
                                        value={monthSPriceList}
                                        onChange={handleSMonthChange}
                                        options={monthSPriceList}
                                    />

                                </th>
                                <th className="text-center"><h3>GEN Ray Explorer</h3><br /> <h5>Premium</h5> <div> <h6>{premiumPrice.label}</h6></div>
                                    <div> <h5>${premiumPrice.value}/month</h5></div>
                                    <Select
                                        value={monthPPriceList}
                                        onChange={handlePMonthChange}
                                        options={monthPPriceList}
                                    />

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row " className="text-center">
                                    {price.basic.featureList.map((e) => (<div> <div className="row">


                                        {e.f} <div className="na">
                                            <a data-tip data-for="global" data-event='click focus'><i class="fa fa-info" aria-hidden="true"></i></a>
                                            <ReactTooltip id="global" aria-haspopup="true" role="example">
                                                <iframe width="560" height="315" src="https://www.youtube.com/embed/69V2rokeXak" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                            </ReactTooltip><br />
                                        </div></div></div>))}
                                </th>



                                <td>
                                    <div className="row">
                                        <div className="col-md-5"></div>
                                        <div className="col-md-2">
                                            {price.basic.feature.map((e) => (<>{
                                                e.basic ? <div><img src={check} alt="" /></div> : null
                                            }</>))}
                                        </div>
                                        <div className="col-md-5"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-md-5"></div>
                                        <div className="col-md-2">
                                            {price.basic.feature.map((e) => (<>{
                                                e.standard ? <div><img src={check} alt="" /></div> : null
                                            }</>))}
                                        </div>
                                        <div className="col-md-5"></div>
                                    </div>
                                </td>
                                <td>
                                    <div className="row">
                                        <div className="col-md-5"></div>
                                        <div className="col-md-2">
                                            {price.basic.feature.map((e) => (<>{
                                                e.premium ? <div><img src={check} alt="" /></div> : null
                                            }</>))}
                                        </div>
                                        <div className="col-md-5"></div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th></th>
                                <td>
                                    <div className="row">
                                        <div className="col-md-12 text-center">
                                            <Link to={{ pathname: '/checkout', state: basicPrice, }} className="btn btn-success ">Buy Now</Link>
                                        </div>
                                    </div></td>
                                <td>
                                    <div className="row">

                                        <div className="col-md-12 text-center">
                                            <Link to={{ pathname: '/checkout', state: standardPrice }} className="btn btn-success ">Buy Now</Link>
                                        </div>
                                    </div></td>
                                <td>
                                    <div className="row ">
                                        <div className="col-md-12 text-center">
                                            <Link to={{ pathname: '/checkout', state: premiumPrice }} className="btn btn-success ">Buy Now</Link>
                                        </div>
                                        {/* <a href=""></a> */}
                                    </div></td>
                            </tr>
                        </tbody>
                    </table>
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
        </div >
    )
}
