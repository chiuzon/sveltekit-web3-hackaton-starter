<script lang="ts">
	import { svelteWeb3 } from '@chiuzon/svelteweb3'
    const { error, account } = svelteWeb3()

    import {erc20} from '$lib/stores/contractStores'
    import { _if } from '$lib/helpers/renderHelper';
    import { ethers } from 'ethers';

    let addressFormInput = ""

    //Validating address
    $: address = ethers.utils.isAddress(addressFormInput) ? addressFormInput : ''

    //Recreating erc20 contract based on input
    $: ({decimals, contract, balanceOf} = erc20(address))
    
    //Fetch the balance 
    $: balance = balanceOf(address)
</script>

{#if $contract}
    
    {$balance}

    {_if($decimals, `Contract has: ${$decimals}`)}
{/if}

<input bind:value={addressFormInput} />



