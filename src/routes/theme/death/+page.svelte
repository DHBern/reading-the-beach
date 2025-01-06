<script lang="ts">
	import { base } from '$app/paths';
	import SidebarLayout from '$lib/SidebarLayout.svelte';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

{#snippet button(href: string, baseColor: string, hoverColor: string, text: string)}
	<a
		{href}
		class="btn border bg-{baseColor} text-{hoverColor} hover:bg-{hoverColor} hover:text-{baseColor} hover:filter-none"
	>
		{text}
	</a>
{/snippet}

<!-- svelte-ignore element_invalid_self_closing_tag -->
<SidebarLayout>
	<svelte:fragment slot="sidebar">
		{#snippet content()}
			<p>
				The theme "Myth" includes a variety of aspects such as re-writings of classical myths and
				folklore as well as the appearance of mythological and fantastical creatures. Due to the
				selection of texts, mermaids, selkies and other merfolk appear more in the Northern Seas and
				Black Atlantic regions, while the Mediterranean features more rewritings of classical myths.
			</p>
		{/snippet}
		{#snippet buttons()}
			<ul>
				<li class="mt-2">
					{@render button(`${base}/theme/leisure`, `surface-900`, `primary-500`, `leisure`)}
				</li>
				<li class="mt-2">
					{@render button(
						`${base}/theme/migration`,
						`surface-900`,
						`primary-500`,
						`migration and exile`
					)}
				</li>
				<li class="mt-2">
					{@render button(`${base}/theme/myth`, `surface-900`, `primary-500`, `myth`)}
				</li>
				<li class="mt-2">
					{@render button(`${base}/theme/pollution`, `surface-900`, `primary-500`, `pollution`)}
				</li>
			</ul>
		{/snippet}
		<a
			class="btn btn-sm w-fit mt-2 border bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 hover:filter-none"
			href="{base}/"><span><i class="fa-solid fa-arrow-left"></i></span><span>main map</span></a
		>
		<section class="overflow-scroll">
			<div class="lg:hidden">
				<Accordion class="fill-primary-500" padding="pl-0 pr-4 py-2">
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3 mt-4 mb-2">Death</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render content()}
						</svelte:fragment>
					</AccordionItem>
					<AccordionItem>
						<svelte:fragment slot="summary">
							<h2 class="h3">explore more themes</h2>
						</svelte:fragment>
						<svelte:fragment slot="content">
							{@render buttons()}
						</svelte:fragment>
					</AccordionItem>
				</Accordion>
			</div>
			<div class="hidden lg:block">
				<h2 class="h3 mt-4 mb-2">Death</h2>
				{@render content()}
			</div>
		</section>
		<section class="my-4 hidden lg:block">
			<h2 class="h3">explore more themes</h2>
			{@render buttons()}
		</section>
	</svelte:fragment>
	<iframe
		title="Death map"
		src="https://nodegoat.unibe.ch/viewer.p/59/2703/scenario/18/geo/"
		width="100%"
		height="100%"
	>
	</iframe>
</SidebarLayout>
