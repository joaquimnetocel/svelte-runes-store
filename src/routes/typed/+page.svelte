<script lang="ts">
	import { functionCreateStore } from '$lib/index.js';
	import Component1 from '../Component1.svelte';
	import Component2 from '../Component2.svelte';
	import type { typeNames } from './typeNames.js';

	const storeCounter = functionCreateStore<number, typeNames>({
		value: 0,
		name: 'nameCounter',
	});
</script>

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
