import { getContext } from 'svelte';

export function functionReadStore<genericForValue, genericForName extends string = string>(
	name: genericForName,
) {
	return getContext<{ value: genericForValue }>(name);
}
