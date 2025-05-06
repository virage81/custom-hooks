import { useState } from 'react';

type UseArrayResponse<T> = [
	T[],
	{
		push: (item: T) => void;
		update: (index: number, item: T) => void;
		clear: () => void;
		remove: (index: number) => void;
		pop: (index: number) => T;
		filter: (callback: (item: T) => boolean) => void;
	}
];

export function useArray<T>(initialArray: T[]): UseArrayResponse<T> {
	const [array, setArray] = useState(initialArray);

	function push(item: T) {
		setArray(p => [...p, item]);
	}

	function update(index: number, item: T) {
		setArray(p => [...p.slice(0, index), item, ...p.slice(index + 1)]);
	}

	function clear() {
		setArray([]);
	}

	function remove(index: number) {
		setArray(p => [...p.slice(0, index), ...p.slice(index + 1)]);
	}

	function pop(index: number) {
		setArray(p => [...p.slice(0, index), ...p.slice(index + 1)]);
		return array[index];
	}

	function filter(callback: (item: T) => boolean) {
		setArray(p => p.filter(callback));
	}

	return [array, { push, update, clear, remove, pop, filter }];
}
