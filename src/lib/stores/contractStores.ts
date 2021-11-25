import { derived, readable } from "svelte/store";

import type {Readable} from "svelte/store"

import { svelteWeb3 } from '@chiuzon/svelteweb3'
import {ethers} from 'ethers'

import { ERC20_CONTRACT } from "$lib/constants";


export const providerOrSigner = derived(svelteWeb3().library, ($lib) => {
    if(!$lib){
        return new ethers.providers.JsonRpcProvider("https://rpc-mainnet.maticvigil.com/")
    }
    
    return $lib.getSigner() 
})

export const contractStore = (address: string, abi: any[]) => {
    return derived(providerOrSigner, ($providerOrSigner) => {
        if(!$providerOrSigner){
            console.error("!PROVIDER|SIGNER")
            return null
        }

        if(address?.length <= 0){
            console.error("!ADDRESS")
            return null
        }

        try{
            return new ethers.Contract(address, abi, $providerOrSigner)
        }catch{
            return null
        }
    })
}

export function erc20Contract(tokenAddress: string) {
    return contractStore(tokenAddress, ERC20_CONTRACT)
}

export function erc20(address: string) {

    const contract = erc20Contract(address)

    const decimals = derived([contract], ($contract, set) => {
        if(!$contract){
            return null
        }

        $contract.decimals().then((result) => set(result)).catch((e) => set(e))
    }, null)

    function balanceOf(address: string){
        return derived(contract, ($contract, set) => {
            if(!$contract){
                return null
            }

            $contract.balanceOf(address).then((result) => set(result)).catch((e) => set(null))
        }, null)
    }
    
    return {
        contract,
        decimals,
        balanceOf
    }
}
