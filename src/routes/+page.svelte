<script lang="ts">
	import SidebarLayout from '$lib/SidebarLayout.svelte';
</script>

<SidebarLayout>
	<svelte:fragment slot="sidebar">
		<h1 class="text-4xl font-bold">Welcome to Skeleton</h1>
	</svelte:fragment>
	<a
		class="btn bg-quarternary-500 text-surface-700 hover:bg-surface-700 hover:text-quarternary-500"
		href="https://skeleton.dev/"
		target="_blank"
		rel="noreferrer"
	>
		Launch Documentation
	</a>
</SidebarLayout>
