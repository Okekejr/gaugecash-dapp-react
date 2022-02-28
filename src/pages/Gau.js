import React, { Component } from 'react';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Crowdsale from '../abis/Crowdsale.json';
import GAUf from '../abis/GAUf.json';

import Address from '../components/Address';
import MainMatic from '../gau/MainMatic';
import Popup from '../components/Popup';

class Exchange extends Component {

    constructor(props) {
        super(props)
        this.state = {
            account: '',
            gauf: {},
            link: {},
            crowdsale: {},
            LinkBalance: '0',
            ethBalance: '0',
            GAUfBalance: '0',
            loading: true,
            showPopup: false,
            transactionHash: '',
            connected: false,
            rate: '0',
            provider: {},
            web3:{},
            ethereum: true
        }
    }

    async openWallet(event) {
      event.preventDefault()
      //await this.connectWallet()
      await this.loadWeb3()
      //await this.loadBlockchainData()
    }
  
    async loadBlockchainData() {
  
      const web3 = this.state.web3
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })
      const networkId =  await web3.eth.net.getId()
      const mainNetwork = 1
      const mumbaiTestnet = 80001
      const polygonNetwork = 137
      const kovanNetwork = 42
      const crowdsaleAddressPolygon = "0x69156E4338FE6023B73A6A7CCa63cC8c57d43147"
      const crowdsaleAddressKovan = "0x2cDEe94A088dBA680F7e7E0C95189371e3Ab7b62"
      const crowdsaleAddressMainnet = "0xFcF4Ce2a48c9C62b490789547c3A1F4A4148e13e"
  
      const gaugefieldAddressMainnet = "0x8Ce7386fe7688417885ADEBCBfc01A5445226b2C"
      const gaugefieldAddressPolygon = "0x58171d74fc6526df600214ca18dc2ee4895c6f7b"
  
  
      const ethBalance = await web3.eth.getBalance(this.state.account) / 10 ** 18
      this.setState({ ethBalance })
  
      window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload();
      })
  
      window.ethereum.on('networkChanged', async (networkId) => {
        Array.from(document.querySelectorAll("input")).forEach(
          input =>{ input.value = 0.0;
      } 
        ); 
  
        await this.loadBlockchainData()
  
        Array.from(document.querySelectorAll("input")).forEach(
          input =>{ input.value = 0.0;
      } 
        ); 
  
      })
  
      if(polygonNetwork == networkId) {
        // Load GAUf
        const gauf = new web3.eth.Contract(GAUf.abi, gaugefieldAddressPolygon)
        this.setState({ gauf })
        let GAUfBalance = await gauf.methods.balanceOf(this.state.account).call() / 10 ** 18
        this.setState({ GAUfBalance: GAUfBalance.toString() })
  
        // Load Crowdsale
        const crowdsale = new web3.eth.Contract(Crowdsale.abi, crowdsaleAddressPolygon)
        this.setState({ crowdsale })
        this.setState({ connected: true })
        this.setState({ ethereum: false })
        const _rate = await crowdsale.methods.rate().call()
        this.setState({ rate: _rate })
        console.log("rate is: ", this.state.rate.toString() )
  
      }else if(mainNetwork == networkId) {
  
        // Load GAUf
        const gauf = new web3.eth.Contract(GAUf.abi, gaugefieldAddressMainnet)
        this.setState({ gauf })
        let GAUfBalance = await gauf.methods.balanceOf(this.state.account).call() / 10 ** 18
        this.setState({ GAUfBalance: GAUfBalance.toString() })
  
  
        // Load Crowdsale
        const crowdsale = new web3.eth.Contract(Crowdsale.abi, crowdsaleAddressMainnet)
        this.setState({ crowdsale })
        this.setState({ connected: true })
        this.setState({ ethereum: true })
        const _rate = await crowdsale.methods.rate().call()
        this.setState({ rate: _rate })
        console.log("rate is: ", this.state.rate.toString() )
  
      } 
      else {
        window.alert('Select the Polygon or Mainnet Network.')
        window.location.reload();
        this.setState({ connected: false })
      }
      this.setState({ loading: false })
    }
  
    async connectWallet() {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider, // required
          options: {
            infuraId: "27e484dcd9e3efcfd25a83a78777cdf1", // required
            qrcodeModalOptions: {
              mobileLinks: [
                "rainbow",
                "metamask",
                "argent",
                "trust",
                "imtoken",
                "pillar",
              ],
            },
          }
        }
      };
      
      const web3Modal = new Web3Modal({
        network: "mainnet", // optional
        cacheProvider: true, // optional
        providerOptions // required
      });
      
      const provider = await web3Modal.connect();
      
      const web3 = new Web3(provider);
      this.setState({provider})
      this.setState({web3})
     
      const accounts = await web3.eth.getAccounts()
      
    }
  
   
    async loadWeb3() {
      try {
        await this.connectWallet()
       
        if (this.state.provider) {
          await this.loadBlockchainData()
        }
      } catch (error) {
        //verificacao wallet installadadada
        if (error === "Modal closed by user") {
          console.log(error);
        } else if (error === undefined) {
          console.log({ "esse erro nóis num sabe": error });
        } else {
          console.log(error);
        }
      }
    }
    
    buyGaufWithEther = (etherAmount) => {
      this.setState({ loading: true })
      this.state.crowdsale.methods.buyTokens(this.state.account).send({ value: etherAmount, from: this.state.account })
      .once('confirmation', (confirmation, info) => {
        this.loadBlockchainData()
        this.setState({ loading: false })
        this.togglePopup(info["transactionHash"])
      })
      .on("error", (error) => {
        this.setState({ loading: false })
      })
    }
  
    buyGaufWithLink = (linkAmount) => {
      this.setState({ loading: true })
      this.state.link.methods.approve(this.state.crowdsale.address, linkAmount).send({ from: this.state.account })
        .on("error", (error) => {
          this.setState({ loading: false })
        })
        .once('confirmation', (confirmation) => {
          this.state.crowdsale.methods.buyGaufWithLink(linkAmount).send({ from: this.state.account })
            .once('confirmation', (confirmation,info) => {
              this.loadBlockchainData()
              this.setState({ loading: false })
              this.togglePopup(info["transactionHash"])
            })
            .on("error", (error) => {
                this.setState({ loading: false })
            }
          )
        }
      )
    }
  
    togglePopup(hash) {  
      this.setState({  
        showPopup: !this.state.showPopup, 
        transactionHash: hash
      });
    }  


    render() {
        let load
        let content
      
        content = 
          <MainMatic
          LinkBalance={this.state.LinkBalance}
          GAUfBalance={this.state.GAUfBalance}
          buyGaufWithEther={this.buyGaufWithEther}
          buyGaufWithLink={this.buyGaufWithLink}
          ethBalance={this.state.ethBalance}
          openWallet={this.openWallet.bind(this)}
          isConnected={this.state.connected}
          rate={this.state.rate}
          ethereum={this.state.ethereum}
          />
    
        return (
            <div>
                <div className="container-fluid">
                        <div className="row">
                          <main role="main" className="col-lg-12 ml-auto mr-auto" style={{ maxWidth: '600px' }}>
                            <div className="content mr-auto ml-auto ">
                              {load}
                              {content}
                              <Address account={this.state.account} />  
                            </div>
                          </main>
                        </div>
                </div> 
                <Popup show={this.state.showPopup} closePopup={this.togglePopup.bind(this) } ether={this.state.ethereum} etherscan={this.state.ethereum? "https://etherscan.io/tx/"+this.state.transactionHash : "https://polygonscan.com/tx/"+this.state.transactionHash}/>
            </div>           
        );
    }
}

export default Exchange;