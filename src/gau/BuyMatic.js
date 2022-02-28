import React, { Component } from 'react';
import { round } from 'mathjs';

import gauLogo from '../img/gaugecash_logo.png';
import maticLogo from '../img/polygon-logo.png';

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
    }
  }


  render() {
    if(this.props.ethereum){ 
        return (
          <form className="mb-1" onSubmit={(event) => {
              event.preventDefault()
              let Amount = this.input.value
              Amount = convert(Amount, 'ether', 'wei')
              this.props.buyGaufWithEther(Amount)
              event.target.reset()
              this.setState({output: '0'})
            }}>
            <div className="borders2 margin-bot">
              <div>
                <span className="float-left white-color">
                  Balance: {round((this.props.ethBalance),4)}
                </span>
              </div>
              <div className="input-group mb-4">
                <input
                  id="userInput"
                  type="number"
                  min="0.003"
                  step='any'
                  onChange='setTwoNumberDecimal'
                  onChange={(event) => {
                    const Amount = this.input.value.toString()
                    const rate =  this.props.rate.toString()
                    const inputToWei = convert(Amount, 'ether', 'wei')
                    const outputWei = BigNumber(inputToWei).div(rate).decimalPlaces(6) 
                    this.setState({output: outputWei})
                    if(this.input.value >= 0.003){
                      this.setState({etherinput : true})
                    }else{
                      this.setState({etherinput : false})
                    }
                  }}
                  ref={(input) => { this.input = input }}
                  className="input"
                  placeholder="0.0"
                  required />
                <div className="input-group-append">
                  <div className="icon">
                    <img src={maticLogo} height='32' alt=""/>
                    &nbsp; MATIC
                  </div>
                </div>
              </div>
            </div> 
            <div className="borders2 padding-bot">
              <div>
                <span className="float-left white-color">
                  Balance: {round(this.props.GAUfBalance,2)}
                </span>
              </div>
              <div className="input-group mb-2">
                <input
                  type="number"
                  step='any'
                  className="input"
                  placeholder="0.0"
                  value={this.state.output}
                  disabled/>

                <div className="input-group-append">
                  <div className="icon">
                    <img src={gauLogo} height='32' alt=""/>
                    &nbsp;  GAU
                  </div>
                </div>
              </div>
            </div>  
            <div className="submit-button">
                <div className="col-sm-12 buttons">
                   <button type="submit" className={!this.props.isConnected ? 'buy-disabled' : ''}>Buy GAU</button>
                   <button className={!this.props.isConnected ? 'connect' : 'connect-disabled'} onClick={this.props.openWallet}>Connect wallet</button>
                </div>
            </div>
          </form>
        );
      }
    }
  }

export default BuyMatic;
