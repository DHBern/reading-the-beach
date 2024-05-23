<script lang="ts">
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { base } from '$app/paths';
	import MapImage from '$lib/Worldmap-Base.png?enhanced';
	//@ts-ignore
	import dimensions from '$lib/Worldmap-Base.png?as=meta:height;width';
	import { getModalStore, Accordion, AccordionItem } from '@skeletonlabs/skeleton';
	import type { ModalSettings } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	const modalStore = getModalStore();

	const info: ModalSettings = {
		type: 'alert',
		// Data
		title: 'How to read the Beach Atlas',
		body: `
		<h2 class="h3 my-3">Explore by regions</h2>
        <p>These literary representations reflect the importance of the beach in everyday culture, as a vacation site, a contact zone, a site of capitalist production and,
		 in recent years, an arrival zone for refugees and a scene of terrorist attacks. With the irrefutability of global warming, the littoral ecotone has also emerged
		  as a site where its effects have become most dramatically visible. This project seeks to redress this neglect, reclaiming the beach as a central space of modernity
		and postmodernity: <a href="${base}/region/black-atlantic" class="badge variant-filled-secondary hover:!text-secondary-500 hover:!bg-surface-900">Black Atlantic</a>,
		<a href="${base}/region/mediterranean"  class="badge variant-filled-tertiary hover:!text-tertiary-500 hover:!bg-surface-900">Mediterranean</a>,
		<a href="${base}/region/northern-sea" class="badge bg-quarternary-500 text-surface-900  hover:!text-quarternary-500 hover:!bg-surface-900">Northern Sea</a></p>
      <h2 class="h3 my-3">Explore by topic</h2>
        <p>These literary representations reflect the importance of the beach in everyday culture, as a vacation site, a contact zone, a site of capitalist production and,
		 in recent years, an arrival zone for refugees and a scene of terrorist attacks. With the irrefutability of global warming, the littoral ecotone has also emerged
		  as a site where its effects have become most dramatically visible. One of the aims of this project is to produce an interactive online literary atlas of beach narratives,
		  making our research accessible to a wider public: <a href="${base}/topic/death" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">death</a>,
		 <a href="${base}/topic/leisure" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">leisure</a>,
		 <a href="${base}/topic/migration" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">migration and exile</a>,
		 <a href="${base}/topic/myth" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">myth</a>,
		 <a href="${base}/topic/pollution" class="badge bg-surface-900 hover:bg-primary-500 hover:text-surface-900 border">pollution</a></p>
      <h2 class="h3 my-3">About the dataset</h2>
        <p>These literary representations reflect the importance of the beach in everyday culture, as a vacation site, a contact zone, a site of capitalist production and,
			 in recent years, an arrival zone for refugees and a scene of terrorist attacks. With the irrefutability of global warming, the littoral ecotone has also emerged
			  as a site where its effects have become most dramatically visible. This project seeks to redress this neglect, reclaiming the beach as a central space of modernity
			  and postmodernity. We will approach the beach from the perspectives of postcolonial studies, ecocriticism and new materialism. One of the aims of this project is to
			  produce an interactive online literary atlas of beach narratives, making our research accessible to a wider public.</p>
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
					name: 'mood',
					label: 'Mood',
					content: `<p>This is the Northern Sea region. This region encompasses texts that are set in countries
								bordering the North Sea, the Baltic Sea, parts of the North Atlantic Ocean and the
								Norwegian
								Sea. For this region, some clear results have been identified. The materiality
								of the beaches in these texts are often rocky, shingles, fossils, driftwood
								and plastic.
								The mood is also characterised
								by being contemplative, curious,
								and morbid.</p>`
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
		title: 'Northern Sea',
		meta: {
			region: 'northern-sea',
			btnClasses:
				'btn border bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500',
			color: 'quarternary-500',
			tabs: [
				{
					name: 'mood',
					label: 'Mood',
					content: `<p>This is the Northern Sea region. This region encompasses texts that are set in countries
bordering the North Sea, the Baltic Sea, parts of the North Atlantic Ocean and the
Norwegian
Sea. For this region, some clear results have been identified. The materiality
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
					name: 'mood',
					label: 'Mood',
					content: `<p>This is the Northern Sea region. This region encompasses texts that are set in countries
								bordering the North Sea, the Baltic Sea, parts of the North Atlantic Ocean and the
								Norwegian
								Sea. For this region, some clear results have been identified. The materiality
								of the beaches in these texts are often rocky, shingles, fossils, driftwood
								and plastic.
								The mood is also characterised
								by being contemplative, curious,
								and morbid.</p>`
				}
			]
		}
	};
	let svg: SVGElement;

	onMount(() => {
		//check whether the cookie is set. if not, show the modal
		if (!document.cookie.includes('showInfoModal')) {
			modalStore.trigger(info);
			//set the cookie to expire in 6 months
			document.cookie = 'showInfoModal=true; max-age=15552000';
		}
	});
</script>

