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
			<title> explore more regions</title>
			<ul>
				<li>
					<a href="{base}/mediterranean" class="btn variant-filled-tertiary">Mediterranean</a>
				</li>
				<li>
					<a
						href="{base}/north-sea"
						class="btn bg-quarternary-500 text-surface-700 hover:bg-surface-700 hover:text-quarternary-500"
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
