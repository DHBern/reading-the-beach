<script lang="ts">
	import '../app.postcss';
	import '@fortawesome/fontawesome-free/css/solid.min.css';
	import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
	import { initializeStores, Modal } from '@skeletonlabs/skeleton';
	import type { ModalComponent } from '@skeletonlabs/skeleton';
	import InfoModal from '$lib/InfoModal.svelte';

	const modalRegistry: Record<string, ModalComponent> = {
		info: { ref: InfoModal }
	};

	initializeStores();
</script>

<Modal
	background="bg-surface-900"
	buttonNeutral="bg-primary-500 text-surface-900 hover:bg-surface-900 hover:text-primary-500 border"
	components={modalRegistry}
/>

<slot />
