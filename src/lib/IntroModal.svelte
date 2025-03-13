<script lang="ts">
	import { getModalStore, TabGroup, Tab } from '@skeletonlabs/skeleton';
	import { base } from '$app/paths';

	const modalStore = getModalStore();

	let tabSet = 0;
</script>

<div
	class="modal block overflow-y-auto bg-surface-900 w-modal h-auto p-4 space-y-4 rounded-container-token shadow-xl"
>
	<header class="modal-header text-2xl font-bold">Digital Shores</header>
	<article class="modal-body overflow-hidden prose">
		<p>
			Welcome to Digital Shores: An Interactive Atlas of Beach Narratives! Here you can access our
			visualisation of the function of the beach in (mainly) anglophone literature, published
			between 1890 and 2023. A map displays our selection of texts – novels, short stories, and
			narrative nonfiction – in which the beach plays a crucial role. From each text we have chosen
			relevant excerpts that showcase the function of the beach.
		</p>
		<p>
			The atlas offers different filters that allow users to approach our material from several
			angles:
		</p>
		<ul class="!list-disc !list-outside ml-4">
			<li>a temporal slider shows historical developments</li>
			<li>
				texts can be grouped according to categories such as agents, events, genre, materiality, and
				mood
			</li>
			<li>regional maps illustrate the specificities of three model regions</li>
			<li>
				thematic maps visualise the geographical distribution of five overarching themes we have
				identified
			</li>
		</ul>
		<TabGroup border="border-b border-primary-500">
			<Tab bind:group={tabSet} name="region" value={0}>Explore by region</Tab>
			<Tab bind:group={tabSet} name="theme" value={1}>Explore by theme</Tab>
			<svelte:fragment slot="panel">
				{#if tabSet === 0}
					<p>
						The texts are grouped into three main regions, colour-coordinated, which can be more
						closely examined: Northern Seas, Mediterranean, the Black Atlantic. While some settings
						can be exactly identified, literature often plays with (re-)imagined and fictionalised
						places. Therefore, texts can only be placed on the map as approximations without claim
						to geographical precision.
					</p>
				{:else if tabSet === 1}
					<p>
						Five maps show the distribution of texts according to themes we have identified as
						particularly prevalent in relation to the beach: Death, Leisure, Migration and Exile,
						Myth, and Pollution. These have crystallised as key concerns shared across texts in our
						readings.
					</p>
				{/if}
			</svelte:fragment>
		</TabGroup>
		<p>Enter and embark on a journey to the beaches of the literary world!</p>
	</article>
	<div class="flex justify-center">
		<button on:click={() => modalStore.close()} class="btn border btn-primary-500">
			Enter Atlas
		</button>
	</div>
</div>
