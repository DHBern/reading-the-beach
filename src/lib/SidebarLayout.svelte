<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="max-w-full">
	<aside class="m-4">
		<h1 class="h1"><a href="{base}/">The Beach Atlas</a></h1>
		<div class="grid sm:grid-cols-2">
			<slot name="sidebar"></slot>
		</div>
	</aside>
	<main>
		<slot></slot>
	</main>
</div>
