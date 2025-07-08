<script lang="ts">
	import { store } from '$lib/index.js';
	import Component1 from './Component1.svelte';
	import Component2 from './Component2.svelte';

	store.create({
		value: 0,
		key: 'keyCounter',
		storage: 'localStorage',
	});

	const counter = store.read<number>({
		key: 'keyCounter',
	});
</script>

<h2>Modify the counter and refresh the page to see that the counter will persist.</h2>

<h1>PARENT:</h1>

<div>
	<button
		onclick={() => {
			counter.value = counter.value - 1;
		}}
	>
		-
	</button>
	{counter.value}

	<button
		onclick={() => {
			counter.value = counter.value + 1;
		}}
	>
		+
	</button>
</div>

<Component1 />
<Component2 />
