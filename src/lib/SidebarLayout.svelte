<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="max-w-full lg:grid lg:grid-cols-[320px_1fr]">
	<aside class="px-4 @container h-screen shadow-[0_.5rem_1rem_rgba(0,0,0,.5)] flex flex-col">
		<h1 class="flex-none text-3xl"><a href="{base}/">The Beach Atlas</a></h1>
		<div class="flex @[320px]:grid flex-col @[320px]:grid-cols-2 flex-1 overflow-auto">
			<slot name="sidebar"></slot>
		</div>
	</aside>
	<main>
		<slot></slot>
	</main>
</div>
