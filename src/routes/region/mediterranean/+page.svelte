<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { onMount, tick } from 'svelte';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const mediterraneanInfo: ModalSettings = {
		type: 'component',
		component: 'info',
		title: 'Mediterranean',
		meta: {
			region: 'mediterranean',
			btnClasses:
				'btn border bg-tertiary-500 text-surface-900 hover:bg-surface-900 hover:text-tertiary-500 hover:filter-none',
			color: 'tertiary-500',
			tabs: [
				{
					name: 'about',
					label: 'About',
					content: `<p>This is the Mediterranean region. It includes texts set in southern Europe, Asia Minor, and Northern Africa. In these texts, the Mediterranean functions as a holiday destination, but also as a link between north and south, east and west. This is reflected in the main events associated with Mediterranean beaches: leisure activities, such as sunbathing and swimming, but also encounters, arrivals, departures, and murder. Despite the fact that vacationscape is a prominent frame for literary scenes set on Mediterranean beaches, the mood is often contemplative or foreboding. This suggests that the Mediterranean is an ambivalent space, a site of tension in which different interests grapple with each other and in which carefree holiday atmospheres can quickly tip into something more sinister.</p>`
				},
				{
					name: 'themes',
					label: 'Themes',
					bars: [
						{
							label: 'Myth',
							value: 6
						},
						{
							label: 'Migration and Exile',
							value: 7
						},
						{
							label: 'Death',
							value: 14
						},
						{
							label: 'Leisure',
							value: 15
						},
						{
							label: 'Pollution',
							value: 0
						}
					]
				}
				,
				{
					name: 'events',
					label: 'Events',
					bars: [
						{
							label: 'Bathing/Swimming',
							value: 12
						},
						{
							label: 'Encounter',
							value: 9
						},
						{
							label: 'Sunbathing',
							value: 6
						},
						{
							label: 'Murder',
							value: 5
						},
						{
							label: 'Departure/Arrival',
							value: 5
						}
					]
				},
				{
					name: 'moods',
					label: 'Moods',
					bars: [
						{
							label: 'Contemplative',
							value: 9
						},
						{
							label: 'Foreboding',
							value: 9
						},
						{
							label: 'Sinister',
							value: 7
						},
						{
							label: 'Idyllic',
							value: 7
						},
						{
							label: 'Happy',
							value: 6
						}
					]
				}
			]
		}
	};

	onMount(async () => {
		//check whether the cookie is set. if not, show the modal
		modalStore.trigger(mediterraneanInfo);
		//set the cookie to expire in 6 months
		await tick();

		//scroll to the top of the modal
		document.querySelector('.modal-body')?.scrollTo({ top: 0, behavior: 'instant' });
	});
</script>

{#snippet content()}
	<p>
		This is the Mediterranean region. It includes texts set in southern Europe, Asia Minor, and
		Northern Africa. In these texts, the Mediterranean functions as a holiday destination, but also
		as a link between north and south, east and west. This is reflected in the main events
		associated with Mediterranean beaches: leisure activities, such as sunbathing and swimming, but
		also encounters, arrivals, departures, and murder. Despite the fact that vacationscape is a
		prominent frame for literary scenes set on Mediterranean beaches, the mood is often
		contemplative or foreboding. This suggests that the Mediterranean is an ambivalent space, a site
		of tension in which different interests grapple with each other and in which carefree holiday
		atmospheres can quickly tip into something more sinister.
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
						href="{base}/region/northern-sea"
						class="btn border bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500 hover:filter-none"
					>
						Northern Seas
					</a>
				</li>
			</ul>
		{/snippet}
		{#snippet icons()}
			<dl class="my-2 flex gap-2 items-center flex-wrap lg:grid">
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/mediterranean/M_death.svg" alt="death icon" />
					</dt>
					<dd class="mr-4">Death</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/mediterranean/M_leisure.svg" alt="leisure icon" />
					</dt>
					<dd class="mr-4">Leisure</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/mediterranean/M_migration.svg" alt="migration icon" />
					</dt>
					<dd class="mr-4">Migration</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/mediterranean/M_myth.svg" alt="myth icon" />
					</dt>
					<dd class="mr-4">Myth</dd>
				</div>
				<div class="contents lg:flex gap-2 items-center">
					<dt>
						<enhanced:img src="$lib/icons/mediterranean/M_pollution.svg" alt="pollution icon" />
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
							<h2 class="h3 mt-4 mb-2">Mediterranean</h2>
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
				<h2 class="h3 mt-4 mb-2">Mediterranean</h2>
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
		title="Mediterranean map"
		src="https://nodegoat.unibe.ch/viewer.p/34/2703/scenario/5/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
