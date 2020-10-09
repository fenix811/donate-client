import React, {Component} from 'react';

class DonationForm extends Component { //TODO convert to functional with HOOKS!!
    constructor(props:any) {
        super(props);
    }

    render(){
        return (
            <div className="container">
                <div className="form-row">
                    <label htmlFor="first-name">First Name*</label>
                    <input type="text" placeholder="Enter First Name" id="first-name"/>
                </div>
                <div className="form-row">
                    <label htmlFor="last-name">Last Name*</label>
                    <input type="text" placeholder="Enter Last Name" id="last-name"/>
                </div>
                <div className="form-row">
                    <label htmlFor="email">Email*</label>
                    <input type="text" placeholder="Enter Email" id="email"/>
                </div>
                <div className="form-row">
                    <label htmlFor="address">Address*</label>
                    <input type="text" placeholder="Enter address" id="address"/>
                </div>
                <div className="form-row">
                    <label htmlFor="amount">Amount*</label>
                    <input type="text" placeholder="Enter amount" id="amount"/>
                    <label htmlFor="cover-cost">Cover Costs</label>
                    <input type="checkbox" id="cover-cost"/>
                    
                </div>
                <div className="form-row">
                    <label htmlFor="card-number">Card Number*</label>
                    <input type="text" placeholder="Enter Card Number" id="card-number"/>
                </div>
                <div className="form-row">
                    <span>Month/Year</span>
                    <input type="text" placeholder="Enter Month" id="month"/>
                    <input type="text" placeholder="Enter Year" id="year"/>

                    <label htmlFor="cvv">CVV*</label>
                    <input type="text" placeholder="Enter CVV" id="cvv"/>
                </div>
                <div className="donate-row centered">
                    <input type="button" value="donate" className="donate-button"/>
                </div>
            </div>

        )
        
    }
}

export default DonationForm;
