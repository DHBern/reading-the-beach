<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<a class="btn variant-filled" href="{base}/">main map</a>
		<h2>Black Atlantic</h2>
		<p>Explore the Black Atlantic</p>
		<section>
			<h3 class="h3">explore more regions</h3>
			<ul>
				<li>
					<a
						href="{base}/region/mediterranean"
						class="btn border bg-tertiary-500 text-surface-900 hover:bg-surface-900 hover:text-tertiary-500 hover:filter-none"
						>Mediterranean</a
					>
				</li>
				<li>
					<a
						href="{base}/region/northern-sea"
						class="btn bg-quarternary-500 text-surface-900 hover:bg-surface-900 hover:text-quarternary-500"
						>Northern Sea</a
					>
				</li>
			</ul>
		</section>
	</svelte:fragment>
	<iframe
		title="Black Atlantic map"
		src="https://nodegoat.unibe.ch/viewer.p/34/2703/scenario/5/geo/fullscreen"
		width="100%"
		height="auto"
	>
	</iframe>
</SidebarLayout>
