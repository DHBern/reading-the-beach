<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="max-w-full lg:grid lg:grid-cols-[320px_1fr]">
	<aside class="mx-4 @container h-screen">
		<h1 class="h1"><a href="{base}/">The Beach Atlas</a></h1>
		<div class="flex @[320px]:grid flex-col @[320px]:grid-cols-2 h-full">
			<slot name="sidebar"></slot>
		</div>
	</aside>
	<main>
		<slot></slot>
	</main>
</div>
