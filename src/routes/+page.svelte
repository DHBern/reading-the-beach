<script lang="ts">
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { base } from '$app/paths';
	import MapImage from '$lib/Worldmap-Base.png?enhanced';
	//@ts-ignore
	import dimensions from '$lib/Worldmap-Base.png?as=meta:height;width';
	import { getModalStore, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { onMount, tick } from 'svelte';

	const modalStore = getModalStore();

	const info: ModalSettings = {
		type: 'component',
		component: 'info',
		title: 'Info',
		meta: {
			btnClasses: 'btn border btn-primary-500',
			color: 'secondary-500',
			tabs: [
				{
					name: 'project',
					label: 'Project',
					content: `<div class="prose">
					<p>This atlas was created as a part of our SNSF project on The Beach in the Long Twentieth Century (<a class="anchor" href="https://data.snf.ch/grants/grant/192810" target="_blank">100012_192810 / 1</a>). It links the four individual projects that the team members worked on. The fact that it emerged from these different projects results in the following biases:</p>
					<ul class="list-disc list-outside ml-4">
						<li>Since two of our sub-projects explicitly concentrated on the Northern Seas and the Mediterranean respectively, there is an uneven distribution of texts per region. This results in fewer texts set in the Black Atlantic.</li>
						<li>While we aimed to offer a representative sample of texts from the period of the long twentieth century, despite the fact that three of our sub-projects focus on the second half of the century, the temporal distribution of texts varies. This might partly also be due to the fluctuating popularity of the beach as a literary setting across the twentieth century.</li>
						<li>Only one sub-project focuses on nonfictional texts, which results in an overrepresentation of these texts in the Northern Seas region.</li>
						<li>The project mainly explored anglophone literature, but individual sub-projects also have a comparative perspective, which is reflected in our corpus.</li>
					</ul>
					</div>`
				},
				{
					name: 'team',
					label: 'Team',
					content: `<div class="prose"><p><i>Guðrun í Jákupsstovu</i> is a PhD candidate in the project. Her dissertation examines contemporary British and Scandinavian nature writing texts that portray “encounters with time” in littoral spaces, such as beaches, coasts, and islands and explores how these enable temporal experiences and understandings in relation to climate change. For the atlas, she explores how pollution and climate change are reflected in the coastal environments of her texts, as well as the role of myth in tandem with these topics.</p>
					<p><i>Ursula Kluwick</i> is Senior Researcher in the project. She specialises in representations of water and the beach, and her book <a class="anchor" href="https://www.upress.virginia.edu/title/5983/" target="_blank">Haunting Ecologies: Victorian Water Writing</a> is just out with the University of Virginia Press (2024). Her current book project deals with the representation of the Mediterranean beach since the 1950s, and her selection of texts for the atlas shows the wealth of themes associated with this region, particularly leisure, migration and exile, and myth.</p>
					<p><i>Virginia Richter</i> is the PI of the project. She has a longstanding interest in the beach and together with Ursula Kluwick, she organised an early conference (2009) and edited <a class="anchor" href="https://www.routledge.com/The-Beach-in-Anglophone-Literatures-and-Cultures-Reading-Littoral-Space/Kluwick-Richter/p/book/9780367880965?srsltid=AfmBOor8_ZkeUDKWBj5TuPKOV29ApfgHfKtIDk84K5oTYxVf3mbRHXC-" target="_blank">The Beach in Anglophone Literatures and Cultures</a> (Ashgate 2015), one of the first collections on this topic. Her current project approaches the beach in modernist literature from a comparative perspective, and she is also writing a field guide to littoral studies. For the atlas, Virginia selected texts from the first half of the long twentieth century.</p>
					<p><i>Marion Troxler</i> is a PhD candidate in the project. Her thesis explores how reading the beach together with merfolk, given their shared hybrid and metamorphic qualities, provides insights into their potential for resisting hegemonic dualistic hierarchies. Her selection of texts highlights the changing role of mermaids, selkies, Mami Wata, and other related figures over the long 20th century, especially in regard to patriarchal and (post-)colonial structures.</p></div>`
				}
			]
		}
	};

	const atlanticInfo: ModalSettings = {
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

	const northernInfo: ModalSettings = {
		type: 'component',
		component: 'info',
		title: 'Northern Seas',
		meta: {
			region: 'northern-sea',
			btnClasses:
				'btn border bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500',
			color: 'quarternary-500',
			tabs: [
				{
					name: 'about',
					label: 'About',
					content: `<p>This is the Northern Seas region, encompassing texts set in countries bordering the North Sea, the Baltic Sea, parts of the North Atlantic Ocean, and the Norwegian Sea. Literary scenes here often evoke moods of curiosity, and contemplation, in suspense between happy and melancholic, with prominent events including introspection and encounters . Unlike the exuberant vacationscape of the Mediterranean, leisure in the Northern Seas often involves subtler, more introverted activities. This region also features the most pollution-themed texts, where leisure and pollution frequently appear together. This juxtaposition suggests the enduring idea of the beach as a place of leisure despite the growing visibility of anthropogenic pollution.</p>`
				}
			]
		}
	};

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
				}
			]
		}
	};

	onMount(async () => {
		//check whether the cookie is set. if not, show the modal
		modalStore.trigger({ type: 'component', component: 'intro' });
		//set the cookie to expire in 6 months
		await tick();

		//scroll to the top of the modal
		document.querySelector('.modal-body')?.scrollTo({ top: 0, behavior: 'instant' });
	});

	let svgWidth: number;
	let svgHeight: number;
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		{#snippet button(href: string, baseColor: string, hoverColor: string, text: string)}
			<a
				{href}
				class="btn border bg-{baseColor} text-{hoverColor} hover:bg-{hoverColor} hover:text-{baseColor} hover:filter-none"
			>
				{text}
			</a>
		{/snippet}
		{#snippet atlanticButton()}
			{@render button(
				`${base}/region/black-atlantic`,
				`secondary-500`,
				`surface-900`,
				`Black Atlantic`
			)}
		{/snippet}
		{#snippet mediterraneanButton()}
			{@render button(
				`${base}/region/mediterranean`,
				`tertiary-500`,
				`surface-900`,
				`Mediterranean`
			)}
		{/snippet}
		{#snippet northernButton()}
			{@render button(
				`${base}/region/northern-sea`,
				`quarternary-500`,
				`surface-900`,
				`Northern Seas`
			)}
		{/snippet}
		{#snippet deathButton()}
			{@render button(`${base}/theme/death`, `surface-900`, `primary-500`, `death`)}
		{/snippet}
		{#snippet leisureButton()}
			{@render button(`${base}/theme/leisure`, `surface-900`, `primary-500`, `leisure`)}
		{/snippet}
		{#snippet migrationButton()}
			{@render button(
				`${base}/theme/migration`,
				`surface-900`,
				`primary-500`,
				`migration and exile`
			)}
		{/snippet}
		{#snippet mythButton()}
			{@render button(`${base}/theme/myth`, `surface-900`, `primary-500`, `myth`)}
		{/snippet}
		{#snippet pollutionButton()}
			{@render button(`${base}/theme/pollution`, `surface-900`, `primary-500`, `pollution`)}
		{/snippet}
		<p>An Interactive Atlas of Beach Narratives</p>
		<div class="flex gap-2 mt-4">
			<button
				type="button"
				class="btn-icon bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none border"
				aria-label="info"
				on:click={async () => {
					modalStore.trigger(info);
					//wait until the modal is rendered and then scroll to the top
					await tick();
					document.querySelector('.modal-body')?.scrollTo({ top: 0, behavior: 'instant' });
				}}
			>
				<i class="fa-solid fa-info"></i>
			</button>
			<a
				href="{base}/directory"
				class="btn-icon bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none border"
				aria-label="list of works"
			>
				<i class="fa-solid fa-folder-tree"></i>
			</a>
		</div>
		<section class="mt-2 lg:mt-6">
			<div class="lg:hidden">
				<Accordion class="fill-primary-500" padding="pl-0 pr-4 py-2">
					<AccordionItem>
						<svelte:fragment slot="summary"><h2 class="h3">explore by region</h2></svelte:fragment>
						<svelte:fragment slot="content">
							{@render atlanticButton()}
							{@render mediterraneanButton()}
							{@render northernButton()}
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary"><h2 class="h3">explore by theme</h2></svelte:fragment>
						<svelte:fragment slot="content">
							{@render deathButton()}
							{@render leisureButton()}
							{@render migrationButton()}
							{@render mythButton()}
							{@render pollutionButton()}
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
			<div class="hidden lg:block">
				<h2 class="h3 my-4">explore by region</h2>
				<ul>
					<li class="my-2">
						{@render atlanticButton()}
					</li>
					<li class="my-2">
						{@render mediterraneanButton()}
					</li>
					<li class="my-2">
						{@render northernButton()}
					</li>
				</ul>
			</div>
		</section>
		<section class="hidden lg:block mt-2 lg:mt-6 flex-grow">
			<h2 class="h3 my-4">explore by theme</h2>
			<ul>
				<li class="my-2">
					{@render deathButton()}
				</li>
				<li class="my-2">
					{@render leisureButton()}
				</li>
				<li class="my-2">
					{@render migrationButton()}
				</li>
				<li class="my-2">
					{@render mythButton()}
				</li>
				<li class="my-2">
					{@render pollutionButton()}
				</li>
			</ul>
		</section>
	</svelte:fragment>
	<div
		class="grid"
		style="--scaling: {Math.max(svgWidth / dimensions.width, svgHeight / dimensions.height) || 1};"
	>
		<div class="row-span-full col-span-full h-screen">
			<enhanced:img src={MapImage} class="h-full object-cover" alt="world map" />
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 {dimensions.width} {dimensions.height}"
			preserveAspectRatio="xMidYMid slice"
			id="map"
			class="row-span-full col-span-full h-screen w-full"
			bind:clientHeight={svgHeight}
			bind:clientWidth={svgWidth}
		>
			<a class="anchor" href="{base}/region/black-atlantic" aria-label="Black Atlantic">
				<polygon
					fill="transparent"
					points="1272,2193,1398,2165,1556,2236,2107,2347,2308,2413,2335,2543,2398,2646,2461,2717,2552,2717,2619,2654,2650,2591,2501,2508,2501,2406,2485,2323,2450,2236,2414,2165,2359,2098,2233,2083,2142,2087,2127,2008,2186,1886,2174,1819,2142,1780,2131,1721,2209,1638,2229,1595,1776,1622,1493,1650,1339,1618,1260,1634,1217,1693,1189,1748,1087,1776,1004,1811,969,1874,949,1953,1004,2035,1091,2079"
				></polygon>
			</a>
			<foreignObject x="1600" y="1900" width="660" height="250" class="pointer-events-none">
				{#if svgWidth}<button
						on:click={() => modalStore.trigger(atlanticInfo)}
						class="pointer-events-auto btn border bg-secondary-500 text-surface-900 hover:bg-surface-900 hover:text-secondary-500 hover:filter-none origin-top-left"
						style="transform: scale(calc(1 / var(--scaling)));"
					>
						Black Atlantic
					</button>{/if}
			</foreignObject>
			<a class="anchor" href="{base}/region/mediterranean" aria-label="Mediterranean">
				<polygon
					fill="transparent"
					points="2159,1819,2277,1807,2442,1874,2549,1874,2734,1819,2734,1717,2647,1669,2568,1610,2521,1614,2482,1539,2332,1536,2230,1591,2230,1646,2171,1669,2143,1713,2135,1768"
				></polygon>
			</a>
			<foreignObject x="2300" y="1650" width="700" height="250" class="pointer-events-none">
				{#if svgWidth}<button
						on:click={() => modalStore.trigger(mediterraneanInfo)}
						class="pointer-events-auto btn border bg-tertiary-500 text-surface-900 hover:bg-surface-900 hover:text-tertiary-500 hover:filter-none origin-top-left"
						style="transform: scale(calc(1 / var(--scaling)));"
					>
						Mediterranean
					</button>{/if}
			</foreignObject>
			<a class="anchor" href="{base}/region/northern-sea" aria-label="Northern Seas">
				<polygon
					fill="transparent"
					points="1269,1646,1541,1658,2206,1579,2332,1536,2403,1484,2553,1433,2639,1307,2631,1252,2702,1260,2927,1075,2895,984,2655,425,2356,461,1911,528,1860,843,1828,980,1694,1110,1659,1181,1615,1063,1548,1075,1450,1410,1320,1469"
				></polygon>
			</a>
			<foreignObject x="1800" y="1400" width="660" height="250" class="pointer-events-none">
				{#if svgWidth}<button
						on:click={() => modalStore.trigger(northernInfo)}
						class="pointer-events-auto btn border bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500 hover:filter-none origin-top-left"
						style="transform: scale(calc(1 / var(--scaling)));"
					>
						Northern Seas
					</button>{/if}
			</foreignObject>
		</svg>
	</div>
</SidebarLayout>

<style lang="postcss">
	:global(.modal article) {
		@apply overflow-y-scroll max-h-[65vh];
	}
</style>
