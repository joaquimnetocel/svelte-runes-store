<script lang="ts">
	import { store } from '$lib/index.js';

	const counter = store.read<number>({
		key: 'keyCounter',
	});
</script>

<h1>COMPONENT 1:</h1>

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
