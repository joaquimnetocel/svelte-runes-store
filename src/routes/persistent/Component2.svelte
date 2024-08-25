<script lang="ts">
	import { functionReadStore } from '$lib/functionReadStore.js';

	const storeCounter = functionReadStore<number>('namePersistentCounter');
</script>

<h1>COMPONENT 2:</h1>

<div>
	<button
		onclick={() => {
			storeCounter.value = storeCounter.value - 1;
		}}
	>
		-
	</button>
	{storeCounter.value}

	<button
		onclick={() => {
			storeCounter.value = storeCounter.value + 1;
		}}
	>
		+
	</button>
</div>
