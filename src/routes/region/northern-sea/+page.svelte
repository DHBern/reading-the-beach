<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

{#snippet content()}
	<p>
		This is the Northern Seas region, encompassing texts set in countries bordering the North Sea,
		the Baltic Sea, parts of the North Atlantic Ocean, and the Norwegian Sea. Literary scenes here
		often evoke moods of curiosity, and contemplation, in suspense between happy and melancholic,
		with prominent events including introspection and encounters . Unlike the exuberant
		vacationscape of the Mediterranean, leisure in the Northern Seas often involves subtler, more
		introverted activities. This region also features the most pollution-themed texts, where leisure
		and pollution frequently appear together. This juxtaposition suggests the enduring idea of the
		beach as a place of leisure despite the growing visibility of anthropogenic pollution.
	</p>
{/snippet}
<!-- svelte-ignore element_invalid_self_closing_tag -->
<SidebarLayout>
	<svelte:fragment slot="sidebar">
		{#snippet buttons()}
			<ul>
				<li class="mt-2">
					<a
						href="{base}/region/black-atlantic"
						class="btn border bg-secondary-500 text-surface-900 hover:bg-surface-900 hover:text-secondary-500 hover:filter-none"
					>
						Black Atlantic
					</a>
				</li>
				<li class="mt-2">
					<a
						href="{base}/region/mediterranean"
						class="btn border bg-tertiary-500 text-surface-900 hover:bg-surface-900 hover:text-tertiary-500 hover:filter-none"
					>
						Mediterranean
					</a>
				</li>
			</ul>
		{/snippet}
		{#snippet icons()}
			<dl class="my-2 flex gap-2 items-center flex-wrap lg:grid">
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/northern-seas/N_death.svg" alt="death icon" />
					</dt>
					<dd class="mr-4">Death</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/northern-seas/N_leisure.svg" alt="leisure icon" />
					</dt>
					<dd class="mr-4">Leisure</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/northern-seas/N_migration.svg" alt="migration icon" />
					</dt>
					<dd class="mr-4">Migration</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/northern-seas/N_myth.svg" alt="myth icon" />
					</dt>
					<dd class="mr-4">Myth</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/northern-seas/N_pollution.svg" alt="pollution icon" />
					</dt>
					<dd class="mr-4">Pollution</dd>
				</div>
			</dl>
		{/snippet}
		<a
			class="btn btn-sm w-fit mt-2 border bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none"
			href="{base}/"><span><i class="fa-solid fa-arrow-left"></i></span><span>main map</span></a
		>
		<section class="overflow-scroll">
			<div class="lg:hidden">
				<Accordion class="fill-primary-500" padding="pl-0 pr-4 py-2">
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3 mt-4 mb-2">Northern Seas</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render content()}
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3">Legend</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render icons()}
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3">explore more regions</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render buttons()}
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
			<div class="hidden lg:block">
				<h2 class="h3 mt-4 mb-2">Northern Seas</h2>
				{@render content()}
			</div>
		</section>
		<section class="my-4 hidden lg:block">
			<h2 class="h3">Legend</h2>
			{@render icons()}
		</section>
		<section class="my-4 hidden lg:block">
			<h2 class="h3">explore more regions</h2>
			{@render buttons()}
		</section>
	</svelte:fragment>
	<iframe
		title="Northern Seas map"
		src="https://nodegoat.unibe.ch/viewer.p/48/2703/scenario/14/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
