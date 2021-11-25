<script lang="ts">
	import { svelteWeb3 } from '@chiuzon/svelteweb3'
    const { error, account } = svelteWeb3()

    import {erc20, providerOrSigner, erc20Contract} from '$lib/stores/contractStores'
    import { onMount } from 'svelte';
    import { _if } from '$lib/helpers/renderHelper';

    let address = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619"

    const {decimals, contract} = erc20(address)

    onMount(() => {
        console.log($contract)
    })

    $: console.log($contract)
    $: console.log($providerOrSigner)
</script>


<p>Decimals</p>
{#if $contract}
    {_if($decimals, `Contract has: ${$decimals}`)}
{/if}



