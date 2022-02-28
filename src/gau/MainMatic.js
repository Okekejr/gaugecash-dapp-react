import React, { Component } from 'react';
import BuyMatic from '../gau/BuyMatic';

class MainMatic extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }

  render() {
    let content
    {
      content = <BuyMatic
      LinkBalance={this.props.LinkBalance}
      GAUfBalance={this.props.GAUfBalance}
      buyGaufWithEther={this.props.buyGaufWithEther}
      buyGaufWithLink={this.props.buyGaufWithLink}
      ethBalance={this.props.ethBalance}
      openWallet={this.props.openWallet}
      isConnected={this.props.isConnected}
      rate={this.props.rate}
      ethereum={this.props.ethereum}
      />
    }
    return (
      <div id="content " className="mt-3">
        <div className="card mb-2 buy-background" >
        <div className="container-div ">
          </div>
            <div className="card-body">
              {content}
            </div>
            
          </div>
      </div>
    );
  }
}

export default MainMatic;
