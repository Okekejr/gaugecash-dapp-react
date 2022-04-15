import React, { Component } from 'react';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

import Address from '../components/Address';
import MainMatic from '../gau/MainMatic';
import Popup from '../components/Popup';
import FloatingButton from '../components/FloatingButton';
import { MaticFeed } from '../datafeeds/MaticFeed';
import { GauFeed } from '../datafeeds/GauFeed';
import DataFeedGau from '../datafeeds/DataFeedGau';
import DataFeedMatic from '../datafeeds/DataFeedMatic';

// CSS imports //
import '../styles/gau.css'


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
            ethereum: true,
            swapCurrencies:{},
            swap: true,
            gauFactory: '',
            isBigger: false,
            decimals: 0,
            estimateGasbuyGauWithEther:{},
            maticPrice: 0,
            gaugecashPrice: 0
        }
    }

    async openWallet(event) {
      event.preventDefault()
      //await this.connectWallet()
      await this.loadWeb3()
      //await this.loadBlockchainData()
    }
  
    async loadBlockchainData() {
      console.log('load blockchain')
  
      const web3 = this.state.web3
      const accounts = await web3.eth.getAccounts()
      this.setState({ account: accounts[0] })
      const networkId =  await web3.eth.net.getId()
      // const mainNetwork = 1
      const mumbaiTestnet = 80001
      // const polygonNetwork = 137
      // const kovanNetwork = 42
      const crowdsaleAddressPolygon = "0xfB3bdf5ABeB81a8E1a2CFE697CB4CfC924407b2E"
      // const crowdsaleAddressKovan = "0x2cDEe94A088dBA680F7e7E0C95189371e3Ab7b62"
      // const crowdsaleAddressMainnet = "0xFcF4Ce2a48c9C62b490789547c3A1F4A4148e13e"
  
      // const gaugefieldAddressMainnet = "0x8Ce7386fe7688417885ADEBCBfc01A5445226b2C"
      // const gaugefieldAddressPolygon = "0x58171d74fc6526df600214ca18dc2ee4895c6f7b"

      const gauAddressMumbaiTestnet = '0x535901718A990a0Dc932522B8f8C0E1DC21FbdB8'
      const Gauabi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_oldFactory","type":"address"},{"indexed":false,"internalType":"address","name":"newFactory","type":"address"}],"name":"NewFactorySetted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"gaugeCash_init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getFactory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"setFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]
      const Crow = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amountToken","type":"uint256"}],"name":"GauForMaticSwapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountToken","type":"uint256"},{"indexed":true,"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"GauForTokenSwapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountGaugeCash","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"MaticForGauSwapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"},{"indexed":true,"internalType":"address","name":"_priceFeed","type":"address"}],"name":"TokenAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountGaugeCash","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"TokenForGauSwapped","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_contract","type":"address"}],"name":"TokenRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"GAUGECASH","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"GAUGECASH_FACTORY","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MATIC_PRICE_FEED","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"PricefeedForToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WMATIC","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"},{"internalType":"address","name":"_priceFeed","type":"address"}],"name":"approveToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"erc20Accepted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_RESERVE","type":"address"},{"internalType":"address payable","name":"_gaufactory","type":"address"},{"internalType":"address","name":"_gaugecash","type":"address"},{"internalType":"address","name":"_gauPriceFeed","type":"address"},{"internalType":"address","name":"_MATIC_PRICE_FEED","type":"address"},{"internalType":"address","name":"_WMATIC","type":"address"}],"name":"gauAtm_init","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_contract","type":"address"}],"name":"removeToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"swapGauForMatic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"swapGauForToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapMaticForGau","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"swapTokenForGau","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

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
  
      if(mumbaiTestnet == networkId) {
        console.log('help')
        // Load GAUf
        const gauf = new web3.eth.Contract(Gauabi, gauAddressMumbaiTestnet)
        this.setState({ gauf })
        let decimals = await gauf.methods.decimals().call()
        this.setState({decimals: decimals})
        let GAUfBalance = await gauf.methods.balanceOf(this.state.account).call() / 10 ** decimals
        this.setState({ GAUfBalance: GAUfBalance.toString() })
  
        // Load Crowdsale
        const crowdsale = new web3.eth.Contract(Crow, crowdsaleAddressPolygon)
        const gauFactoyAddr = await crowdsale.methods.GAUGECASH_FACTORY().call()
        this.setState({gauFactory:  gauFactoyAddr})
        let _estimateGas;
        await crowdsale.methods.swapMaticForGau().estimateGas(
          {   from: this.state.account,
              to:crowdsaleAddressPolygon,
              value: 1000000000000000000,
    
          }, function(error, estimatedGas) {
            _estimateGas = estimatedGas
          }
      )
        console.log('estimate gas:', _estimateGas)

       const gasPrice = await web3.eth.getGasPrice()
       console.log('gasPrice gas:', gasPrice)


        //load prices
        const maticPrice = await MaticFeed()
        const gaugecashPrice = await GauFeed()
        
        this.setState({maticPrice: maticPrice})
        this.setState({gaugecashPrice: gaugecashPrice})


        this.setState({ crowdsale })
        this.setState({ connected: true })
        this.setState({ ethereum: false })
      }
      else {
        window.alert('Select the Mumbai Testnet')
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
    
    buyGauWithEther = (etherAmount) => {
      this.setState({ loading: true })
      this.state.crowdsale.methods.swapMaticForGau().send({ value: etherAmount, from: this.state.account })
      .once('confirmation', (confirmation, info) => {
        this.loadBlockchainData()
        this.setState({ loading: false })
        this.togglePopup(info["transactionHash"])
      })
      .on("error", (error) => {
        this.setState({ loading: false })
      })
    }

    estimateGasbuyGauWithEther = async (etherAmount) => {
    const estimateGas = await this.state.crowdsale.estimateGas.swapMaticForGau().send({ value: etherAmount, from: this.state.account })
     console.log('estimateGas:', estimateGas)
     const web3 = this.state.web3
    const gasPrice = await web3.eth.getGasPrice()
    console.log('gasPrice:', gasPrice)

    }



    swapGauForMatic = (gauAmount) => {
      this.setState({ loading: true })
      this.state.gauf.methods.approve(this.state.gauFactory, gauAmount).send({ from: this.state.account })
        .on("error", (error) => {
          this.setState({ loading: false })
        })
        .once('confirmation', (confirmation) => {
          this.state.crowdsale.methods.swapGauForMatic(gauAmount).send({ from: this.state.account })
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
    
    getAmountOfGaugeCash =  (maticAmount)=>{
      const gaugecashPrice = this.state.gaugecashPrice;
      const maticPrice = this.state.maticPrice;

      return Number((maticAmount * maticPrice / gaugecashPrice));
    }

    getAmountOfMatic =  (gaugecashAmount)=>{
      const gaugecashPrice = this.state.gaugecashPrice;
      const maticPrice = this.state.maticPrice;

      return Number((gaugecashAmount * gaugecashPrice / maticPrice));

    }



    isAmountApproved = async(gauAmount) => {
      if(isNaN(gauAmount))return

      const gauInstance = this.state.gauf

      const amountApproved = await gauInstance.methods.allowance(this.state.account, this.state.gauFactory).call()
      const _isBigger = amountApproved.gte(gauAmount)
      console.log('amounApproved:', amountApproved)
      console.log('isBigger:', _isBigger)
      
      this.setState({isBigger: _isBigger})
      console.log('this.state.isBigger:', this.state.isBigger)
    }
  
  
  
    togglePopup(hash) {  
      this.setState({  
        showPopup: !this.state.showPopup, 
        transactionHash: hash
      });
    }  

     swapCurrencies = async () => {
      console.log('swapCurrencies init')
      console.log('swap before', this.state.swap)
      this.setState({ swap: this.state.swap? false : true });
      console.log('swap after', this.state.swap)

    }
      

    render() {
        let load
        let content
      
        content = 
          <MainMatic
          LinkBalance={this.state.LinkBalance}
          GAUfBalance={this.state.GAUfBalance}
          buyGauWithEther={this.buyGauWithEther}
          ethBalance={this.state.ethBalance}
          openWallet={this.openWallet.bind(this)}
          isConnected={this.state.connected}
          rate={this.state.rate}
          ethereum={this.state.ethereum}
          swapCurrencies = {this.swapCurrencies}
          swap = {this.state.swap}
          isAmountApproved = {this.isAmountApproved}
          isBigger = {this.state.isBigger}
          swapGauForMatic={this.swapGauForMatic}
          decimals={this.state.decimals}
          estimateGasbuyGauWithEther={this.estimateGasbuyGauWithEther}
          getAmountOfGaugeCash={this.getAmountOfGaugeCash}
          getAmountOfMatic={this.getAmountOfMatic}
          maticPrice={this.state.maticPrice}
          gaugecashPrice={this.state.gaugecashPrice}
          />
    
        return (
            <div>
                <FloatingButton />
                <div className='new-cont'>
                  <DataFeedGau />
                  <DataFeedMatic />
                </div>
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
                <Popup show={this.state.showPopup} closePopup={this.togglePopup.bind(this) } ether={this.state.ethereum} etherscan={this.state.ethereum? "https://etherscan.io/tx/"+this.state.transactionHash : "https://mumbai.polygonscan.com/tx/"+this.state.transactionHash}/>
            </div>           
        );
    }
    
}

export default Exchange;