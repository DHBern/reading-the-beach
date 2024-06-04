<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<!-- svelte-ignore element_invalid_self_closing_tag -->
<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<a
			class="btn btn-sm w-fit mt-2 border bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none"
			href="{base}/"><span><i class="fa-solid fa-arrow-left"></i></span><span>main map</span></a
		>
		<section class="overflow-scroll">
			{#snippet content()}
				<p>
					These literary representations reflect the importance of the beach in everyday culture, as
					a vacation site, a contact zone, a site of capitalist production and, in recent years, an
					arrival zone for refugees and a scene of terrorist attacks. With the irrefutability of
					global warming, the littoral ecotone has also emerged as a site where its effects have
					become most dramatically visible.
				</p>
				<p>
					These literary representations reflect the importance of the beach in everyday culture, as
					a vacation site, a contact zone, a site of capitalist production and, in recent years, an
					arrival zone for refugees and a scene of terrorist attacks. With the irrefutability of
					global warming, the littoral ecotone has also emerged as a site where its effects have
					become most dramatically visible.
				</p>
			{/snippet}
			{#snippet buttons()}
				<ul>
					<li class="mt-2">
						<a
							href="{base}/region/mediterranean"
							class="btn border bg-tertiary-500 text-surface-900 hover:bg-surface-900 hover:text-tertiary-500 hover:filter-none"
							>Mediterranean</a
						>
					</li>
					<li class="mt-2">
						<a
							href="{base}/region/northern-sea"
							class="btn border bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500"
							>Northern Seas</a
						>
					</li>
				</ul>
			{/snippet}
			{#snippet icons()}
				<dl class="my-2 flex gap-2 items-center flex-wrap lg:grid">
					<div class="contents lg:flex gap-2 items-center">
						<dt>
							<enhanced:img src="$lib/icons/black-atlantic/BA_death.svg" alt="death icon" />
						</dt>
						<dd class="mr-4">Death</dd>
					</div>
					<div class="contents lg:flex gap-2 items-center">
						<dt>
							<enhanced:img src="$lib/icons/black-atlantic/BA_leisure.svg" alt="leisure icon" />
						</dt>
						<dd class="mr-4">Leisure</dd>
					</div>
					<div class="contents lg:flex gap-2 items-center">
						<dt>
							<enhanced:img src="$lib/icons/black-atlantic/BA_migration.svg" alt="migration icon" />
						</dt>
						<dd class="mr-4">Migration</dd>
					</div>
					<div class="contents lg:flex gap-2 items-center">
						<dt>
							<enhanced:img src="$lib/icons/black-atlantic/BA_myth.svg" alt="myth icon" />
						</dt>
						<dd class="mr-4">Myth</dd>
					</div>
					<div class="contents lg:flex gap-2 items-center">
						<dt>
							<enhanced:img src="$lib/icons/black-atlantic/BA_pollution.svg" alt="pollution icon" />
						</dt>
						<dd class="mr-4">Pollution</dd>
					</div>
				</dl>
			{/snippet}
			<div class="lg:hidden">
				<Accordion class="fill-primary-500" padding="pl-0 pr-4 py-2">
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3 mt-4 mb-2">Black Atlantic</h2>
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
				<h2 class="h3 mt-4 mb-2">Black Atlantic</h2>
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
		title="Black Atlantic map"
		src="https://nodegoat.unibe.ch/viewer.p/47/2703/scenario/16/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
