import { useEffect, useState } from 'react';

function getValueStorage<T>(key: string, initial: T) {
	if (initial instanceof Function) return initial();

	return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : initial;
}

export function useLocalStorage<T>(key: string, initial: T) {
	const [value, setValue] = useState(() => getValueStorage(key, initial));

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
}
