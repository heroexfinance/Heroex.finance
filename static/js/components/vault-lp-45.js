import React from 'react'
import getFormattedNumber from '../functions/get-formatted-number'
import Address from './address'

let {reward_token, token_lp, vault_lp_45, BigNumber, alertify} = window

let vault_dai = vault_lp_45
let token_dai = token_lp

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function jsonToCsv(items) {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(items[0])
    let csv = items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    csv.unshift(header.join(','))
    csv = csv.join('\r\n')
    return csv
}

window.handleDownload = ({stakers, stakingTimes, lastClaimedTimes, stakedTokens}) => {
    let list = []
    stakers.forEach((staker, index) => {
        list.push({
            staker_address: staker,
            staking_timestamp_unix: stakingTimes[index],
            lastclaimed_timestamp_unix: lastClaimedTimes[index],
            staking_time: getDate(stakingTimes[index]*1e3),
            lastclaimed_time: getDate(lastClaimedTimes[index]*1e3),
            staked_tokens: stakedTokens[index]
        })
    })
    download('stakers-list.csv', jsonToCsv(list))

    function getDate(timestamp) {
        let a = new Date(timestamp)
        return a.toUTCString()
    }
}

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
                <div className='mt-4 mb-4 apr-info-child' style={{maxWidth: '150px'}}>
                  <p><strong className='purple-text'>YFDAI</strong> Vaults <strong className='orange-text'>Reward Pool:</strong></p>
                  <p>45 YFDAI / month</p>
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
export default class VaultDAI extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token_balance: '',
            reward_token_balance: '',
            pendingDivs: '',
            totalEarnedTokens: '',
            cliffTime: '',
            stakingTime: '',
            depositedTokens: '',
            lastClaimedTime: '',
            depositAmount: '',
            withdrawAmount: '',
            coinbase: '',
            usdPerToken: '',
            tvlInUsd: '',
            stakingOwner: null
        }
    }
  
    componentDidMount() {
        this.refreshBalance()
        window.yfdai_refreshBalInterval = setInterval(this.refreshBalance, 3000)
    }

    componentWillUnmount() {
        clearInterval(window.yfdai_refreshBalInterval)
    }

    handleDeposit = (e) => {
        e.preventDefault()
        let amount = this.state.depositAmount
        amount = new BigNumber(amount).times(1e18).toFixed(0)
        vault_dai.depositTOKEN(amount)
    }

    handleWithdraw = (e) => {
        e.preventDefault()
        let amount = this.state.withdrawAmount
        amount = new BigNumber(amount).times(1e18).toFixed(0)
        vault_dai.withdraw(amount)
    }

    handleClaimDivs = (e) => {
        e.preventDefault()
        vault_dai.claim()
    }

    handleSetMaxDeposit = (e) => {
        e.preventDefault()
        this.setState({depositAmount: new BigNumber(this.state.token_balance).div(1e18).toFixed(18)})
    }
    handleSetMaxWithdraw = (e) => {
        e.preventDefault()
        this.setState({withdrawAmount: new BigNumber(this.state.depositedTokens).div(1e18).toFixed(18)})
    }

    
    refreshBalance = async () => {
        let coinbase = await window.getCoinbase()
        this.setState({coinbase})
        try {
            let _bal = token_dai.balanceOf(coinbase)
            let _rBal = reward_token.balanceOf(coinbase)
            let _pDivs = vault_dai.getPendingDivs(coinbase)
            let _cliffTime = vault_dai.cliffTime()
            let _tEarned = vault_dai.totalEarnedTokens(coinbase)
            let _stakingTime = vault_dai.depositTime(coinbase)
            let _dTokens = vault_dai.depositedTokens(coinbase)
            let _lClaimTime = vault_dai.lastClaimedTime(coinbase)
            let _stakers = vault_dai.getNumberOfHolders()
            let _contractBalance = token_dai.balanceOf(vault_dai._address)
            let _tTokens = vault_dai.totalTokens()

            let [token_balance, reward_token_balance, pendingDivs, cliffTime, totalEarnedTokens, stakingTime, 
            depositedTokens, lastClaimedTime, stakers, contractBalance, totalTokens] = await Promise.all([_bal,_rBal ,_pDivs, _cliffTime, _tEarned, _stakingTime, _dTokens, _lClaimTime, _stakers, _contractBalance, _tTokens])


            let totalStaked = (new BigNumber(contractBalance)).toString(10)

            let usdPerToken = await window.getPrice('yfdai-finance')
            this.setState({
                token_balance, 
                reward_token_balance,
                pendingDivs, 
                cliffTime, 
                totalEarnedTokens,
                stakingTime, 
                depositedTokens,
                lastClaimedTime,
                stakers,
                totalStaked,
                usdPerToken,
                tvlInUsd: (new BigNumber(contractBalance)).times(usdPerToken).div(1e18).toString(10),
                totalTokens
            })

            let stakingOwner = await vault_dai.owner()
            this.setState({stakingOwner})
        } catch (e) {
            console.error(e)
        }
    }


    handleListDownload = async (e) => {
        e.preventDefault()
        let m = window.alertify.message(`Processing...`)
        m.ondismiss = () => false
        let step = 100;
        let stakers = []
        let stakingTimes = []
        let lastClaimedTimes = []
        let stakedTokens = []
        let length = await vault_dai.getNumberOfHolders()
        length = Number(length)
        try {
            for (let startIndex = 0; startIndex < length; startIndex += step) {
                console.log({startIndex, endIndex: startIndex+step})
                let array = await vault_dai.getDepositorsList(startIndex, Math.min(startIndex+step, length))
                console.log(array)
                stakers = stakers.concat(array.stakers)
                stakingTimes = stakingTimes.concat(array.stakingTimestamps)
                lastClaimedTimes = lastClaimedTimes.concat(array.lastClaimedTimeStamps)
                stakedTokens = stakedTokens.concat(array.stakedTokens)
            }
            let result = {stakers, stakingTimes, lastClaimedTimes, stakedTokens}
            window.handleDownload(result)
        } catch (e) {
            console.error(e)
            alertify.error("Something went wrong while processing!")
        }
        finally {
            m.ondismiss = f => true
            m.dismiss()
        }
    }

    render() {

        let {token_balance,totalTokens, reward_token_balance, tvlInUsd, pendingDivs, totalEarnedTokens, depositedTokens, cliffTime, stakingTime, coinbase, stakers, totalStaked} = this.state

        token_balance = new BigNumber(token_balance).div(1e18).toString(10)
        token_balance = getFormattedNumber(token_balance, 6)

        reward_token_balance = new BigNumber(reward_token_balance).div(1e18).toString(10)
        reward_token_balance = getFormattedNumber(reward_token_balance, 6)

        pendingDivs = new BigNumber(pendingDivs).div(1e18).toString(10)
        pendingDivs = getFormattedNumber(pendingDivs, 6)

        totalEarnedTokens = new BigNumber(totalEarnedTokens).div(1e18).toString(10)
        totalEarnedTokens = getFormattedNumber(totalEarnedTokens, 6)

        depositedTokens = new BigNumber(depositedTokens).div(1e18).toString(10)
        depositedTokens = getFormattedNumber(depositedTokens, 6)

        totalStaked = new BigNumber(totalStaked).div(1e18).toString(10)
        totalStaked = getFormattedNumber(totalStaked, 6)

        totalTokens = new BigNumber(totalTokens).div(1e18).toString(10)
        totalTokens = getFormattedNumber(totalTokens, 6)

        stakers = new BigNumber(stakers).toString(10)
        stakers = getFormattedNumber(stakers, 0)

        tvlInUsd = getFormattedNumber(tvlInUsd, 2)

        cliffTime = cliffTime*1e3
        stakingTime = stakingTime*1e3

        let canWithdraw = true
        if (!isNaN(cliffTime) && !isNaN(stakingTime)) {
            if (Date.now() - stakingTime <= cliffTime) 
                canWithdraw = false
        }

        let isOwner = String(this.state.coinbase).toLowerCase() === String(this.state.stakingOwner).toLowerCase()

        let myShare = ""
        if (Number(totalTokens)) {
            myShare = ((depositedTokens/totalTokens)*100).toFixed(6)
        } else {
            myShare = (0).toFixed(6)
        }
        return (
            <div>
                <Header />
                <div className='container'>
        <div className='token-staking mb-5 mt-5'>

            <div className='row'>
                <div className='col-md-6 mb-5'>
                    <p className='tips text-center'>
                        Minimum lock time 90 days
                    </p>
                    <form onSubmit={this.handleDeposit}>
                        <div className='form-row'>
                            <div className='col'>
                            <button className='btn btn-block btn-lg btn-warning orange' type='submit'>
                                DEPOSIT
                            </button>
                            </div>
                            <div className='col'>
                                <div className='input-group input-group-lg'>
                                    <input value={this.state.depositAmount} onChange={e => this.setState({depositAmount: e.target.value})} className='form-control' placeholder='0' type='text' />
                                    <div className='input-group-append'>
                                        <button className='btn btn-warning orange' style={{cursor: 'pointer'}} onClick={this.handleSetMaxDeposit}>
                                            MAX
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='mt-1 text-center'><strong>0</strong><i className='orange-text'>%</i> fee for deposit.</p>

                    </form>
                    <form onSubmit={this.handleWithdraw}>
                        <div className='form-row'>
                            <div className='col'>
                            <button title={canWithdraw?'':'You recently deposited, please wait before withdrawing.'} disabled={!canWithdraw} className='btn btn-lg btn-primary btn-block' type='submit'>
                                WITHDRAW
                            </button>
                            </div>
                            <div className='col'>
                                <div className='input-group input-group-lg'>
                                    <input value={this.state.withdrawAmount} onChange={e => this.setState({withdrawAmount: e.target.value})} className='form-control' placeholder='0' type='text' />
                                    <div className='input-group-append'>
                                        <button className='btn btn-warning orange' style={{cursor: 'pointer'}} onClick={this.handleSetMaxWithdraw}>
                                            MAX
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='mt-1 text-center'><strong>0.5</strong><i className='orange-text'>%</i> fee for withdrawing.</p>

                    </form>

                    <form onSubmit={this.handleClaimDivs}>
                        <div className='form-row'>
                            <div className='col'>
                            <button className='btn btn-primary btn-block btn-lg' type='submit'>
                                CLAIM
                            </button>
                            </div>
                            <div className='col'>
                                <p className='form-control form-control-lg text-right' style={{border: 'none', paddingLeft: 0, background: 'transparent'}}><strong style={{fontSize: '1.2rem'}}>{pendingDivs}</strong> <strong className="orange-text">YFDAI</strong></p>
                            </div>
                        </div>
                    </form>
                    
                    {isOwner && <form className='mt-3' onSubmit={this.handleListDownload}>
                        <div className='form-row'>
                            <div className='col'>
                            <button className='btn btn-primary btn-block btn-lg' type='submit'>
                                DOWNLOAD DEPOSITORS LIST
                            </button>
                            </div>
                        </div>
                    </form>}
                    <div className='tips mt-5'>
                        <p className='text-center'>Tips regarding your transactions:</p>
                        <ol>
                            <li>
                                For a quicker transaction time, edit your transaction fee and choose the "Fast" option.
                            </li>
                            <br />
                            <li>
                                If you want to manually cancel a transaction just go in your Metamask Settings / Advanced and Enable Nonce. Then create a new transaction, select a Fast Fee, click Next, and in the next window 
                                add the nonce of the transaction you want to cancel which you will find in etherscan details of the transaction.
                            </li>
                        </ol>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5'>
                <div className='table-responsive'>
            <table className='table table-borderless table-sm'>
                <tbody>
                    <tr>
                        <th className='tips text-normal'>Wallet</th>
                        <td style={{fontSize: '.8rem'}} className='text-right'>
                            <Address a={coinbase} />
                        </td>
                    </tr>
                    <tr>
                        <th className='tips text-normal'>Contract</th>
                        <td style={{fontSize: '.8rem'}} className='text-right'>
                            <Address a={vault_dai._address} />
                        </td>
                    </tr>
                    <tr>
                        <th>My Balance</th>
                        <td className="text-right"><strong>{token_balance}</strong> <strong className="orange-text">LP</strong></td>
                    </tr>
                    <tr>
                        <th>My YFDAI Balance</th>
                        <td className="text-right"><strong>{reward_token_balance}</strong> <strong className="orange-text">YFDAI</strong></td>
                    </tr>
                    <tr>
                        <th>Deposited</th>
                        <td className="text-right"><strong>{depositedTokens}</strong> <strong className="orange-text">LP</strong></td>
                    </tr>
                    <tr>
                        <th>My Share</th>
                        <td className="text-right"><strong>{myShare}</strong> <strong className="orange-text">%</strong></td>
                    </tr>
                    <tr>
                        <th>Total Earned</th>
                        <td className="text-right"><strong>{totalEarnedTokens}</strong> <strong className="orange-text">YFDAI</strong></td>
                    </tr>
                    <tr>
                        <th>Pending</th>
                        <td className="text-right"><strong>{pendingDivs}</strong> <strong className="orange-text">YFDAI</strong></td>
                    </tr>
                    <tr>
                        <td style={{fontSize: '.8rem'}} colSpan='2' className='text-right'>
                            <a target='_blank' rel='noopener noreferrer' href={`${window.config.etherscan_baseURL}/token/${window.config.reward_token_address}?a=${coinbase}`}>View Transaction History on Etherscan</a> &nbsp; <i style={{fontSize: '.8rem'}} className='fas fa-external-link-alt'></i>
                        </td>
                    </tr>
                    {/* <tr className='tips text-normal'>
                        <th>TVL</th>
                        <td className="text-right"><strong>{tvlInUsd}</strong> <strong>USD</strong></td>
                    </tr> */}
                    {/* <tr className='tips text-normal'>
                        <th>Total Supply</th>
                        <td className="text-right"><strong>21,000</strong> <strong>YFDAI</strong></td>
                    </tr> */}
                    <tr className='tips text-normal'>
                        <th>Total Deposited</th>
                        <td className="text-right"><strong>{totalStaked}</strong> <strong>LP</strong></td>
                    </tr>
                    <tr className='tips text-normal'>
                        <th>Total Users</th>
                        <td className="text-right"><strong>{stakers}</strong> {/*<strong>YFDAI</strong>*/}</td>
                    </tr>
                    {/* <tr className='tips text-normal'>
                        <th>Circulating Supply</th>
                        <td className="text-right"><strong>{window.config.circulating_supply}</strong> <strong>YFDAI</strong></td>
                    </tr> */}
                </tbody>
            </table>
            </div>
            <div>
                <div style={{border: '5px solid rgb(28,55,86)'}} className='price-widget' dangerouslySetInnerHTML={{__html:`<coingecko-coin-price-chart-widget currency="usd" coin-id="yfdai-finance" locale="en" height="300"></coingecko-coin-price-chart-widget>`}}></div>
            </div>
                </div>
            </div>

            
            {/* <div className='row yfdai-staking-form'>
                <div className='col-md-4'>
                    <form onSubmit={this.handleDeposit}>
                        <div className='form-group'>
                            <label htmlFor='deposit-amount' className='d-block text-center'>Stake</label>
                            <div className='input-group'>
                                <input value={this.state.depositAmount} onChange={e => this.setState({depositAmount: e.target.value})} className='form-control' placeholder='0' type='text' />
                                <div className='input-group-append'>
                                    <button className='btn btn-primary hoverable bg-white' style={{cursor: 'pointer'}} onClick={this.handleSetMaxDeposit}>
                                        MAX
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-block btn-primary' type='submit'>
                            STAKE
                        </button>
                        <p className='mt-1 text-center'>1.5% fee for staking.</p>

                    </form>
                </div>
                <div className='col-md-4'>
                    <form onSubmit={this.handleWithdraw}>
                        <div className='form-group'>
                            <label htmlFor='deposit-amount' className='d-block text-center'>Unstake</label>
                            <div className='input-group'>
                                <input value={this.state.withdrawAmount} onChange={e => this.setState({withdrawAmount: e.target.value})} className='form-control' placeholder='0' type='text' />
                                <div className='input-group-append'>
                                    <button className='btn btn-primary hoverable bg-white' style={{cursor: 'pointer'}} onClick={this.handleSetMaxWithdraw}>
                                        <a className='text-transparent main-gradient-bg text-bold' href='#'>MAX</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button title={canWithdraw?'':'You recently staked, please wait before unstaking.'} disabled={!canWithdraw} className='btn btn-primary btn-block hoverable bg-white' type='submit'>
                            UNSTAKE
                        </button>
                        <p className='mt-1 text-center'>0.5% fee for unstaking.</p>
                    </form>
                </div>
                <div className='col-md-4'>
                    <form onSubmit={this.handleClaimDivs}>
                        <div className='form-group'>
                            <label htmlFor='deposit-amount' className='text-center d-block'>Pending</label>
                            <p className='form-control text-right' style={{border: 'none', paddingLeft: 0, color: '#fff', background: 'transparent'}}><strong style={{fontSize: '1.2rem'}}>{pendingDivs}</strong> <strong className="orange-text">YFDAI</strong></p>
                        </div>
                        <button className='btn btn-primary btn-block hoverable bg-white' type='submit'>
                            CLAIM
                        </button>
                    </form>
                </div>
            </div> */}
        </div>
        </div>
        </div>
        )
    }
}