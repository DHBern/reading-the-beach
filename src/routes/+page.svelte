<script lang="ts">
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { base } from '$app/paths';
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<h1><a href={base}>The Beach Atlas</a></h1>
		<p>A Literary Atlas of the Beach in the Long 20th Century</p>
	</svelte:fragment>
	<a
		class="btn bg-quarternary-500 text-surface-700 hover:bg-surface-700 hover:text-quarternary-500"
		href="https://skeleton.dev/"
		target="_blank"
		rel="noreferrer"
	>
		Launch Documentation
	</a>
	<i class="fa-solid fa-user"></i>
</SidebarLayout>
