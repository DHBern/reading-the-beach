<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

{#snippet content()}
	<p>
		This is the Black Atlantic region. It encompasses a zone between Europe, Africa, the Americas,
		and the Caribbean. Here imagined as a geographical region, the Black Atlantic refers to a
		concept coined by Paul Gilroy. Following Gilroy, the Black Atlantic has to be thought from a
		transnational and intercultural perspective due to its colonial legacy and the transatlantic
		slave trade. While this history is omnipresent in our chosen texts, it was surprising to find
		that the expected themes of migration and death feature only rarely. Instead, we find a
		continuity of leisure as the main theme, with swimming as the most prominent activity. In line
		with the other regions, contemplativeness is a prevalent mood on the literary beaches of the
		Black Atlantic, but it is the juxtaposition of melancholy and playfulness as well as happiness
		which stands out most.
	</p>
{/snippet}
<!-- svelte-ignore element_invalid_self_closing_tag -->
<SidebarLayout>
	<svelte:fragment slot="sidebar">
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
		<a
			class="btn btn-sm w-fit mt-2 border bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none"
			href="{base}/"><span><i class="fa-solid fa-arrow-left"></i></span><span>main map</span></a
		>
		<section class="overflow-scroll">
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
