<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="max-w-full lg:grid lg:grid-cols-[320px_1fr]">
	<aside class="px-4 @container lg:h-screen shadow-[0_.5rem_1rem_rgba(0,0,0,.5)] flex flex-col">
		<h1 class="flex-none text-3xl"><a href="{base}/">The Beach Atlas</a></h1>
		<div
			class="flex flex-col @[600px]:grid @[600px]:grid-cols-[1fr_auto] @[600px]:grid-rows-[auto_1fr] @[600px]:gap-4 flex-1 overflow-auto"
		>
			<slot name="sidebar"></slot>
		</div>
	</aside>
	<main class="h-screen">
		<slot></slot>
	</main>
</div>
