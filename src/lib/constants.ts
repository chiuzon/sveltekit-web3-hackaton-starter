import { InjectedConnector } from '@web3-react/injected-connector'


export const injectedConnector = new InjectedConnector({
    //You can specify what chains you want to support
    supportedChainIds: [40]
})

export const AIRDROP_CONTRACT_ADDRESS = "0xbc2356C24E01c5e021e87b006433aCeF03106870"

export const ERC20_CONTRACT = [
    "function balanceOf(address account) external view returns (uint256)",
    "function decimals() external view returns (uint8)",
    "function allowance(address _owner, address spender) external view returns (uint256)",
    "function approve(address spender, uint256 amount) external returns (bool)",
    "function name() external view returns (string)"
]
