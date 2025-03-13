<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { onMount, tick } from 'svelte';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const deathInfo: ModalSettings = {
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
							value: 29
						},
						{
							label: 'Mediterranean',
							value: 14
						},
						{
							label: 'Black Atlantic',
							value: 2
						}
					]
				},
				{
					name: 'moods',
					label: 'Moods',
					bars: [
						{
							label: 'Catastrophic',
							value: 19
						},
						{
							label: 'Sinister',
							value: 17
						},
						{
							label: 'Suspenseful',
							value: 16
						},
						{
							label: 'Contemplative',
							value: 15
						},
						{
							label: 'Sad',
							value: 14
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
							value: 14
						},
						{
							label: 'Murder',
							value: 14
						},
						{
							label: 'Bathing/Swimming',
							value: 13
						},
						{
							label: 'Conversation',
							value: 11
						},
						{
							label: 'Death',
							value: 11
						}
					]
				},
				{
					name: 'agents',
					label: 'Agents',
					bars: [
						{
							label: 'Human',
							value: 38
						},
						{
							label: 'Aquatic',
							value: 26
						},
						{
							label: 'Weather',
							value: 13
						},
						{
							label: 'Nonhuman',
							value: 10
						},
						{
							label: 'Corpse/Carcass',
							value: 8
						}
					]
				}
			]
		}
	};

	onMount(async () => {
		//check whether the cookie is set. if not, show the modal
		modalStore.trigger(deathInfo);
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
		Death is a theme that features consistently in literary beach scenes throughout the long
		twentieth century, illustrating the dual role of the beach as both a site of relaxation and play
		as well as potential danger. Its transient nature, ideal for hiding traces and obscuring
		evidence, makes the beach a compelling setting for crime fiction and murder mysteries. The tides
		can pull people into the water and also wash death ashore, for example in the form of
		shipwrecked bodies and beached whales. This underscores the agential capacity of the beach in
		narratives, as well as its ability to foreground issues of increasing relevance, such as
		environmental degradation and pollution. As such, this theme highlights the function of the
		beach as a liminal setting where life, death and decay intersect.
	</p>
{/snippet}
<!-- svelte-ignore element_invalid_self_closing_tag -->
<SidebarLayout>
	<svelte:fragment slot="sidebar">
		{#snippet buttons()}
			<ul>
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
				<li class="mt-2">
					{@render button(`${base}/theme/pollution`, `surface-900`, `primary-500`, `pollution`)}
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
							<h2 class="h3 mt-4 mb-2">Death</h2>
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
				<h2 class="h3 mt-4 mb-2">Death</h2>
				{@render content()}
			</div>
		</section>
		<section class="my-4 hidden lg:block">
			<h2 class="h3">explore more themes</h2>
			{@render buttons()}
		</section>
	</svelte:fragment>
	<iframe
		title="Death map"
		src="https://nodegoat.unibe.ch/viewer.p/59/2703/scenario/18/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
