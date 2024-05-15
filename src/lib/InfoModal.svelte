<script lang="ts">
	import { getModalStore, TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';

	const modalStore = getModalStore();

	let tabSet = 0;
</script>

<div
	class="modal block overflow-y-auto bg-surface-100-800-token w-modal h-auto p-4 space-y-4 rounded-container-token shadow-xl"
>
	{#if $modalStore[0]}
		<header class="modal-header text-2xl font-bold">{$modalStore[0].title}</header>
		<article class="modal-body max-h-[200px] overflow-hidden flex flex-col">
			<TabGroup>
				{#each $modalStore[0]?.meta?.tabs || [] as tab, i}
					<Tab bind:group={tabSet} name={tab.name} value={i}>{tab.label}</Tab>
				{/each}
				<svelte:fragment slot="panel">
					{@html $modalStore[0]?.meta?.tabs?.[tabSet]?.content}
				</svelte:fragment>
			</TabGroup>
			<a
				href="{base}/region/{$modalStore[0].meta.region}"
				class="{$modalStore[0].meta.btnClasses} self-center"
				on:click={() => modalStore.close()}
			>
				Enter region
			</a>
		</article>
	{/if}
</div>
