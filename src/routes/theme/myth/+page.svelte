<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import { onMount, tick } from 'svelte';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { getModalStore } from '@skeletonlabs/skeleton';

	const modalStore = getModalStore();

	const mythInfo: ModalSettings = {
		type: 'component',
		component: 'info',
		title: 'Black Atlantic',
		meta: {
			region: 'black-atlantic',
			btnClasses:
				'btn border bg-secondary-500 text-surface-900 hover:bg-surface-900 hover:text-secondary-500 hover:filter-none',
			color: 'secondary-500',
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
					name: 'event',
					label: 'Event',
					bars: [
						{
							label: 'Contemplative',
							value: 9
						},
						{
							label: 'Morbid',
							value: 5
						},
						{
							label: 'Curious',
							value: 3
						}
					]
				}
			]
		}
	};

	onMount(async () => {
		//check whether the cookie is set. if not, show the modal
		modalStore.trigger(mythInfo);
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
		The category “Myth” includes a variety of aspects such as re-writings of classical myths and
		folklore as well as the appearance of mythological and fantastical creatures. In our selection
		of texts, we found that mermaids, selkies and other merfolk appear more in the Northern Seas and
		Black Atlantic regions, while the Mediterranean features more rewritings of classical myths.
		Between the 1950s and the 1990s, myth appears to have disappeared from the shores to resurface
		with full force in the 21st century. This gap could potentially be explained by the presence of
		more monstrous figures, e.g. gigantic reptilians, in aquatic settings expressing anxieties on
		nuclear threats during the mid-twentieth century. Since around the turn of the millennium, there
		has been a growing interest in rewritings of myth and folklore foregrounding the perspective of
		women.
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
							<h2 class="h3 mt-4 mb-2">Myth</h2>
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
				<h2 class="h3 mt-4 mb-2">Myth</h2>
				{@render content()}
			</div>
		</section>
		<section class="my-4 hidden lg:block">
			<h2 class="h3">explore more themes</h2>
			{@render buttons()}
		</section>
	</svelte:fragment>
	<iframe
		title="Myth map"
		src="https://nodegoat.unibe.ch/viewer.p/49/2703/scenario/12/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
