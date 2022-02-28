import React, { Component } from 'react'

class Address extends Component {

  render() {
    return (
        <div className='add'>
            {!this.props.account ? <div id="loader" className="text-light" role="status"></div> :
            <li className='addContent'>
                <span><i class="fas fa-wallet"></i>   </span>
            <a
              className="text-white"
              href={"https://etherscan.io/address/" + this.props.account}
              target="_blank"
              rel="noopener noreferrer"
            >
              {(this.props.account)}
            </a>&nbsp;
          </li>
            }
        </div>
    )
  }
}

export default Address;