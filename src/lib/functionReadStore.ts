import { getContext } from 'svelte';

export function functionReadStore<T, K extends string = string>(key: K) {
	return getContext<{ value: T }>(key);
}
