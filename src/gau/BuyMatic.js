import React, { Component } from 'react';
import { round } from 'mathjs';

import gauLogo from '../img/gaugecash_logo.png';
import maticLogo from '../img/polygon-logo.png';
import SwapBtn from '../static/btnswap.svg';

const convert = require('ethereum-unit-converter')
const BigNumber = require('bignumber.js');

class BuyMatic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0',
      ether: true,
      etherinput: false,
      linkinput: false,
      gaufInput: "",
      maticInput: "",
      convertedMatic: "",
      convertedGau: ""
    }
  }

  ourOwnCoverter = (Amount)=>{
    console.log('ourOwnConverter')
    console.log('Amount', Amount)
    if(Amount <= 0 || this.props.decimals == 0)
    return 0
    const ten = BigNumber(10)
    const decimals = ten.exponentiatedBy(8)

    console.log('decimals', decimals)
    let amount = BigNumber(Amount)
     amount = amount.multipliedBy(decimals)
    console.log('Amount', amount.toString())
    return amount.toString()
  }

  inputHandler = (event) => {

    const Amount = event.target.value.toString()
    const internationalNumberFormat = new Intl.NumberFormat('en-US')

    if (event.target.classList.contains("matic")) {
      console.log('event.target.classList:', event.target.classList)
      console.log('event.target.classList.contains("matic")')
      console.log('this.props.swap:', this.props.swap)
      const conversion = parseFloat( event.target.value * (this.props.swap?this.props.maticPrice : this.props.gaugecashPrice ) ).toFixed(2)
      const result = internationalNumberFormat.format(conversion)
      if(this.props.swap)
      this.setState({ maticInput: parseFloat(event.target.value), gaufInput: parseFloat( (event.target.value * this.props.maticPrice) / this.props.gaugecashPrice ).toFixed(3)  , convertedMatic: result })
      else 
      this.setState({ maticInput: parseFloat(event.target.value), gaufInput: parseFloat( (event.target.value * this.props.gaugecashPrice) /this.props.maticPrice ).toFixed(3)  , convertedMatic: result })

      console.log(this.state.convertedGau)
    }

    if (event.target.classList.contains("gauf")) {
      console.log('event.target.classList:', event.target.classList)
      console.log('event.target.classList.contains("gauf")')
      console.log('this.props.swap:', this.props.swap)
      const conversion = parseFloat( event.target.value * (this.props.swap? this.props.gaugecashPrice : this.props.maticPrice) ).toFixed(2)
      const result = internationalNumberFormat.format(conversion)
      if(this.props.swap)
      this.setState({ gaufInput: parseFloat(event.target.value), maticInput: parseFloat( (event.target.value * this.props.gaugecashPrice) /this.props.maticPrice ).toFixed(3), convertedMatic: result })
      else
      this.setState({ gaufInput: parseFloat(event.target.value), maticInput: parseFloat( (event.target.value * this.props.maticPrice) /this.props.gaugecashPrice ).toFixed(3), convertedMatic: result })

      console.log(this.state.convertedMatic)
    }

    const inputToWei = convert(Amount, 'ether', 'wei')
    const outputWei = this.props.swap? this.props.getAmountOfGaugeCash(Amount) : this.props.getAmountOfMatic(Amount)
    const outputFixed = outputWei.toFixed(2)
    this.setState({output: outputFixed})


    
    if(this.props.isConnected && !this.props.swap) this.props.isAmountApproved(inputToWei)

    
    if(event.target.value >= 0.003){
      this.setState({etherinput : true})
    }else{
      this.setState({etherinput : false})
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    
    let Amount = event.target.maticInput.value
    this.props.swap? Amount = convert(Amount, 'ether', 'wei') : Amount = this.ourOwnCoverter(Amount)
    console.log('Amount:', Amount)
    this.props.swap? this.props.buyGauWithEther(Amount) : this.props.swapGauForMatic(Amount)
    event.target.reset()
    this.setState({output: '0'})
  }

  swapButton = ()=>{
    this.setState({ gaufInput: 0, maticInput: 0, convertedMatic: 0 })
    this.props.swapCurrencies()
  }

  getMaxBalance = ()=>{
    console.log('this.state.swap:', this.props.swap)
    const Amount = this.props.swap?round((this.props.ethBalance),4)  : this.props.GAUfBalance  
     console.log('balance:', Amount)
    // this.setState({ maticInput: balance })
    const internationalNumberFormat = new Intl.NumberFormat('en-US')
    const conversion = parseFloat( Amount * (this.props.swap?this.props.maticPrice : this.props.gaugecashPrice ) ).toFixed(2)
    const result = internationalNumberFormat.format(conversion)
    if(this.props.swap)
    this.setState({ maticInput: Amount, gaufInput: parseFloat( (Amount * this.props.maticPrice) / this.props.gaugecashPrice ).toFixed(3)  , convertedMatic: result })
    else 
    this.setState({ maticInput: Amount, gaufInput: parseFloat( (Amount * this.props.gaugecashPrice) /this.props.maticPrice ).toFixed(3)  , convertedMatic: result })

    const inputToWei = convert(Amount, 'ether', 'wei')
    const outputWei = this.props.swap? this.props.getAmountOfGaugeCash(Amount) : this.props.getAmountOfMatic(Amount)
    const outputFixed = outputWei.toFixed(2)
    this.setState({output: outputFixed})

    if(Amount >= 0.003){
      this.setState({etherinput : true})
    }else{
      this.setState({etherinput : false})
    }
  }

  render() {
        return (
          <form className="mb-1" onSubmit={this.submitHandler}>
            <div className="submit-button">
              <div className="col-sm-12 buttons">
                <button className={!this.props.isConnected ? 'connect' : 'connect-disabled'} onClick={this.props.openWallet}>Connect wallet</button>
              </div>
            </div>
            <div className="borders2">
              <div className='spac-btn'>
                <span className="float-left maticConv">
                  Balance: {this.props.swap? round((this.props.ethBalance),4) : this.props.GAUfBalance }
                </span>
                <button type='button' className='btnn' onClick={this.getMaxBalance}>Max</button>
              </div>
              <div className="input-group mb-4">
                <input
                  id="userInput"
                  name="maticInput"
                  type="number"
                  min="0.003"
                  step='any'
                  onChange={this.inputHandler}
                  ref={(input) => { this.input = input }}
                  className="input matic"
                  value={this.state.maticInput}
                  placeholder="0.0"
                  required />
                <div className="input-group-append">
                  <div className="icon">
                    <img src={this.props.swap?maticLogo : gauLogo} height='32' alt=""/>
                    &nbsp; {this.props.swap? "MATIC" : "GAUC"  }
                  </div>
                </div>
                <div>
                  <div> { <p className='maticConv'>${this.state.convertedMatic}</p> } </div>
                </div>
              </div>
            </div>
            <div className='arrow-button'>
              <button type= "button" className='btnn'><img src={SwapBtn} onClick={ this.swapButton} alt='swap btn'/></button>
            </div>
            <div className="borders2 padding-bot">
              <div>
                <span className="float-left maticConv">
                  Balance: {this.props.swap? this.props.GAUfBalance : round((this.props.ethBalance),4) }
                </span>
              </div>
              <div className="input-group mb-2">
                <input
                  type="number"
                  step='any'
                  className="input gauf"
                  placeholder="0.0"
                  ref={(input) => { this.input = input }}
                  onChange={this.inputHandler}
                  value={this.state.gaufInput}
                  />

                <div className="input-group-append">
                  <div className="icon">
                    <img src={this.props.swap?gauLogo : maticLogo } height='32' alt=""/>
                    &nbsp;  {this.props.swap? "GAUC" : "MATIC" }
                  </div>
                </div>
              </div>
            </div>  
            <div className="submit-button">
                <div className="col-sm-12 buttons mt-3">
                   <button type="submit" className={!this.props.isConnected ? 'buy-disabled' : 'connected' }>{this.props.swap? "Swap" : this.props.isBigger? "Swap" : "Approve & Swap"}</button>
                </div>
            </div>
          </form>
        );
      }
    }

export default BuyMatic;