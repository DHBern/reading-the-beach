<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="max-w-full">
	<aside>
		<h1><a href="{base}/">The Beach Atlas</a></h1>
		<slot name="sidebar"></slot>
	</aside>
	<main>
		<slot></slot>
	</main>
</div>
