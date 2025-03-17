import { browser } from '$app/environment';
import { setContext } from 'svelte';

export function functionCreateStore<T, K extends string = string>({
	value,
	key,
	persistent = false,
	storage = 'localStorage',
}: {
	value: T;
	key: K;
	persistent?: boolean;
	storage?: 'localStorage' | 'sessionStorage';
}) {
	if (!persistent || !browser) {
		let state = $state(value);
		const store = {
			get value() {
				return state;
			},
			set value(par) {
				state = par;
			},
		};
		setContext(key, store);
		return store;
	}

	const chosenStorage = storage === 'localStorage' ? localStorage : sessionStorage;
	const stored = chosenStorage.getItem(key);
	if (stored !== null) {
		value = JSON.parse(stored);
	}
	let state = $state(value);
	const store = {
		get value() {
			return state;
		},
		set value(par) {
			chosenStorage.setItem(key, JSON.stringify(par));
			state = par;
		},
	};
	setContext(key, store);

	return store;
}
