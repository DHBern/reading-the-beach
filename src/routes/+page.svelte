<script lang="ts">
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { base } from '$app/paths';
	import MapImage from '$lib/Worldmap-Base.png?enhanced';
	import dimensions from '$lib/Worldmap-Base.png?as=meta:height;width';
	console.log(dimensions);
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<h1><a href={base}>The Beach Atlas</a></h1>
		<p>A Literary Atlas of the Beach in the Long 20th Century</p>
		<i class="fa-solid fa-info"></i>
		<section>
			<title>explore by region</title>
			<ul>
				<li><a href="/" class="btn variant-filled-secondary">Black Atlantic</a></li>
				<li><a href="/" class="btn variant-filled-tertiary">Mediterranean</a></li>
				<li>
					<a
						href="/"
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
				<li><a href="/" class="btn variant-ringed">death</a></li>
				<li><a href="/" class="btn variant-ringed">leisure</a></li>
				<li><a href="/" class="btn variant-ringed">migration and exile</a></li>
				<li><a href="/" class="btn variant-ringed">myth</a></li>
				<li><a href="/" class="btn variant-ringed">pollution</a></li>
			</ul>
		</section>
		<button>About this project</button>
	</svelte:fragment>
	<enhanced:img src={MapImage} />
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={dimensions.width}
		height={dimensions.height}
		viewBox="0 0 {dimensions.width} {dimensions.height}"
		id="map"
	>
	</svg>
</SidebarLayout>
