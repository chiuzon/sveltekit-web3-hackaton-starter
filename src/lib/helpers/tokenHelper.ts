import { ethers } from "ethers"
import { svelteWeb3 } from "@chiuzon/svelteweb3"
import { get } from "svelte/store"
import { ERC20_CONTRACT } from "$lib/constants"

export function isTokenValid(tokenAddress: string): boolean {
    try {
        return new ethers.Contract(tokenAddress, ERC20_CONTRACT, get(svelteWeb3().library).getSigner()) != undefined
    }catch{
        return false
    }
}