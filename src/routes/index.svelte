<script lang="ts">
	import { svelteWeb3 } from '@chiuzon/svelteweb3'
    const { error, account } = svelteWeb3()

    import {erc20} from '$lib/stores/contractStores'
    import { _if } from '$lib/helpers/renderHelper';
    import { ethers } from 'ethers';

    let addressFormInput = ""

    //Validating
    $: address = ethers.utils.isAddress(addressFormInput) ? addressFormInput : ''

    //Recreating based on input
    $: ({decimals, contract} = erc20(address))

    $: console.log($decimals)
</script>

<input bind:value={addressFormInput} />

{#if $contract}
    {_if($decimals, `Contract has: ${$decimals}`)}
{/if}



