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
		type: 'alert',
		body: `
		<p>Welcome to Digital Shores: An Interactive Atlas of Beach Narratives! Here you can access our visualisation of the function of the beach in (mainly) anglophone literature, published between 1890 and 2023. A map displays our selection of texts – novels, short stories, and narrative nonfiction – in which the beach plays a crucial role. From each text we have chosen relevant excerpts that showcase the function of the beach.</p>
		<p>The atlas offers different filters that allow users to approach our material from several angles:</p>
		<ul class="list-disc list-outside ml-4">
			<li>A temporal slider shows historical developments</li>
			<li>Texts can be grouped according to categories such as agents, events, genre, materiality, and mood</li>
			<li>Regional maps illustrate the specificities of three model regions</li>
			<li>Thematic maps visualise the geographical distribution of five overarching themes we have identified</li>
		</ul>
		<p>Enter here and embark on a journey to the beaches of the literary world!</p>
		<h2 class="h3 my-3">Explore by region</h2>
        <p>The texts are grouped into three main regions, colour-coordinated, which can be more closely examined: <a href="${base}/region/black-atlantic" class="badge variant-filled-secondary hover:!text-secondary-500 hover:!bg-surface-900">Black Atlantic</a>,
		<a href="${base}/region/mediterranean"  class="badge variant-filled-tertiary hover:!text-tertiary-500 hover:!bg-surface-900">Mediterranean</a>,
		<a href="${base}/region/northern-sea" class="badge bg-quarternary-500 text-surface-900  hover:!text-quarternary-500 hover:!bg-surface-900">Northern Seas</a>. While some settings can be exactly identified, literature often plays with (re-)imagined and fictionalised places. Therefore, texts can only be placed on the map as approximations without claim to geographical precision.</p>
      <h2 class="h3 my-3">Explore by theme</h2>
        <p>Five maps show the distribution of texts according to themes we have identified as particularly prevalent in relation to the beach: <a href="${base}/theme/death" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">death</a>,
		 <a href="${base}/theme/leisure" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">leisure</a>,
		 <a href="${base}/theme/migration" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">migration and exile</a>,
		 <a href="${base}/theme/myth" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">myth</a> and
		 <a href="${base}/theme/pollution" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">pollution</a>. These have crystallised as key concerns shared across texts in our readings.</p>
		`,
		buttonTextCancel: 'Close'
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
					content: `<p>This is the Black Atlantic region. It encompasses a zone between Europe, Africa, the Americas, and the Caribbean. Here represented as a geographical region,
						the Black Atlantic refers to a term coined by Paul Gilroy which emphasises the necessity of a transnational and intercultural perspective that takes the colonial legacy
						into account. Given its history, it was surprising to find the expected themes of migration and death appear rarely in our selection of texts.</p>`
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
					content: `<p>This is the Northern Seas region. This region encompasses texts that are set in countries
						bordering the North Sea, the Baltic Sea, parts of the North Atlantic Ocean and the
						Norwegian Sea. For this region, some clear results have been identified. The materiality
						of the beaches in these texts are often rocky, shingles, fossils, driftwood
						and plastic.
						The mood is also characterised
						by being contemplative, curious,
						and morbid.</p>`
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
					content: `<p>This is the Mediterranean region. It includes texts set in southern Europe, Asia Minor, and Northern Africa.
						The Mediterranean is its function as a holiday destination, but also as a link between north and south, east and west.
						This is reflected in the events mainly associated with Mediterranean beaches: leisure activities, such as bathing and swimming, but also encounters,
						arrivals, and departures. Despite the prominence of vacationscape, literary scenes set on Mediterranean beaches are shaped by contemplative and foreboding
						moods. This suggests that the Mediterranean is an ambivalent space, a site of tension in which different interests grapple with each other and in which
						carefree holiday atmospheres can quickly tip into something more sinister.</p>`
				}
			]
		}
	};

	onMount(async () => {
		//check whether the cookie is set. if not, show the modal
		if (!document.cookie.includes('showInfoModal')) {
			modalStore.trigger(info);
			//set the cookie to expire in 6 months
			document.cookie = 'showInfoModal=true; max-age=15552000';
			await tick();

			//scroll to the top of the modal
			document.querySelector('.modal-body')?.scrollTo({ top: 0, behavior: 'instant' });
		}
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
		<button
			type="button"
			class="btn-icon mt-3 bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none border"
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
			<a href="{base}/region/black-atlantic" aria-label="Black Atlantic">
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
			<a href="{base}/region/mediterranean" aria-label="Mediterranean">
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
			<a href="{base}/region/northern-sea" aria-label="Northern Seas">
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
