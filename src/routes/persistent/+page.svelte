<script lang="ts">
	import { functionCreateStore } from '$lib/index.js';
	import Component1 from './Component1.svelte';
	import Component2 from './Component2.svelte';

	const storeCounter = functionCreateStore({
		value: 0,
		name: 'namePersistentCounter',
		persistent: true,
	});
</script>

<h2>Modify the counter and refresh the page to see that the counter will persist.</h2>

<h1>PARENT:</h1>

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

<Component1 />
<Component2 />
