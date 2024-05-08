<script lang="ts">
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { base } from '$app/paths';
	import MapImage from '$lib/Worldmap-Base.png?enhanced';
	//@ts-ignore
	import dimensions from '$lib/Worldmap-Base.png?as=meta:height;width';
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<p>A Literary Atlas of the Beach in the Long 20th Century</p>
		<i class="fa-solid fa-info"></i>
		<section>
			<title>explore by region</title>
			<ul>
				<li>
					<a href="{base}/region/black-atlantic" class="btn variant-filled-secondary"
						>Black Atlantic</a
					>
				</li>
				<li>
					<a href="{base}/region/mediterranean" class="btn variant-filled-tertiary">Mediterranean</a
					>
				</li>
				<li>
					<a
						href="{base}/region/northern-sea"
						class="btn bg-quarternary-500 text-surface-700 hover:bg-surface-700 hover:text-quarternary-500"
					>
						Northern Sea
					</a>
				</li>
			</ul>
		</section>
		<section>
			<title>explore by topic</title>
			<ul>
				<li><a href="{base}/topic/death" class="btn variant-ringed">death</a></li>
				<li><a href="{base}/topic/leisure" class="btn variant-ringed">leisure</a></li>
				<li><a href="{base}/topic/migration" class="btn variant-ringed">migration and exile</a></li>
				<li><a href="{base}/topic/myth" class="btn variant-ringed">myth</a></li>
				<li><a href="{base}/topic/pollution" class="btn variant-ringed">pollution</a></li>
			</ul>
		</section>
		<button>About this project</button>
	</svelte:fragment>
	<div class="grid">
		<div class="row-span-full col-span-full">
			<enhanced:img src={MapImage} />
		</div>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 {dimensions.width} {dimensions.height}"
			id="map"
			class="row-span-full col-span-full"
		>
			<a href="{base}/region/black-atlantic">
				<polygon
					fill="transparent"
					points="962,1957 1096,2075 1356,2173 1596,2248 2399,2465 2482,2343,2415,2197,2332,2110,2151,2099,2100,2004,2155,1886,2163,1819,2139,1772,2147,1713,2171,1669,2226,1650,2234,1595,2210,1579,1545,1654,1340,1642,1269,1646,1194,1756,1037,1788,989,1862"
				></polygon></a
			>
			<a href="{base}/region/mediterranean">
				<polygon
					fill="transparent"
					points="2159,1819,2277,1807,2442,1874,2549,1874,2734,1819,2734,1717,2647,1669,2568,1610,2521,1614,2482,1539,2332,1536,2230,1591,2230,1646,2171,1669,2143,1713,2135,1768"
				></polygon></a
			>
			<a href="{base}/region/northern-sea">
				<polygon
					fill="transparent"
					points="1269,1646,1541,1658,2206,1579,2332,1536,2403,1484,2553,1433,2639,1307,2631,1252,2702,1260,2927,1075,2895,984,2655,425,2356,461,1911,528,1860,843,1828,980,1694,1110,1659,1181,1615,1063,1548,1075,1450,1410,1320,1469"
				></polygon></a
			>
		</svg>
	</div>
	test
</SidebarLayout>
