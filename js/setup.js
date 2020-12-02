window.config = {
    token_lp_address: "0xDc75AD27615737aa0B3022fB6c1DC407CFfaD43a",
    token_dai_address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    token_weth_address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', 
    reward_token_address: '0xe0c1002b67691409bf2b82003E0fad78fBA7FBfB',
    
    vault_dai_address: '0xB5580A6A0F03798aAB71B10435d549840Dc2892b',
    
    vault_lp_address: '0x8214Dec04dB73B93eAFDfcae93551CcB9C6BdB69',
    vault_lp_30_address: '0x1Fe5352aA9d68FDCcD32DedDDD011238427fB216',
    vault_lp_35_address: '0x7DB8a8e6c52E93C3761Af328b58fbE3448b89130',
    vault_lp_45_address: '0xfa244C0A5CB2d86095603f8049C0BF69C956a539',
    
    vault_weth_address: '0xA4fC4fBD33B5527Ee6B79C473D0CC3E0e152589A',
    
    etherscan_baseURL: 'https://etherscan.io',
    default_gasprice_gwei: 40,
    default_gas_amount: 300000,
    circulating_supply: '30,000'
}

window.vaults = [{
    logo: '/images/dai-logo.png',
    name: 'DAI Vault',
    description: 'Deposit DAI and earn HEROEX',
    return_heading: 'Vault Return',
    return_description: 'APY: 48%',
    link: '/vault-dai'
},
{
    logo: '/images/usdt-logo.png',
    name: 'HEROEX/USDT LP Vault\n7 Days Locking',
    description: 'Deposit LP and earn HEROEX',
    return_heading: 'Pool Rewards',
    return_description: '150 HEROEX / month',
    link: '/vault-weth'
},
{
    logo: '/images/weth-logo.png',
	name: 'HEROEX/ETH LP Vault\n7 Days Locking',
	description: 'Deposit LP and earn HEROEX',
    return_heading: 'Pool Rewards',
    return_description: '150 HEROEX / month',
    link: '/vault-lp'
},, {
    logo: '/images/weth-logo.png',
    name: 'HEROEX/ETH LP Vault\n15 Days Locking',
    description: 'Deposit LP and earn HEROEX',
    return_heading: 'Pool Rewards',
    return_description: '300 HEROEX / month',
    link: '/vault-lp-30'
}, {
    logo: '/images/uni-v2.webp',
    name: 'HEROEX/ETH LP Vault\n60 Days Locking',
    description: 'Deposit LP and earn HEROEX',
    return_heading: 'Pool Rewards',
    return_description: '350 HEROEX / month',
    link: '/vault-lp-35'
}, {
    logo: '/images/uni-v2.webp',
    name: 'HEROEX/ETH LP Vault\n90 Days Locking',
    description: 'Deposit LP and earn HEROEX',
    return_heading: 'Pool Rewards',
    return_description: '450 HEROEX / month',
    link: '/vault-lp-45'
}
]

window.VAULT_TIMELY_ABI = 


[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"inputs":[],"name":"adminCanClaimAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminClaimableTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cliffTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToDeposit","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getDepositorsList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardInterval","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardRatePercentX100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferAnyERC20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustedDepositTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedRewardTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vaultDeployTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vaultDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vaultEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFeePercentX100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]



window.VAULT_PRO_RATA_ABI =


[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsDisbursed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardsTransferred","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"addContractBalance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"adminCanClaimAfter","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminClaimableTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"cliffTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractDeployTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToDeposit","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disburseAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disburseDuration","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disbursePercentX100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"disburseTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"startIndex","type":"uint256"},{"internalType":"uint256","name":"endIndex","type":"uint256"}],"name":"getDepositorsList","outputs":[{"internalType":"address[]","name":"stakers","type":"address[]"},{"internalType":"uint256[]","name":"stakingTimestamps","type":"uint256[]"},{"internalType":"uint256[]","name":"lastClaimedTimeStamps","type":"uint256[]"},{"internalType":"uint256[]","name":"stakedTokens","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNumberOfHolders","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPendingDisbursement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_holder","type":"address"}],"name":"getPendingDivs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDisburseTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastDivPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalClaimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalDivPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalEarnedTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTokensDisbursed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddr","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferAnyERC20Tokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"trustedDepositTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"trustedRewardTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountToWithdraw","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawFeePercentX100","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]

window.VAULT_DAI_ABI = window.VAULT_TIMELY_ABI
window.VAULT_WETH_ABI = window.VAULT_TIMELY_ABI
window.VAULT_LP_ABI = window.VAULT_PRO_RATA_ABI
window.VAULT_LP_30_ABI = window.VAULT_PRO_RATA_ABI
window.VAULT_LP_35_ABI = window.VAULT_PRO_RATA_ABI
window.VAULT_LP_45_ABI = window.VAULT_PRO_RATA_ABI

window.TOKEN_ABI = 

[{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_owner","type":"address"},{"indexed":true,"internalType":"address","name":"_spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":true,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"acceptOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"changeOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]

window.REWARD_TOKEN_ABI = window.TOKEN_ABI
window.TOKEN_DAI_ABI = window.TOKEN_ABI
window.TOKEN_LP_ABI = window.TOKEN_ABI
window.TOKEN_WETH_ABI = window.TOKEN_ABI

window.cached_contracts = {}

// function to connect metamask
async function connectWallet() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum)
        try {
            await window.ethereum.enable()
            console.log("Connected!")
            return true;
        } catch (e) {
            console.error(e)
            throw new Error("User denied wallet connection!")
        }
    } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider)
        console.log("connected to old web3")
        return true
    } else {
        throw new Error("No web3 detected!")
    }
}


