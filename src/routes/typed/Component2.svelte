<script lang="ts">
	import { functionReadStore } from '$lib/functionReadStore.js';
	import type { typeNames } from './typeNames.js';

	const storeCounter = functionReadStore<number, typeNames>('nameCounter');
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
