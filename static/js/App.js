import React from 'react';

import { Route, NavLink } from 'react-router-dom'

import VaultLP from './components/vault-lp'
import VaultLP30 from './components/vault-lp-30'
import VaultLP35 from './components/vault-lp-35'
import VaultLP45 from './components/vault-lp-45'

import VaultDAI from './components/vault-dai'
import VaultWETH from './components/vault-weth'

import VaultList from './components/vault-list'

let { BigNumber } = window

const FooterBar = () => (
  <footer className='text-right purple-bg pt-2 pb-2 pr-2'>
    <img height='30' src='./images/logo-white-text.png' />
  </footer>
)

const Header = () => (
  <div style={{background: '#fff'}}>
    <div className='container mr-0 ml-0' style={{maxWidth: '100%'}}>
      <div className='row'>
          <div className='col-md-7 mt-4 mb-4 logo-column'>
              <img style={{position: 'relative', top: '20px', maxWidth: '90%', objectFit: 'contain'}} src='./images/logo-main.jpg' height='105' />
              {/* <span className='' style={{display: 'inline-block', borderLeft: '3px solid #ccc', padding: '2rem 2rem', margin: '1rem 0', marginLeft: '1rem'}}>
                <strong className='purple-text' style={{fontSize: '2rem'}}>Staking DAPP</strong>
              </span> */}
          </div>
          <div className='col-md-5 pr-0 pl-0'>
            <div className='apr-info' style={{maxWidth: '300px', float: 'right'}}>
              <div style={{textAlign: 'right'}}>
                <a href='https://UNOS.finance' className='btn btn-block btn-primary btn-lg pr-5 pl-5 orange-text'>Return to Main Page</a>
              </div>
              {/* <div className='mt-4 mb-4 apr-info-child' style={{maxWidth: '150px'}}>
                <p><strong className='purple-text'>UNOS</strong> Staking <strong className='orange-text'>APR:</strong></p>
                <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Yearly:</span> <span style={{float: 'right'}}>72<i className='orange-text'>%</i></span></p>
                <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Monthly:</span> <span style={{float: 'right'}}>6<i className='orange-text'>%</i></span></p>
                <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Daily:</span> <span style={{float: 'right'}}>0.2<i className='orange-text'>%</i></span></p>
              </div> */}
              <div className='mt-4 mb-4 apr-info-child' style={{maxWidth: '150px'}}>
                <p><strong className='purple-text'>UNOS</strong> Vaults <strong className='orange-text'>APR:</strong></p>
                <p>Deposit DAI, ETH, UNOS/ETH LP Tokens &amp; farm UNOS</p>
                {/* <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Yearly:</span> <span style={{float: 'right'}}>72<i className='orange-text'>%</i></span></p>
                <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Monthly:</span> <span style={{float: 'right'}}>6<i className='orange-text'>%</i></span></p>
                <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Daily:</span> <span style={{float: 'right'}}>0.2<i className='orange-text'>%</i></span></p> */}
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
)

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      is_unlocked: false
    }
  }

  

  componentDidMount() {
    // window.addEventListener('load', this.handleConnection)
  }

  handleConnection = async () => {
    try {
      let is_wallet_connected = await window.connectWallet()
      this.setState({is_wallet_connected, coinbase: await window.web3.eth.getCoinbase()})
    } catch (e) {
      window.alertify.error(String(e))
    }
  }


 render() {

  if (!this.state.is_wallet_connected) {
    return (<div className='App'>
        <Header />
      <div className='container text-center vh-100'>
        <div className='mt-5'>
          <h3 className='mb-4'>Please connect wallet to use this DAPP.</h3>
          
          <button onClick={this.handleConnection} className='btn btn-primary btn-lg pr-5 pl-5 orange-text'>
            CONNECT WALLET</button>
        </div>
      </div>
      <FooterBar />
    </div>);
  }
  return (
    <div className="App">
        {/* <Header /> */}
      <div>
        <Route exact path="/vault-lp" render={props => <VaultLP {...props} />} />
        <Route exact path="/vault-lp-30" render={props => <VaultLP300 {...props} />} />
        <Route exact path="/vault-lp-35" render={props => <VaultLP350 {...props} />} />
        <Route exact path="/vault-lp-45" render={props => <VaultLP450 {...props} />} />
        <Route exact path="/vault-dai" render={props => <VaultDAI {...props} />} />
        <Route exact path="/vault-weth" render={props => <VaultWETH {...props} />} />
        <Route exact path="/" render={props => <VaultList {...props} />} />
      </div>
      <FooterBar />

    </div>
  );
}
}

export default App;
