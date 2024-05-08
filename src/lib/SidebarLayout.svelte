<script lang="ts">
	import { base } from '$app/paths';
</script>

<div class="max-w-full lg:grid lg:grid-cols-[320px_1fr]">
	<aside class="m-4 @container">
		<h1 class="h1"><a href="{base}/">The Beach Atlas</a></h1>
		<div class="@[320px]:grid @[320px]:grid-cols-2">
			<slot name="sidebar"></slot>
		</div>
	</aside>
	<main>
		<slot></slot>
	</main>
</div>
