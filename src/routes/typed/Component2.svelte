<script lang="ts">
	import { store } from '$lib/index.js';
	import type { typeNames } from './typeNames.js';

	const counter = store.read<number, typeNames>({
		key: 'keyCounter',
	});
</script>

<h1>COMPONENT 2:</h1>

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
