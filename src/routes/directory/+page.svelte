<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<a
			class="btn btn-sm w-fit mt-2 border bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none"
			href="{base}/"><span><i class="fa-solid fa-arrow-left"></i></span><span>main map</span></a
		>
		<section class="overflow-scroll">
			<div class="hidden lg:block">
				<h2 class="h3 mt-4 mb-2">Directory</h2>
				<p>
					This is a directory of all the works analyzed in the project. You can filter the list or
					search for a specific work or author.
				</p>
			</div>
		</section>
	</svelte:fragment>
	<iframe
		title="directory"
		src="https://nodegoat.unibe.ch/viewer.p/64/2539/types/all/list/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
