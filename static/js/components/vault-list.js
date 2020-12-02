import React from 'react'
import { NavLink } from 'react-router-dom'

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
                  <a href='https://yfdai.finance' className='btn btn-block btn-primary btn-lg pr-5 pl-5 orange-text'>Return to Main Page</a>
                </div>
                {/* <div className='mt-4 mb-4 apr-info-child' style={{maxWidth: '150px'}}>
                  <p><strong className='purple-text'>YFDAI</strong> Staking <strong className='orange-text'>APR:</strong></p>
                  <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Yearly:</span> <span style={{float: 'right'}}>72<i className='orange-text'>%</i></span></p>
                  <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Monthly:</span> <span style={{float: 'right'}}>6<i className='orange-text'>%</i></span></p>
                  <p className='mb-0'><span className='orange-text'>APR-</span><span className='text-bold purple-text'>Daily:</span> <span style={{float: 'right'}}>0.2<i className='orange-text'>%</i></span></p>
                </div> */}
                <div className='mt-4 mb-4 apr-info-child' style={{maxWidth: '150px'}}>
                  <p><strong className='purple-text'>YFDAI</strong> Vaults <strong className='orange-text'>APR:</strong></p>
                  <p>Deposit DAI, ETH, YFDAI/ETH LP Tokens &amp; farm YFDAI</p>
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

const VaultCard = ({logo, link, name, description, return_heading, return_description}) => (
    <div className='container vault-container'>
        <NavLink to={link}>
        <div className='row vault-row'>
            <div className='col-sm-2 col-md-1 text-center'>
                <img className='mb-3' src={logo} height='45' width='45' style={{objectFit: 'contain'}} />
            </div>
            <div style={{whiteSpace: 'pre-line'}} className='col-sm-3 col-md-4'>
                <span className='vault-name'>{name} </span>
            </div>
            <div className='col-sm-4'>
                {description}
            </div>
            <div className='col-sm-3 text-right'>
                <h4>{return_heading}</h4>
                <p>{return_description} </p>
            </div>
        </div>
        </NavLink>
    </div>
)

let vaults = window.vaults

export default class VaultList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header />
                <div className='container'>
                    <h3 className='text-center mt-5' style={{fontWeight: 600}}>YFDAI Finance Vaults</h3>
                    <div className='vaults-list'>
                        {vaults.map((props,i) => <VaultCard {...props} key={i} />)}
                    </div>
                </div>
            </div>
        )
    }
}