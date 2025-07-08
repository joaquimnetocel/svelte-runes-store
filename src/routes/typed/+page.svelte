<script lang="ts">
	import { store } from '$lib/index.js';
	import Component1 from '../Component1.svelte';
	import Component2 from '../Component2.svelte';
	import type { typeNames } from './typeNames.js';

	store.create<number, typeNames>({
		value: 0,
		key: 'keyCounter',
	});

	const counter = store.read<number>({
		key: 'keyCounter',
	});
</script>

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