<svelte:window on:resize={() => (svg = svg)} />
<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<p>A Literary Atlas of the Beach in the Long 20th Century</p>
		<button
			type="button"
			class="btn-icon mt-3 bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none border"
			on:click={() => modalStore.trigger(info)}
		>
			<i class="fa-solid fa-info"></i>
		</button>
		<section class="mt-2 lg:mt-6">
			{#snippet button(href, baseColor, hoverColor, text)}
				<a
					href="{href}"
					class="btn border bg-{baseColor} text-{hoverColor} hover:bg-{hoverColor} hover:text-{baseColor} hover:filter-none"
				>
					{text}
				</a>
			{/snippet}
			{#snippet atlanticButton()}
				{@render button(`${base}/region/black-atlantic`, `secondary-500`, `surface-900`, `Black Atlantic`)}
			{/snippet}
			{#snippet mediterraneanButton()}
				{@render button(`${base}/region/mediterranean`, `tertiary-500`, `surface-900`, `Mediterranean`)}
			{/snippet}
			{#snippet northernButton()}
				{@render button(`${base}/region/northern-sea`, `quarternary-500`, `surface-900`, `Northern Sea`)}
			{/snippet}
			{#snippet deathButton()}
				{@render button(`${base}/topic/death`, `surface-900`, `primary-500`, `death`)}
			{/snippet}
			{#snippet leisureButton()}
				{@render button(`${base}/topic/leisure`, `surface-900`, `primary-500`, `leisure`)}
			{/snippet}
			{#snippet migrationButton()}
				{@render button(`${base}/topic/migration`, `surface-900`, `primary-500`, `migration and exile`)}
			{/snippet}
			{#snippet mythButton()}
				{@render button(`${base}/topic/myth`, `surface-900`, `primary-500`, `myth`)}
			{/snippet}
			{#snippet pollutionButton()}
				{@render button(`${base}/topic/pollution`, `surface-900`, `primary-500`, `pollution`)}
			{/snippet}
			<div class="lg:hidden">
				<Accordion class="fill-primary-500" padding="pl-0 pr-4 py-2" >
					<AccordionItem>
						<svelte:fragment slot="summary"><h2 class="h3">explore by region</h2></svelte:fragment>
						<svelte:fragment slot="content">
							{@render atlanticButton()}
							{@render mediterraneanButton()}
							{@render northernButton()}
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary"><h2 class="h3">explore by topic</h2></svelte:fragment>
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
			<h2 class="h3 my-4">explore by topic</h2>
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
		style="--scaling: {Math.max(
			svg?.clientWidth / dimensions.width,
			svg?.clientHeight / dimensions.height
		) || 1};"
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
			bind:this={svg}
		>
			<a href="{base}/region/black-atlantic">
				<polygon
					fill="transparent"
					points="962,1957 1096,2075 1356,2173 1596,2248 2399,2465 2482,2343,2415,2197,2332,2110,2151,2099,2100,2004,2155,1886,2163,1819,2139,1772,2147,1713,2171,1669,2226,1650,2234,1595,2210,1579,1545,1654,1340,1642,1269,1646,1194,1756,1037,1788,989,1862"
				></polygon>
			</a>
			<foreignObject x="1600" y="1900" width="660" height="250" class="pointer-events-none">
				{#if svg?.clientWidth}<button
						on:click={() => modalStore.trigger(atlanticInfo)}
						class="pointer-events-auto btn border bg-secondary-500 text-surface-900 hover:bg-surface-900 hover:text-secondary-500 hover:filter-none origin-top-left"
						style="transform: scale(calc(1 / var(--scaling)));"
					>
						Black Atlantic
					</button>{/if}
			</foreignObject>
			<a href="{base}/region/mediterranean">
				<polygon
					fill="transparent"
					points="2159,1819,2277,1807,2442,1874,2549,1874,2734,1819,2734,1717,2647,1669,2568,1610,2521,1614,2482,1539,2332,1536,2230,1591,2230,1646,2171,1669,2143,1713,2135,1768"
				></polygon>
			</a>
			<foreignObject x="2300" y="1650" width="700" height="250" class="pointer-events-none">
				{#if svg?.clientWidth}<button
						on:click={() => modalStore.trigger(mediterraneanInfo)}
						class="pointer-events-auto btn border bg-tertiary-500 text-surface-900 hover:bg-surface-900 hover:text-tertiary-500 hover:filter-none origin-top-left"
						style="transform: scale(calc(1 / var(--scaling)));"
					>
						Mediterranean
					</button>{/if}
			</foreignObject>
			<a href="{base}/region/northern-sea">
				<polygon
					fill="transparent"
					points="1269,1646,1541,1658,2206,1579,2332,1536,2403,1484,2553,1433,2639,1307,2631,1252,2702,1260,2927,1075,2895,984,2655,425,2356,461,1911,528,1860,843,1828,980,1694,1110,1659,1181,1615,1063,1548,1075,1450,1410,1320,1469"
				></polygon>
			</a>
			<foreignObject x="1800" y="1400" width="660" height="250" class="pointer-events-none">
				{#if svg?.clientWidth}<button
						on:click={() => modalStore.trigger(northernInfo)}
						class="pointer-events-auto btn border bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500 hover:filter-none origin-top-left"
						style="transform: scale(calc(1 / var(--scaling)));"
					>
						Northern Sea
					</button>{/if}
			</foreignObject>
		</svg>
	</div>
</SidebarLayout>

<style>
	:global(.modal article) {
		@apply overflow-y-scroll max-h-[65vh];
	}
</style>
