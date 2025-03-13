<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { onMount, tick } from 'svelte';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const pollutionInfo: ModalSettings = {
		type: 'component',
		component: 'info',
		title: 'Death',
		meta: {
			btnClasses:
				'btn border bg-surface-900 text-primary-500 hover:bg-primary-500 hover:text-surface-900 hover:filter-none',
			color: 'primary-500',
			tabs: [
				{
					name: 'about',
					label: 'About',
					content: `<p>This is the Black Atlantic region. It encompasses a zone between Europe, Africa, the Americas,
	and the Caribbean. Here imagined as a geographical region, the Black Atlantic refers to a
	concept coined by Paul Gilroy. Following Gilroy, the Black Atlantic has to be thought from a
	transnational and intercultural perspective due to its colonial legacy and the transatlantic
	slave trade. While this history is omnipresent in our chosen texts, it was surprising to find
	that the expected themes of migration and death feature only rarely. Instead, we find a
	continuity of leisure as the main theme, with swimming as the most prominent activity. In line
	with the other regions, contemplativeness is a prevalent mood on the literary beaches of the
	Black Atlantic, but it is the juxtaposition of melancholy and playfulness as well as happiness
	which stands out most.</p>`
				},
				{
					name: 'regions',
					label: 'Regions',
					bars: [
						{
							label: 'Northern Seas',
							value: 18
						},
						{
							label: 'Mediterranean',
							value: 6
						},
						{
							label: 'Black Atlantic',
							value: 7
						}
					]
				},
				{
					name: 'moods',
					label: 'Moods',
					bars: [
						{
							label: 'Suspenseful',
							value: 15
						},
						{
							label: 'Melancholic',
							value: 14
						},
						{
							label: 'Sinister',
							value: 12
						},
						{
							label: 'Playful',
							value: 12
						},
						{
							label: 'Curious',
							value: 11
						},
						{
							label: 'Foreboding',
							value: 11
						},
						{
							label: 'Contemplative',
							value: 11
						}
					]
				}
				,
				{
					name: 'events',
					label: 'Events',
					bars: [
						{
							label: 'Encounter',
							value: 18
						},
						{
							label: 'Departure/Arrival',
							value: 10
						},
						{
							label: 'Conversation',
							value: 10
						},
						{
							label: 'Death',
							value: 10
						},
						{
							label: 'Introspection/Contemplation',
							value: 9
						}
					]
				},
				{
					name: 'agents',
					label: 'Agents',
					bars: [
						{
							label: 'Human',
							value: 27
						},
						{
							label: 'Mythical',
							value: 19
						},
						{
							label: 'Aquatic',
							value: 18
						},
						{
							label: 'Weather',
							value: 9
						},
						{
							label: 'Nonhuman',
							value: 8
						}
					]
				}
			]
		}
	};

	onMount(async () => {
		//check whether the cookie is set. if not, show the modal
		modalStore.trigger(pollutionInfo);
		//set the cookie to expire in 6 months
		await tick();

		//scroll to the top of the modal
		document.querySelector('.modal-body')?.scrollTo({ top: 0, behavior: 'instant' });
	});
</script>

{#snippet button(href: string, baseColor: string, hoverColor: string, text: string)}
	<a
		{href}
		class="btn border bg-{baseColor} text-{hoverColor} hover:bg-{hoverColor} hover:text-{baseColor} hover:filter-none"
	>
		{text}
	</a>
{/snippet}

{#snippet content()}
	<p>
		Upon starting this atlas, one of the primary objectives was to determine whether the perception
		of the beach as site of leisure and holiday had changed throughout the long twentieth century.
		Considering the growing awareness of global warming and climate change throughout this period,
		we were curious to see whether this was reflected in literature on the beach. While our findings
		indicate an increase in descriptions of polluted beaches, particularly from the 2000s onward,
		the overall number of texts explicitly mentioning pollution is relatively low and even when it
		does appear, it does not necessarily alter the mood of these scenes significantly.
		Interestingly, none of the texts in our Mediterranean sample explicitly refer to the pollution
		of littoral space. This opens up interesting questions concerning the aesthetic and narrative
		effects of foregrounding or hiding pollution in literary representations. Furthermore, it
		suggests that despite a slight increase in the depiction of polluted beaches, the perception of
		the beach as a space of leisure remains largely unchanged.
	</p>
{/snippet}
<!-- svelte-ignore element_invalid_self_closing_tag -->
<SidebarLayout>
	<svelte:fragment slot="sidebar">
		{#snippet buttons()}
			<ul>
				<li class="mt-2">
					{@render button(`${base}/theme/death`, `surface-900`, `primary-500`, `death`)}
				</li>
				<li class="mt-2">
					{@render button(`${base}/theme/leisure`, `surface-900`, `primary-500`, `leisure`)}
				</li>
				<li class="mt-2">
					{@render button(
						`${base}/theme/migration`,
						`surface-900`,
						`primary-500`,
						`migration and exile`
					)}
				</li>
				<li class="mt-2">
					{@render button(`${base}/theme/myth`, `surface-900`, `primary-500`, `myth`)}
				</li>
			</ul>
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
							<h2 class="h3 mt-4 mb-2">Pollution</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render content()}
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3">explore more themes</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render buttons()}
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
			<div class="hidden lg:block">
				<h2 class="h3 mt-4 mb-2">Pollution</h2>
				{@render content()}
			</div>
		</section>
		<section class="my-4 hidden lg:block">
			<h2 class="h3">explore more themes</h2>
			{@render buttons()}
		</section>
	</svelte:fragment>
	<iframe
		title="Pollution map"
		src="https://nodegoat.unibe.ch/viewer.p/58/2703/scenario/17/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
