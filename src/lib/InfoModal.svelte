<script lang="ts">
	import { getModalStore, TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';

	const modalStore = getModalStore();

	let tabSet = 0;
</script>

<div
	class="modal block overflow-y-auto bg-surface-900 w-modal h-auto p-4 space-y-4 rounded-container-token shadow-xl"
>
	{#if $modalStore[0]}
		{@const tabs = $modalStore[0]?.meta?.tabs}
		{@const currentTab = tabs?.[tabSet]}
		<header class="modal-header text-2xl font-bold">{$modalStore[0].title}</header>
		<article class="modal-body overflow-hidden flex flex-col">
			<TabGroup border="border-b border-primary-500">
				{#each tabs || [] as tab, i}
					<Tab bind:group={tabSet} name={tab.name} value={i}>{tab.label}</Tab>
				{/each}
				<svelte:fragment slot="panel">
					{#if currentTab?.content}
						{@html currentTab?.content}
					{/if}
					{#if currentTab?.bars}
						<dl class="grid grid-cols-[200px_1fr] gap-2 place-items-baseline">
							{#each currentTab?.bars || [] as bar}
								{@const barwidth = 20}
								{@const gap = 5}
								<dt class="text-sm font-bold">{bar.label}</dt>
								<dd class="text-sm">
									<svg
										viewBox="0 0 {(barwidth + gap) *
											Math.max.apply(
												null,
												currentTab?.bars.map((b) => b.value)
											)} 50"
										style="color: rgba(var(--color-{$modalStore[0]?.meta?.color}) / 1)"
										class="max-h-full max-w-full h-12"
									>
										{#each { length: bar.value } as _, i}
											<rect
												x={(barwidth + gap) * i}
												width={barwidth}
												height="50"
												fill="currentColor"
											></rect>
										{/each}
									</svg>
								</dd>
								<hr class="col-span-full w-full !border-primary-500" />
							{/each}
						</dl>
					{/if}
				</svelte:fragment>
			</TabGroup>
			<a
				href="{base}/region/{$modalStore[0].meta.region}"
				class="{$modalStore[0].meta.btnClasses} self-center mt-5"
				on:click={() => modalStore.close()}
			>
				Enter region
			</a>
		</article>
	{/if}
</div>
