import { setContext } from 'svelte';

export function functionCreateStore<genericType, genericForName extends string = string>({
	value,
	name,
	persistent = false,
	storage = 'localStorage',
}: {
	value: genericType;
	name: genericForName;
	persistent?: boolean;
	storage?: 'localStorage' | 'sessionStorage';
}) {
	const browser = typeof window !== 'undefined' && typeof document !== 'undefined';
	if (persistent && browser) {
		const chosenStorage = storage === 'localStorage' ? localStorage : sessionStorage;
		const stringBrowserValue = chosenStorage.getItem(name);
		if (stringBrowserValue !== null) {
			value = JSON.parse(stringBrowserValue);
		}
	}

	let state = $state(value);

	const store = {
		get value() {
			return state;
		},
		set value(par) {
			if (persistent && browser) {
				const chosenStorage = storage === 'localStorage' ? localStorage : sessionStorage;
				chosenStorage.setItem(name, JSON.stringify(par));
			}
			state = par;
		},
	};
	setContext(name, store);

	return store;
}
