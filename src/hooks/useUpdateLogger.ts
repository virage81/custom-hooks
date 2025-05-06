import { useEffect } from 'react';

export function useUpdateLogger(key: string, value: unknown) {
	useEffect(() => console.debug(`#### ${key}`, value), [key, value]);
}
