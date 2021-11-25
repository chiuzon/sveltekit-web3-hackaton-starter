<script lang="ts">
    import Layout from '$lib/components/Layout.svelte'

    import Web3Wrapper from '@chiuzon/svelteweb3/Web3Wrapper.svelte'
    import { ethers } from 'ethers'

    const fetchLibrary = (provider: any) => {
        const _provider = new ethers.providers.Web3Provider(provider)
        _provider.pollingInterval = 1000
        return _provider
    }
</script>

<svelte:head>
    <title>Svelte Hackaton Template</title>
</svelte:head>

<Web3Wrapper fetchLibrary={fetchLibrary}>
    <Layout>
        <slot />
    </Layout>
</Web3Wrapper>