async function getContract(key) {
    let ABI = window[key+'_ABI']
    let address = window.config[key.toLowerCase()+'_address']
    if (!window.cached_contracts[key]) {
        window.cached_contracts[key] = new window.web3.eth.Contract(ABI, address, {from: await window.web3.eth.getCoinbase()})
    }
    
    return window.cached_contracts[key]
}


function getCoinbase() {
    return window.web3.eth.getCoinbase()
}


class TOKEN {
    constructor(ticker='REWARD_TOKEN') {
        this.ticker = ticker
        let address = window.config[ticker.toLowerCase()+'_address']
        this._address = address
    }
    async transfer(to, amount) {
        let contract = await getContract(this.ticker)
        return (await contract.methods.transfer(to, amount).send({gas: window.config.default_gas_amount, from: await window.web3.eth.getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
    }
    async totalSupply() {
        let contract = await getContract(this.ticker)
        return (await contract.methods.totalSupply().call())
    }
    async approve(spender, amount) {
        let contract = await getContract(this.ticker)
        return (await contract.methods.approve(spender, amount).send({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
    }
    async balanceOf(address) {
        let contract = await getContract(this.ticker)
        return (await contract.methods.balanceOf(address).call())
    }
}

class VAULT_TIMELY {
    constructor(ticker="VAULT_DAI", token="TOKEN_DAI") {
        this.ticker = ticker;
        let address = window.config[ticker.toLowerCase()+'_address']
        this._address = address

        this.token = token;

        [
            "owner",
            "cliffTime", 
            "depositedTokens", 
            "depositTime", 
            "lastClaimedTime", 
            "totalEarnedTokens",
            "getPendingDivs",
            "getNumberOfHolders",
            "getDepositorsList"
        ].forEach(fn_name => {
            this[fn_name] = async function(...args) {
                let contract = await getContract(ticker)
                return (await contract.methods[fn_name](...args).call())
            }
        });


        [
            "withdraw",
            "emergencyWithdraw",
            "deposit",
            "claim"
        ].forEach(fn_name => {
            this[fn_name] = async function(...args) {
                let contract = await getContract(ticker)
                return (await contract.methods[fn_name](...args).send({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
            }
        })
    }

    async depositTOKEN(amount) {
        let token_contract = await getContract(this.token)
        let vault_contract = await getContract(this.ticker)
        let batch = new window.web3.eth.BatchRequest()
        batch.add(token_contract.methods.approve(vault_contract._address, amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
        batch.add(vault_contract.methods.deposit(amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
        return batch.execute()
    }

}


class VAULT_PRO_RATA {
    constructor(ticker="VAULT_LP", token="TOKEN_LP") {
        this.ticker = ticker;
        let address = window.config[ticker.toLowerCase()+'_address']
        this._address = address
        this.token = token;
        [
            "owner",
            "cliffTime", 
            "depositedTokens", 
            "depositTime", 
            "lastClaimedTime", 
            "totalEarnedTokens",
            "getPendingDivs",
            "getNumberOfHolders",
            "getDepositorsList",
            "totalTokens"
        ].forEach(fn_name => {
            this[fn_name] = async function(...args) {
                let contract = await getContract(ticker)
                return (await contract.methods[fn_name](...args).call())
            }
        });


        [
            "withdraw",
            "deposit",
            "emergencyWithdraw",
            "claim"
        ].forEach(fn_name => {
            this[fn_name] = async function(...args) {
                let contract = await getContract(ticker)
                return (await contract.methods[fn_name](...args).send({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
            }
        })
    }

    async depositTOKEN(amount) {
        let token_contract = await getContract(this.token)
        let vault_contract = await getContract(this.ticker)
        let batch = new window.web3.eth.BatchRequest()
        batch.add(token_contract.methods.approve(vault_contract._address, amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
        batch.add(vault_contract.methods.deposit(amount).send.request({gas: window.config.default_gas_amount, from: await getCoinbase(), gasPrice: window.config.default_gasprice_gwei*1e9}))
        return batch.execute()
    }

}

function getPrice(coingecko_id='ethereum', vs_currency='usd') {
    return new Promise((resolve, reject) => {
        window.$.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coingecko_id}&vs_currencies=${vs_currency}`)
            .then((result) => {
                resolve(result[coingecko_id][vs_currency])
            })
            .catch((error) => {
                reject(error)
            })
    })
}

window.getPrice = getPrice


window.reward_token = new TOKEN
window.token_lp = new TOKEN("TOKEN_LP")
window.token_dai = new TOKEN("TOKEN_DAI")
window.token_weth = new TOKEN("TOKEN_WETH")

window.vault_dai = new VAULT_TIMELY
window.vault_weth = new VAULT_TIMELY("VAULT_WETH", "TOKEN_WETH")
window.vault_lp = new VAULT_PRO_RATA
window.vault_lp_30 = new VAULT_PRO_RATA('VAULT_LP_30')
window.vault_lp_35 = new VAULT_PRO_RATA('VAULT_LP_35')
window.vault_lp_45 = new VAULT_PRO_RATA('VAULT_LP_45')