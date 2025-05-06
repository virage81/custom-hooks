import { useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (value: LocalStorageSetValue) => void;
		removeItem: () => void;
	}
];

const getValueFromLocalStorage = (key: string) => {
	return localStorage.getItem('key') ? JSON.parse(localStorage.getItem(key) as string) : null;
};

export const useLocalStorage: UseLocalStorage = (key: string) => {
	const [value, setValue] = useState(() => getValueFromLocalStorage(key));

	const setItem = (value: LocalStorageSetValue) => {
		localStorage.setItem(key, JSON.stringify(value));
		setValue(value);
	};

	const removeItem = () => {
		localStorage.removeItem(key);
		setValue(null);
	};

	return [
		value,
		{
			setItem,
			removeItem,
		},
	];
};
