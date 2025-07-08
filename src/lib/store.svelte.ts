import { getContext, hasContext, setContext } from 'svelte';

function create<V, K extends string = string>({
	key,
	value,
	storage,
}: {
	key: K;
	value: V;
	storage?: 'localStorage' | 'sessionStorage';
}) {
	const browser = typeof window !== 'undefined';

	let initial: V = value;

	if (storage && browser) {
		const chosenStorage = storage === 'localStorage' ? localStorage : sessionStorage;
		const stored = chosenStorage.getItem(key);
		if (stored !== null) {
			initial = JSON.parse(stored);
		}
	}

	let state = $state(initial);

	const wrapper = {
		get value() {
			return state;
		},
		set value(newValue) {
			state = newValue;
			if (storage && browser) {
				const chosenStorage = storage === 'localStorage' ? localStorage : sessionStorage;
				chosenStorage.setItem(key, JSON.stringify(newValue));
			}
		},
	};

	setContext(key, wrapper);
}

function read<V, K extends string = string>({ key }: { key: K }) {
	if (hasContext(key)) {
		return getContext<{ value: V }>(key);
	}
	throw new Error(`Context with key "${key}" not found.`);
}

export const store = {
	create,
	read,
};
